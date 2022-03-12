<script context="module" lang="ts">
	import type { PostFrontmatter } from "$types/BlogPost";

	export const prerender = true;

	export const load = async ({ fetch, params }) => {
		const blogResponse = await fetch("/api/blog.json");
		const posts: PostFrontmatter[] = await blogResponse.json();

		let postsWithTag: PostFrontmatter[] = [];

		posts.forEach((post) => {
			if (post.tags.some((tag) => tag.name === params.tag)) postsWithTag.push(post);
		});

		return {
			props: {
				posts: postsWithTag,
			},
		};
	};
</script>

<script lang="ts">
	import { page } from "$app/stores";

	export let posts;
</script>

<svelte:head>
	<title>{$page.params.tag} - Tag | Parker Rowe</title>
</svelte:head>

{#if posts.length}
	<ul>
		{#each posts as post}
			<li>
				<h2>
					<a href={`/blog/${post.slug}`}>
						{post.title}
					</a>
				</h2>
				Published {post.date}
			</li>
		{/each}
	</ul>
{:else}
	<p>No posts matching the given tag</p>
{/if}
