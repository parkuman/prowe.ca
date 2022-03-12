<script context="module" lang="ts">
	import type { PostFrontmatter } from "$types/BlogPost";

	export const prerender = true;

	export const load = async ({ fetch }) => {
		const blogResponse = await fetch("/api/blog.json");
		const posts: PostFrontmatter[] = await blogResponse.json();

		let tags: PostFrontmatter["tags"] = [];
		posts.forEach((post) => {
			post.tags.forEach((tag) => {
				if (!tags.includes(tag)) tags.push(tag);
			});
		});

		return {
			props: {
				tags,
			},
		};
	};
</script>

<script>
	import Tag from "$components/Tag.svelte";

	export let tags;
</script>

<svelte:head>
	<title>tags | Parker Rowe</title>
</svelte:head>

<h1>All Tags</h1>

<section>
	{#if tags.length}
		{#each tags as tag}
			<Tag color={tag.color} text={tag.name} href={`/tags/${tag.name}`} />
		{/each}
	{/if}
</section>

<style>
	h1 {
		font-size: 3rem;
		margin-top: 20vh;
		margin-bottom: 100px;
		text-align: center;
	}

	section {
		text-align: center;
		margin: 0 auto;
		max-width: 80%;
		height: 90vh;
	}
</style>
