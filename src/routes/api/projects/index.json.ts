import { Client } from "@notionhq/client";
import { getProjectProperty, checkNotionError } from "$lib/notion";
import type { ProjectFrontmatter } from "$types/Project";

const notion = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY });

export const GET = async () => {
	try {
		const projectsQuery = await notion.databases.query({
			database_id: import.meta.env.VITE_NOTION_PROJECTS_DB,
			filter: {
				property: "status",
				select: {
					equals: "PUBLISHED",
				},
			},
		});

		if (projectsQuery?.results.length === 0) {
			return {
				status: 404,
				body: { message: "Sorry, there are no projects yet" },
			};
		}
		const projectFrontmatters = projectsQuery.results.map((post) => {
			const frontmatter: ProjectFrontmatter = {
				title: getProjectProperty("title", post),
				summary: getProjectProperty("summary", post),
				slug: getProjectProperty("slug", post),
				date: getProjectProperty("date", post),
				tags: getProjectProperty("tags", post),
				image: getProjectProperty("image", post),
				links: getProjectProperty("links", post),
			};

			return frontmatter;
		});

		// sort the posts by date
		const sortedProjectFrontmatters = projectFrontmatters.sort(
			(a: ProjectFrontmatter, b: ProjectFrontmatter) => {
				return new Date(b.date.start).valueOf() - new Date(a.date.start).valueOf();
			},
		);

		return {
			body: sortedProjectFrontmatters,
		};
	} catch (error: unknown) {
		const code = checkNotionError(error);
		return {
			status: code,
		};
	}
};
