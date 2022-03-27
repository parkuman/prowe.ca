<script context="module" lang="ts">
	import type { PostFrontmatter } from "$types/BlogPost";
	import type { ProjectFrontmatter } from "$types/Project";

	export const prerender = true;

	export const load = async ({ fetch }) => {
		let frontmatters = [];

		try {
			let [blogRes, projectRes] = await Promise.all([
				fetch("/api/blog.json"),
				fetch("/api/projects.json"),
			]);

			const posts: PostFrontmatter[] = await blogRes.json();
			const projects: ProjectFrontmatter[] = await projectRes.json();

			frontmatters = frontmatters.concat(posts, projects);
		} catch (err) {
			console.log(err);
		}

		let tags: PostFrontmatter["tags"] | ProjectFrontmatter["tags"] = [];
		frontmatters.forEach((item) => {
			item.tags.forEach((tag) => {
				// only push if tag with this name doesn't exist in array
				if (!tags.some((t) => t.name === tag.name)) {
					tags.push(tag);
				}
			});
		});

		tags = tags.sort((a, b) => {
			return a.name.localeCompare(b.name);
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
	import Head from "$components/Head.svelte";

	export let tags;
</script>

<Head title="Tags | Parker Rowe" />

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
		/* height: 90vh; */
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: flex-start;
		justify-content: center;
	}
</style>
