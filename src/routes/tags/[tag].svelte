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
	import Head from "$components/Head.svelte";
	import Icon from "$components/Icon.svelte";
	import PostPreview from "$components/PostPreview.svelte";

	export let posts;

	let searchQuery = "";

	$: filteredPosts =
		searchQuery === ""
			? posts
			: posts.filter((frontmatter) =>
					frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()),
			  );
</script>

<Head title={`${$page.params.tag} tag | Parker Rowe`} />

<p>Content with tag:</p>
<h1>{$page.params.tag}</h1>
<label for="search">
	<input id="search" placeholder="search by title" type="text" bind:value={searchQuery} />
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
		<p>No content matching the given tag.</p>
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
