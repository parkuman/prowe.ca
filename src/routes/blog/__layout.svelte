<!-- <aside>
	<nav>
		<h1>RECENT BLOG POSTS</h1>
		<ul>
			<li>pp</li>
			<li>pp</li>
		</ul>
	</nav>
</aside> -->

<slot />

<style>
	aside {
		position: absolute;
		left: 100px;
		top: calc(var(--nav-height) + 200px);
	}

	@media only screen and (max-width: 1200px) {
		aside {
			display: none;
		}
	}
</style>
