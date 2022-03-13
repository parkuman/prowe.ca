<script lang="ts">
	import { page } from "$app/stores";
	import { metadata } from "$lib/config";

	export let title = metadata.title;
	export let description = metadata.description;
	export let image = "/images/preview.webp";
	export let type = "website";
	export let date: string = null;
	export let author: string = null;
	export let tags: string[] = null;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="robots" content="follow, index" />
	<meta name="description" content={description} />
	<meta property="og:url" content={`${metadata.baseUrl}${$page.url.pathname}`} />
	<link rel="canonical" href={`${metadata.baseUrl}${$page.url.pathname}`} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content="Parker Rowe" />
	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:image" content={`${metadata.baseUrl}/static${image}`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={`${metadata.baseUrl}/static${image}`} />
	{#if type === "article"}
		{#if date}
			<meta property="article:published_time" content={date} />
		{/if}

		{#if author}
			<meta property="article:author" content={author} />
		{/if}

		{#if tags.length}
			{#each tags as tag}
				<meta property="article:tag" content={tag} />
			{/each}
		{/if}
	{/if}
</svelte:head>
