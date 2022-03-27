import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { getBlogPostProperty, checkNotionError } from "$lib/notion";
import type BlogPost from "$types/BlogPost";
import type { PostFrontmatter } from "$types/BlogPost";
import { mdToHtml } from "$lib/markdown";

const notion = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY });
const n2md = new NotionToMarkdown({ notionClient: notion });

export const get = async ({ params }) => {
	const { slug } = params;

	try {
		const blogPostQuery = await notion.databases.query({
			database_id: import.meta.env.VITE_NOTION_PROJECTS_DB, 
			filter: {
				and: [
					{
						property: "status",
						select: {
							equals: "PUBLISHED",
						},
					},
					// get the blog post specifically, should return an array with one element unless there are more than one published blog post with the same slug
					{
						property: "slug",
						rich_text: {
							equals: slug,
						},
					},
				],
			},
		});

		if (blogPostQuery?.results.length === 0) {
			return {
				status: 404,
				body: { message: "Sorry, no blog post with that slug was found" },
			};
		} else if (blogPostQuery?.results.length > 1) {
			return {
				status: 500,
				body: {
					message:
						"Sorry, there seems to be multiple blog posts with the same slug. This is my (Parker's) fault! Tell him to go fix it",
				},
			};
		}

		const blogPostNotionResponse = blogPostQuery.results[0];
		const mdBlocks = await n2md.pageToMarkdown(blogPostNotionResponse.id);
		const mdString = n2md.toMarkdownString(mdBlocks);
		const htmlString = mdToHtml(mdString);

		// // write outputs to some test files to see what they look like
		// fs.writeFile("test.md", mdString, () => {
		// 	console.log("reponse md file written");
		// });

		// fs.writeFile("test.html", htmlString, () => {
		// 	console.log("reponse html file written");
		// });

		const frontmatter: PostFrontmatter = {
			title: getBlogPostProperty("title", blogPostNotionResponse),
			summary: getBlogPostProperty("summary", blogPostNotionResponse),
			slug: getBlogPostProperty("slug", blogPostNotionResponse),
			author: getBlogPostProperty("author", blogPostNotionResponse),
			date: getBlogPostProperty("date", blogPostNotionResponse),
			tags: getBlogPostProperty("tags", blogPostNotionResponse),
			image: getBlogPostProperty("image", blogPostNotionResponse),
		};

		const blogPost: BlogPost = {
			frontmatter,
			content: htmlString,
		};

		return {
			body: blogPost,
		};
	} catch (error: unknown) {
		const code = checkNotionError(error);
		return {
			status: code,
		};
	}
};
