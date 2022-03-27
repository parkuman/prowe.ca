<script context="module">
	export const prerender = true;

	export const load = async ({ fetch }) => {
		const projectsResponse = await fetch("/api/projects.json");
		const projects = await projectsResponse.json();

		return {
			props: {
				projects,
			},
		};
	};
</script>

<script lang="ts">
	import Head from "$components/Head.svelte";
	import Icon from "$components/Icon.svelte";
	import ProjectPreview from "$components/ProjectPreview.svelte";
	// import { projects } from "$lib/config";
	import type { ProjectFrontmatter } from "$types/Project";

	export let projects: ProjectFrontmatter[];
	let searchQuery = "";

	$: filteredProjects =
		searchQuery === ""
			? projects
			: projects.filter((project) =>
					project.title.toLowerCase().includes(searchQuery.toLowerCase()),
			  );
</script>

<Head title="Projects | Parker Rowe" />

<h1>Projects</h1>

<label for="search">
	<input id="search" placeholder="search by title" type="text" bind:value={searchQuery} />
	<span class="search-icon">
		<Icon name="search" />
	</span>
</label>

<ul>
	{#if filteredProjects.length}
		{#each filteredProjects as project}
			<li>
				<ProjectPreview {project} />
			</li>
		{/each}
	{:else}
		<p>No projects here...</p>
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

	li {
		transition: var(--transition);
	}
</style>
