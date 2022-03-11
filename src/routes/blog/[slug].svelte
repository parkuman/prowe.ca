<script context="module">
	export const prerender = true;

	export const load = async ({ fetch, params }) => {
		const postReq = await fetch(`/api/blog/${params.slug}.json`);
		const post = await postReq.json();

		return {
			maxage: 60,
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
	export let post: BlogPost;
</script>

<svelte:head>
	<title>{$page.params.slug} - Blog | Parker Rowe</title>
</svelte:head>

{@html post.content}
