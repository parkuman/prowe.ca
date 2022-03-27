import type TagColor from "$types/TagColor";

export type ProjectFrontmatter = {
	title: string;
	summary: string;
	slug: string;
	date: {
		start: string;
		end: string;
	};
	tags: Array<{
		name: string;
		color: TagColor;
	}>;
	image: string;
	links: string[];
};

type Project = {
	title: string;
	description: string;
	date: string;
	image: string;
	technologies: string[];
	links: string[];
};

export default Project;
