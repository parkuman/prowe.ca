<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home | Parker Rowe</title>
</svelte:head>

<section class="hero">
	<p>HI 👋 I'M,</p>
	<h1>PARKER ROWE</h1>
	<h2>A COMPUTER ENGINEERING STUDENT<br /> BASED IN ONTARIO, CANADA</h2>
</section>

<section class="about">
	<h1>ABOUT ME</h1>
</section>

<style>
	section {
		margin: 0 auto;
		height: 100vh;
		max-width: 70%;
		transition: var(--transition);
	}

	/* Small Devices, Tablets */
	@media only screen and (max-width: 768px) {
		section {
			max-width: 98%;
		}
	}

	.hero {
		padding-top: 30vh;
		/* background-color: #111111; */
		font-family: var(--font-mono);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}
	.hero p {
		font-weight: bold;
		font-style: italic;
		color: var(--color-primary);
	}
	.hero h1 {
		align-self: center;
		font-size: 8rem;
	}

	.hero h2 {
	}

	.about {
	}
</style>
