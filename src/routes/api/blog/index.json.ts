import { Client } from "@notionhq/client";
import { getBlogPostProperty, checkNotionError } from "$lib/notion";
import type { PostFrontmatter } from "$types/BlogPost";

const notion = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY });

export const get = async () => {
	try {
		const blogPostQuery = await notion.databases.query({
			database_id: import.meta.env.VITE_NOTION_BLOG_DB, // https://www.notion.so/prowes/2998e28191c04363ad30bd44cbde863a?v=e32681b967bd4f47bee48e8f18ab561c
			filter: {
				property: "status",
				select: {
					equals: "PUBLISHED",
				},
			},
		});

		if (blogPostQuery?.results.length === 0) {
			return {
				status: 404,
				body: { message: "Sorry, there are no blog posts yet" },
			};
		}

		const postFrontmatters = blogPostQuery.results.map((post) => {
			const frontmatter: PostFrontmatter = {
				title: getBlogPostProperty("title", post),
				summary: getBlogPostProperty("summary", post),
				slug: getBlogPostProperty("slug", post),
				author: getBlogPostProperty("author", post),
				date: getBlogPostProperty("date", post),
				tags: getBlogPostProperty("tags", post),
			};

			return frontmatter;
		});

		// sort the posts by date
		const sortedPostFrontmatters = postFrontmatters.sort(
			(a: PostFrontmatter, b: PostFrontmatter) => {
				return new Date(b.date).valueOf() - new Date(a.date).valueOf();
			},
		);

		return {
			body: sortedPostFrontmatters,
		};
	} catch (error: unknown) {
		const code = checkNotionError(error);
		return {
			status: code,
		};
	}
};
