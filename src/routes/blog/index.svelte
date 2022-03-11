<script context="module">
	export const load = async ({ fetch }) => {
		const blogResponse = await fetch("/api/blog.json");
		const posts = await blogResponse.json();

		return {
			maxage: 60,
			props: {
				posts,
			},
		};
	};
</script>

<script lang="ts">
	import type { PostFrontmatter } from "$types/BlogPost";

	export let posts: PostFrontmatter[];
</script>

<svelte:head>
	<title>Blog | Parker Rowe</title>
</svelte:head>

<h1>Blog</h1>

{#if posts && posts.length > 0}
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
	<p>No blog posts here .... stay tuned 👀</p>
{/if}
