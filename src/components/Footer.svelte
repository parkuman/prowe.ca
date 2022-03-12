<script>
	import socials from "$lib/socials";
	import Icon from "$components/Icon.svelte";
	import NowPlaying from "$components/NowPlaying.svelte";
</script>

<footer>
	<NowPlaying />
	<ul class="left">
		{#each socials as social}
			<li>
				<a target="_blank" href={social.href} title={social.name}>
					<Icon name={social.name.toLowerCase()} width="25px" height="25px" />
				</a>
			</li>
		{/each}
	</ul>
	<ul class="right">
		<li>
			<a href="mailto:parker.a.rowe@gmail.com">parker.a.rowe@gmail.com</a>
		</li>
	</ul>
	<section>
		<a
			target="_blank"
			href="https://github.com/parkuman/svelte-kit-test"
			title="visit this project on GitHub">Made with <Icon name="heart" /> by Parker Rowe</a
		>
	</section>
</footer>

<style>
	footer {
		bottom: 0;
		color: var(--color-text);
		padding: 10px 0;
		font-family: var(--font-mono);
		margin: 0 auto;
		margin-top: 100px;
	}

	ul {
		position: fixed;
		bottom: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 calc((100vw - var(--max-width)) / 2);
		margin: 0;
		color: var(--color-primary);
		transition: var(--transition);
	}

	ul.right {
		right: 0;
	}

	ul.right > li > a {
		writing-mode: vertical-rl;
		text-orientation: mixed;
		letter-spacing: 0.07rem;
		margin-bottom: 10px;
		transform: translateX(3px);
	}

	ul.left {
		left: 0;
	}

	ul::after {
		content: "";
		width: 1px;
		height: 100px;
		background-color: var(--color-text);
	}

	ul.left > li {
		display: inline;
		padding: 10px;
		transition: ease 300ms;
	}

	ul.left > li:hover {
		transform: scale(1.2);
	}

	a {
		text-decoration: none;
		color: var(--color-text);
		padding: 5px;
		transition: var(--transition);
		border-radius: var(--border-radius);
	}

	a:hover {
		background-color: rgb(var(--color-primary-rgb), 0.3);
	}

	li > a {
		padding: 0;
	}

	li > a:hover {
		background-color: transparent;
		color: var(--color-primary);
	}

	section {
		text-align: center;
		margin-top: 20px;
	}

	@media only screen and (max-width: 768px) {
		footer {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		ul {
			position: unset;
			flex-direction: row;
		}

		ul.right > li > a {
			text-orientation: initial;
			writing-mode: inherit;
		}

		ul::after {
			display: none;
		}
	}
</style>
