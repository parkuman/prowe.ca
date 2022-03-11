export type PostFrontmatter = {
	title: string;
	slug: string;
	date: string;
	author: string;
	tags: string[];
};

type BlogPost = {
	frontmatter: PostFrontmatter;
	content: string;
};

export default BlogPost;
