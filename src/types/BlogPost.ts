import type TagColor from "$types/TagColor";

export type PostFrontmatter = {
	title: string;
	summary: string;
	slug: string;
	date: string;
	author: string;
	tags: Array<{
		name: string;
		color: TagColor;
	}>;
	image: string;
};

type BlogPost = {
	frontmatter: PostFrontmatter;
	content: string;
};

export default BlogPost;
