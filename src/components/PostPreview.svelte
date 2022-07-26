<script>
	// import { onMount } from "svelte";
	import Tag from "$components/Tag.svelte";
	export let post;
	// let views;

	// onMount(async () => {
	// 	fetchViews();
	// });

	// async function fetchViews() {
	// 	const viewsReq = await fetch(`/api/views/${post.slug}.json`);
	// 	const viewsTotal = await viewsReq.json();

	// 	views = viewsTotal?.total.toString();
	// }
</script>

<a href={`/blog/${post.slug}`}>
	<div class="preview-image" style={`background-image: url(${post.image})`} />

	<div class="info">
		<h1>{post.title}</h1>

		<p>
			{post.summary} <br /><br />
			<u>Continue Reading →</u>
		</p>
		<ul>
			{#each post.tags as tag}
				<li>
					<Tag text={tag.name} color={tag.color} href={`/tags/${tag.name}`} />
				</li>
			{/each}
		</ul>
		<!-- <p style="color: gray">{views} Views</p> -->
	</div>
</a>

<style>
	p {
		margin: 20px 0;
	}

	/* tags */
	a ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 4px;
	}

	a {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0 auto 100px auto;
		min-height: 300px;
		height: fit-content;
		text-decoration: none;
		color: var(--color-text);
	}

	a .preview-image {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%;
		min-height: 300px;
		max-height: 30vh;
		margin: 0;
	}

	a .info {
		margin: 50px 0;
		width: 100%;
	}

	
</style>
