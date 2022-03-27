<script lang="ts">
	import Tag from "$components/Tag.svelte";
	import type { ProjectFrontmatter } from "$types/Project";
	import Icon from "$components/Icon.svelte";

	export let project: ProjectFrontmatter;

	function getLinkType(link: string) {
		if (link.toLowerCase().includes("github")) {
			return "github";
		} else if (link.toLowerCase().includes("you")) {
			return "youtube";
		} else {
			return "globe";
		}
	}
</script>

<a href={`/projects`} class="wrapper">
	<div class="preview-image" style={`background-image: url(${project.image})`} />

	<div class="info">
		<ul class="links">
			{#each project.links as link}
				<li title="open link to project">
					<a href={link} target="_blank" rel="noopener noreferrer" class="icon">
						<Icon name={getLinkType(link)} width="20px" height="20px" />
					</a>
				</li>
			{/each}
		</ul>
		<h1>{project.title}</h1>

		<p>
			{project.summary} <br /><br />
		</p>
		<ul class="tags">
			{#each project.tags as tag}
				<li>
					<Tag text={tag.name} color={tag.color} />
				</li>
			{/each}
		</ul>
	</div>
</a>

<style>
	p {
		margin: 20px 0;
	}

	.links {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 4px;
	}

	.links li {
		margin-bottom: 20px;
		transition: all ease 300ms;
	}

	.links li:hover {
		transform: scale(1.2);
	}

	/* tags */
	.tags {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 4px;
	}

	.icon {
		text-decoration: none;
		color: var(--color-primary);
		padding: 5px;
		margin: 8px;
	}

	.wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 0 auto 100px auto;
		min-height: 300px;
		height: fit-content;
		text-decoration: none;
		color: var(--color-text);
	}

	.wrapper .preview-image {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 49%;
	}

	.wrapper .info {
		margin: 50px 0;
		width: 49%;
	}

	@media only screen and (max-width: 1200px) {
		.wrapper {
			flex-direction: column;
		}
		.wrapper .info {
			width: 100%;
		}

		.wrapper .preview-image {
			width: 100%;
			height: 300px;
			margin: 0;
		}
	}
</style>
