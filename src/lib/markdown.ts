import { unified } from "unified";
import remarkParse from "remark-parse";
import remark2rehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export const parseMarkdown = unified()
	.use(remarkParse) // parse into markdown syntax tree
	.use(remarkGfm); // (autolink literals, footnotes, strikethrough, tables, tasklists).

export const mdTreeToHtml = unified()
	.use(remark2rehype) // convert to html syntax tree
	.use(rehypeHighlight) // apply syntax highlighting to code
	.use(rehypeStringify); // turn html syntax tree to html

export const mdToHtml = (markdown: string) => {
	const mdTree = parseMarkdown.parse(markdown);
	return mdTreeToHtml.stringify(mdTreeToHtml.runSync(mdTree));
};
