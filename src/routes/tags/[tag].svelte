<script context="module" lang="ts">
	import type { PostFrontmatter } from "$types/BlogPost";
	import type { ProjectFrontmatter } from "$types/Project";

	type PostFrontmatterPlusType = PostFrontmatter & { type: "Blog Post" };
	type ProjectFrontmatterPlusType = ProjectFrontmatter & { type: "Project" };

	export const prerender = true;

	export const load = async ({ fetch, params }) => {
		let frontmatters = [];

		try {
			let [blogRes, projectRes] = await Promise.all([
				fetch("/api/blog.json"),
				fetch("/api/projects.json"),
			]);

			let posts: PostFrontmatterPlusType[] = await blogRes.json();
			let projects: ProjectFrontmatterPlusType[] = await projectRes.json();

			posts = posts.map((post) => {
				post.type = "Blog Post";
				return post;
			});

			projects = projects.map((project) => {
				project.type = "Project";
				return project;
			});

			frontmatters = frontmatters.concat(posts, projects);
		} catch (err) {
			console.log(err);
		}

		let contentWithTag = [];

		frontmatters.forEach((item) => {
			if (item.tags.some((tag) => tag.name === params.tag)) {
				contentWithTag.push(item);
			}
		});

		return {
			props: {
				content: contentWithTag,
			},
		};
	};
</script>

<script lang="ts">
	import { page } from "$app/stores";
	import Breadcrumbs from "$components/Breadcrumbs.svelte";
	import Head from "$components/Head.svelte";
	import Icon from "$components/Icon.svelte";
	import PostPreview from "$components/PostPreview.svelte";
	import ProjectPreview from "$components/ProjectPreview.svelte";

	export let content;

	let searchQuery = "";

	$: filteredContent =
		searchQuery === ""
			? content
			: content.filter((frontmatter) =>
					frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()),
			  );
</script>

<Head title={`${$page.params.tag} tag | Parker Rowe`} />

<Breadcrumbs />
<p>Content with tag:</p>
<h1>{$page.params.tag}</h1>
<label for="search">
	<input id="search" placeholder="Search by Title" type="text" bind:value={searchQuery} />
	<span class="search-icon">
		<Icon name="search" />
	</span>
</label>

<ul>
	{#if filteredContent && filteredContent.length}
		{#each filteredContent as item}
			<li>
				<span class="content-type-prefix">{item.type}</span>
				{#if item.type === "Blog Post"}
					<PostPreview post={item} />
				{:else}
					<ProjectPreview project={item} />
				{/if}
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

	.content-type-prefix {
		font-size: 0.8rem;
		font-family: var(--font-mono);
		color: var(--color-primary);
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
