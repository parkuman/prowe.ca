<script>
	import socials from "$lib/socials";
	import Icon from "$components/Icon.svelte";
</script>

<footer>
	<ul class="left">
		{#each socials as social}
			<li>
				<a target="_blank" href={social.href} title={social.name}>
					<Icon name={social.name.toLowerCase()} />
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
		<a target="_blank" href="https://github.com/parkuman/svelte-kit-test"
			>Made with <Icon name="heart" /> by Parker Rowe</a
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
		color: var(--primary-color);
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
		position: relative;
		left: 3px;
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
		transform: scale(1.5);
	}

	ul.left > li:hover {
		transform: scale(1.8);
	}

	a {
		color: var(--color-text);
		transition: var(--transition);
		text-decoration: none;
	}

	a:hover {
		color: var(--primary-color);
	}

	section {
		text-align: center;
	}

	@media only screen and (max-width: 768px) {
		footer {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		ul {
			position: inherit;
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
