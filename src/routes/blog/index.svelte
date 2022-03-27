<script context="module">
	export const prerender = true;

	export const load = async ({ fetch }) => {
		const blogResponse = await fetch("/api/blog.json");
		const posts = await blogResponse.json();

		return {
			props: {
				posts,
			},
		};
	};
</script>

<script lang="ts">
	import Head from "$components/Head.svelte";
	import Icon from "$components/Icon.svelte";
	import PostPreview from "$components/PostPreview.svelte";
	import type { PostFrontmatter } from "$types/BlogPost";

	export let posts: PostFrontmatter[];
	let searchQuery = "";

	$: filteredPosts =
		searchQuery === ""
			? posts
			: posts.filter((frontmatter) =>
					frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()),
			  );
</script>

<Head title="Blog | Parker Rowe" />
<h1>Blog</h1>

<label for="search">
	<input id="search" placeholder="Search by Title" type="text" bind:value={searchQuery} />
	<span class="search-icon">
		<Icon name="search" />
	</span>
</label>

<ul>
	{#if filteredPosts.length}
		{#each filteredPosts as post}
			<li>
				<PostPreview {post} />
			</li>
		{/each}
	{:else}
		<p>No blog posts here...</p>
	{/if}
</ul>

<style>
	h1 {
		font-size: 4rem;
	}

	input {
		width: 100%;
		padding: 8px;
		border: 1px solid gray;
		border-radius: var(--border-radius);
		margin: 40px 0;
		background-color: var(--color-bg);
	}

	input::selection,
	input:active {
		border-color: var(--color-primary);
	}

	.search-icon {
		position: absolute;
		transform: translate(-30px, 48px);
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
