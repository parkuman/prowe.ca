import { APIErrorCode, ClientErrorCode, isNotionClientError } from "@notionhq/client";
import type {
	QueryDatabaseResponse,
	GetPagePropertyResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { PostFrontmatter } from "$types/BlogPost";
import type { ProjectFrontmatter } from "$types/Project";

type NotionProperty = GetPagePropertyResponse["type"];
type BlogProperty = keyof PostFrontmatter;
type ProjectProperty = keyof ProjectFrontmatter;
type NotionPageResponse = QueryDatabaseResponse["results"][number];

export function getPropertyValue(property: string, notionPageRes: NotionPageResponse) {
	const propertyType: NotionProperty = notionPageRes.properties[property].type;
	const propertyValue = notionPageRes.properties[property][propertyType];

	switch (propertyType) {
		case "rich_text": // Array<RichTextItemResponse>
			// rich_text is actually an array. if there's more than one element return the array of plain text values
			if (propertyValue.length > 1) {
				const richTextList: string[] = [];
				propertyValue.forEach((value) => {
					if (!(value.plain_text === " " || value.plain_text === "\n")) {
						richTextList.push(value.plain_text);
					}
				});

				return richTextList;
			}

			// otherwise just return the one value as a string
			return propertyValue[0]?.plain_text ?? "";
		case "people": // Array<PartialUserObjectResponse>
			// extracts only the first person in the list
			return propertyValue[0]?.name ?? "";
		case "date": // DateResponse | null
			return {
				start: propertyValue.start ?? "",
				end: propertyValue.end ?? null,
			};
		case "multi_select": // Array<SelectPropertyResponse>
			// extracts just the names of each tag and returns them as an array of strings
			if (!propertyValue.length) return [];
			return propertyValue.map((select) => {
				return {
					name: select.name,
					color: select.color,
				};
			});
	}

	// default to just returning the property value otherwise
	return propertyValue;
}

export function getBlogPostProperty(property: BlogProperty, notionPageRes: NotionPageResponse) {
	const receivedProperty = getPropertyValue(property, notionPageRes);

	if (property === "date") {
		return receivedProperty.start;
	}

	return receivedProperty;
}

export function getProjectProperty(property: ProjectProperty, notionPageRes: NotionPageResponse) {
	return getPropertyValue(property, notionPageRes);
}

export function checkNotionError(error: unknown): number {
	let code = 500;

	if (isNotionClientError(error)) {
		// error is now strongly typed to NotionClientError
		switch (error.code) {
			case ClientErrorCode.RequestTimeout:
				code = 408;
				break;
			case APIErrorCode.ObjectNotFound:
				code = 404;
				break;
			case APIErrorCode.Unauthorized:
				code = 401;
				break;
		}
	}

	return code;
}
