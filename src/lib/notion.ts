import { APIErrorCode, ClientErrorCode, isNotionClientError } from "@notionhq/client";
import type {
	QueryDatabaseResponse,
	GetPagePropertyResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { PostFrontmatter } from "$types/BlogPost";

type NotionProperty = GetPagePropertyResponse["type"];
type BlogProperty = keyof PostFrontmatter;
type NotionPageResponse = QueryDatabaseResponse["results"][number];

export function getPropertyValue(property: string, notionPageRes: NotionPageResponse) {
	const propertyType: NotionProperty = notionPageRes.properties[property].type;
	const propertyValue = notionPageRes.properties[property][propertyType];

	switch (propertyType) {
		case "rich_text": // Array<RichTextItemResponse>
			// gets simply the first text for that property, no need for all the extra stuff
			return propertyValue[0].plain_text;
		case "people": // Array<PartialUserObjectResponse>
			// extracts only the first person in the list
			return propertyValue[0].name;
		case "date": // DateResponse | null
			// gets just the start of the date
			return propertyValue.start;
		case "multi_select": // Array<SelectPropertyResponse>
			// extracts just the names of each tag and returns them as an array of strings
			return propertyValue.map((select) => select.name);
	}

  // default to just returning the property value otherwise
	return propertyValue;
}

export function getBlogPostProperty(property: BlogProperty, notionPageRes: NotionPageResponse) {
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
