import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remark2rehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";

export const parseMarkdown = unified()
	.use(remarkParse) // parse into markdown syntax tree
	.use(remarkGfm); // (autolink literals, footnotes, strikethrough, tables, tasklists).

export const mdTreeToHtml = unified()
	.use(remark2rehype) // convert to html syntax tree
	.use(rehypeSlug) // add ids to each head with the header name
	.use(rehypeAutolink) // create a link on each header
	.use(rehypeHighlight) // apply syntax highlighting to code
	.use(rehypeStringify); // turn html syntax tree to html

export const mdToHtml = (markdown: string) => {
	const mdTree = parseMarkdown.parse(markdown);
	return mdTreeToHtml.stringify(mdTreeToHtml.runSync(mdTree));
};
