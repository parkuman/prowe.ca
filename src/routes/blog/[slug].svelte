<script context="module">
	export const prerender = true;

	export const load = async ({ fetch, params, url }) => {
		const postReq = await fetch(`/api/blog/${params.slug}.json`);
		const post = await postReq.json();

		return {
			props: {
				post,
				currentPage: url.pathname,
			},
		};
	};
</script>

<script lang="ts">
	import "highlight.js/styles/github-dark.css";
	import "$styles/blogpost.css";
	import type BlogPost from "$types/BlogPost";
	import Comments from "$components/Comments.svelte";
	import Tag from "$components/Tag.svelte";
	import Head from "$components/Head.svelte";
	import Breadcrumbs from "$components/Breadcrumbs.svelte";

	export let post: BlogPost;
</script>

<Head
	title={`${post.frontmatter.title} | Parker Rowe`}
	description={post.frontmatter.summary}
	image={post.frontmatter.image}
	type="article"
	date={post.frontmatter.date}
	author={post.frontmatter.author}
	tags={post.frontmatter.tags.map((tag) => tag.name)}
/>

<Breadcrumbs />
<article>
	<header>
		<div class="info">
			<h1>{post.frontmatter.title}</h1>
			<div class="author">
				<div class="author-image" style="background-image: url('/images/profile.webp')" />
				<div class="author-info">
					<div class="author-name">{post.frontmatter.author}</div>
					<div class="author-sub">
						{new Date(post.frontmatter.date).toDateString()}
						<!-- <span class="median-divider">·</span> X min read -->
						<!-- <span class="median-divider">·</span> X views -->
					</div>
				</div>
			</div>

			<ul>
				{#each post.frontmatter.tags as tag}
					<li>
						<Tag text={tag.name} color={tag.color} href={`/tags/${tag.name}`} />
					</li>
				{/each}
			</ul>
		</div>
		<div class="preview-image" style={`background-image: url(${post.frontmatter.image})`} />
	</header>
	{@html post.content}
</article>
<Comments />
