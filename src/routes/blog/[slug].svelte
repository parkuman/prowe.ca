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
	import "$styles/blogpost.css";
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
	header {
		margin-bottom: 100px;
	}
</style>
