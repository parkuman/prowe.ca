export type PostFrontmatter = {
	title: string;
	slug: string;
	date: string;
	author: string;
	tags: Array<{
		name: string;
		color: string;
	}>;
};

type BlogPost = {
	frontmatter: PostFrontmatter;
	content: string;
};

export default BlogPost;
