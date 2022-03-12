<script context="module">
	export const prerender = true;

	export const load = async ({ fetch, params }) => {
		const postReq = await fetch(`/api/blog/${params.slug}.json`);
		const post = await postReq.json();

		return {
			props: {
				post,
			},
		};
	};
</script>

<script lang="ts">
	import "highlight.js/styles/github-dark.css";
	import "$styles/blogpost.css";
	import { page } from "$app/stores";
	import type BlogPost from "$types/BlogPost";
	import Tag from "$components/Tag.svelte";

	export let post: BlogPost;
</script>

<svelte:head>
	<title>{$page.params.slug} - Blog | Parker Rowe</title>
</svelte:head>

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
