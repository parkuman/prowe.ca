<script context="module">
	export const prerender = true;

	export const load = async ({ fetch, params, url }) => {
		const postReq = await fetch(`/api/blog/${params.slug}.json`);
		const post = await postReq.json();

		return {
			props: {
				post,
				currentPage: url.pathname,
			},
		};
	};
</script>

<script lang="ts">
	import "highlight.js/styles/github-dark.css";
	import type BlogPost from "$types/BlogPost";
	import Tag from "$components/Tag.svelte";
	import Head from "$components/Head.svelte";

	export let post: BlogPost;
</script>

<Head
	title={`${post.frontmatter.title} | Parker Rowe`}
	description={post.frontmatter.summary}
	image={post.frontmatter.image}
	type="article"
	date={post.frontmatter.date}
	author={post.frontmatter.author}
	tags={post.frontmatter.tags.map((tag) => tag.name)}
/>
<article>
	<header>
		<h1>{post.frontmatter.title}</h1>
		<p>{post.frontmatter.author}</p>
		<p>{post.frontmatter.date}</p>
		<ul>
			{#each post.frontmatter.tags as tag}
				<Tag text={tag.name} color={tag.color} href={`/tags/${tag.name}`} />
			{/each}
		</ul>
	</header>
	{@html post.content}
</article>

<style>
	@import url("https://fonts.googleapis.com/css?family=Lato:400,700|Lora|Playfair+Display:700i,900");

	header {
		margin-bottom: 100px;
	}

	html,
	body {
		margin: 0;
		width: 100%;
	}

	h1,
	h2,
	p,
	i,
	a,
	.first-letter,
	.authorName a {
		/* color: rgba(0, 0, 0, 0.84); */
		color: var(--color-text);
		text-rendering: optimizeLegibility;
	}

	h1 {
		font-family: "Playfair Display", serif;
		font-size: 48px;
		text-align: left;
		margin-bottom: 8px;
	}

	h2 {
		font-family: "Lato", sans-serif;
		font-size: 26px;
		font-weight: 700;
		padding: 0;
		margin: 56px 0 -13px -1.883px;
		text-align: left;
		line-height: 34.5px;
		letter-spacing: -0.45px;
	}

	p,
	i,
	a {
		margin-top: 21px;
		font-family: "Lora";
		font-size: 21px;
		letter-spacing: -0.03px;
		line-height: 1.58;
	}

	a {
		text-decoration: underline;
	}

	blockquote {
		font-family: "Playfair Display", serif;
		font-size: 30px;
		font-style: italic;
		letter-spacing: -0.36px;
		line-height: 44.4px;
		overflow-wrap: break-word;
		margin: 55px 0 33px 0;
		/* color: rgba(0, 0, 0, 0.68); */
		color: var(--color-text);
		padding: 0 0 0 50px;
	}

	code {
		font-size: 18px;
		/* background: rgba(0, 0, 0, 0.05); */
		background: var(--color-bg);
		border-radius: 2px;
		padding: 3px 5px;
	}

	mark,
	.highlighted {
		background: #7dffb3;
	}

	.first-letter {
		overflow-wrap: break-word;
		font-family: "Playfair Display", serif;
		font-size: 60px;
		line-height: 60px;
		display: block;
		position: relative;
		float: left;
		margin: 0px 7px 0 -5px;
	}

	.subtitle {
		font-family: "Lato", sans-serif;
		/* color: rgba(0, 0, 0, 0.54); */
		color: var(--color-text);
		margin: 0 0 24px 0;
	}

	::selection {
		background-color: lavender;
	}
</style>
