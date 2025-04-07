<script context="module">
	export const prerender = true;
</script>

<script>
	import Head from "$components/Head.svelte";
	import TopTracks from "$components/TopTracks.svelte";
	import ItemSpinner from "$components/ItemSpinner.svelte";
	import { technologies, experience } from "$lib/config";

	let selectedJobIndex = 0;

	$: job = experience[selectedJobIndex];
</script>

<Head />

<!-- Hero Section - Left-aligned with image on the right -->
<section class="hero">
	<div class="hero-content">
		<div class="hero-text">
			<h1>Parker Rowe</h1>
			<h2>Engineer, Developer</h2>
			<p>Proud Canadian Computer Engineer. 🇨🇦</p>
			<p>I build things with&nbsp;&nbsp;<span><ItemSpinner items={technologies} /></span></p>
			<br />
			<a target="_blank" href="/prowe_resume.pdf">
				<button class="styled-btn">RESUME</button>
			</a>
		</div>
		<div class="hero-image-container">
			<img src="/images/profile.webp" alt="pic of me :)" class="hero-image" />
		</div>
	</div>

	<div class="scroll-indicator">
		<div class="chevron" />
	</div>
</section>

<!-- Work Experience Section -->
<section class="experience">
	<h1 class="section-header">Where I've Worked</h1>
	<div class="experience-wrapper">
		<div role="tablist" class="work-tablist">
			{#each experience as job, i}
				<button
					class="styled-btn"
					on:click={() => {
						selectedJobIndex = i;
					}}
				>
					<span>{job.company.name}</span>
				</button>
			{/each}

			<div style={`transform: translateY(calc(${selectedJobIndex} * var(--tab-height)));`} />
		</div>
		<div role="tabpanel" class="work-tabpanel">
			<h3>
				<span>{job.title}</span><span class="company">
					&nbsp;@&nbsp;
					<a href={job.company.url} rel="noopener noreferrer" target="_blank">{job.company.name}</a
					></span
				>
			</h3>
			<p class="range">{job.startDate}{job.endDate ? ` - ${job.endDate}` : ""}</p>
			<div>
				<ul>
					{#each job.points as point}
						<li>{point}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Projects Section -->
<section class="projects">
	<h1 class="section-header">My Work</h1>
	<p>
		Please feel free to check out some of my work or my Blog where I post about things I've been
		working on.
	</p>
	<p style="text-align:center">
		<a href="/projects"><button class="styled-btn">Projects</button></a>
		<a href="/blog"><button class="styled-btn">Blog Posts</button></a>
	</p>
</section>

<!-- About Me with Spotify Section -->
<section class="about">
	<h1 class="section-header">About Me</h1>
	<div class="about-content">
		<div class="about-text">
			<p>
				I'm Parker, a computer engineer and software developer. I'm currently helping build the
				future of mortgage software at Acre Software!
				<br />
				<br />
				My favourite ways to spend my free time are camping, playing guitar, running, climbing, coding,
				and making memories with friends.
			</p>
		</div>
		<div class="spotify-section">
			<TopTracks />
		</div>
	</div>
</section>

<style>
	section {
		min-height: 40vh;
		transition: var(--transition);
		margin-bottom: 100px;
	}

	/* Hero Section Styles */
	.hero {
		min-height: calc(100vh - 104px - 104px);
		margin-top: 100px;
		letter-spacing: 0.1em;
		position: relative;
	}

	.hero-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.hero-text {
		text-align: left;
		max-width: 60%;
	}

	.hero-image-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero-image {
		width: 300px;
		height: 300px;
		padding: 5px;
		border: 1px var(--color-primary) solid;
		border-radius: 50%;
	}

	.hero p {
		max-width: 100%;
	}

	.hero h1 {
		font-size: 2.5rem;
		line-height: 2.5rem;
		margin-bottom: 10px;
	}

	.hero h2 {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 400;
		color: rgba(var(--color-text-rgb), 0.6);
		font-family: var(--font-mono);
		margin-bottom: 15px;
	}

	/* Section Headers */
	h1.section-header {
		font-size: calc(1.7vw + 1.7vh);
		display: flex;
		align-items: center;
		white-space: nowrap;
		margin-bottom: 30px;
	}

	h1.section-header::after {
		content: "";
		display: block;
		position: relative;
		margin-left: 20px;
		width: 300px;
		height: 1px;
		background-color: rgba(var(--color-text-rgb), 0.5);
	}

	/* Experience Section Styles */
	.experience {
		max-width: 1200px;
	}

	.experience-wrapper {
		display: flex;
	}

	.work-tablist {
		position: relative;
		--tab-height: 42px;
	}

	.work-tablist > div {
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 10;
		width: 2px;
		height: var(--tab-height);
		border-radius: var(--border-radius);
		background: var(--color-primary);
		transform: translateY(calc(0 * var(--tab-height)));
		transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
	}

	.work-tablist > button {
		border: none;
		border-radius: 0;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		position: relative;
		transition: var(--transition);
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		width: 100%;
		height: var(--tab-height);
		padding: 0px 20px 2px;
		border-left: 2px solid rgba(var(--color-primary-rgb), 0.15);
		color: var(--color-primary);
		font-family: var(--font-mono);
		font-size: 0.8rem;
		text-align: left;
		white-space: nowrap;
	}

	.work-tabpanel {
		position: relative;
		width: 100%;
		margin-left: 20px;
	}

	.work-tabpanel h3 {
		margin-bottom: 2px;
		font-size: 1.2rem;
		font-weight: 600;
		line-height: 1.3;
	}

	.company {
		color: var(--color-primary);
	}

	.company a {
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		position: relative;
		transition: var(--transition);
		color: var(--color-primary);
	}

	.range {
		margin-bottom: 25px;
		color: rgba(var(--color-text-rgb), 0.8);
		font-family: var(--font-mono);
		font-size: 0.8rem;
	}

	.work-tabpanel ul {
		padding: 0px;
		margin: 0px;
		list-style: none;
		font-size: 1rem;
	}

	.work-tabpanel ul li {
		position: relative;
		padding-left: 30px;
		margin-bottom: 10px;
	}

	.work-tabpanel ul li::before {
		content: "→";
		position: absolute;
		left: 0px;
		color: var(--color-primary);
	}

	/* Projects Section */
	.projects {
		max-width: 1200px;
		margin: 0 auto;
	}

	/* About Section Styles */
	.about {
		max-width: 1200px;
		margin: 0 auto;
	}

	.about-content {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	.about-text {
		font-size: 1rem;
		line-height: 1.5;
	}

	.scroll-indicator {
		position: absolute;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		animation: bounce 2s infinite;
	}

	.chevron {
		width: 20px;
		height: 20px;
		border-style: solid;
		border-width: 0 3px 3px 0;
		display: inline-block;
		transform: rotate(45deg);
		border-color: var(--color-primary);
		opacity: 20%;
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateX(-50%) translateY(0);
		}
		40% {
			transform: translateX(-50%) translateY(-10px);
		}
		60% {
			transform: translateX(-50%) translateY(-5px);
		}
	}

	@media only screen and (max-width: 768px) {
		.scroll-indicator {
			bottom: 20px;
		}
	}

	@media only screen and (max-width: 1200px) {
		.hero-content {
			flex-direction: column-reverse;
			text-align: left;
			align-items: flex-start;
		}

		.hero-image-container {
			align-self: flex-start;
		}

		.hero-text {
			max-width: 100%;
			margin-top: 30px;
		}

		.hero-image {
			width: 200px;
			height: 200px;
		}

		h1.section-header::after {
			width: 70%;
		}

		.about-content {
			grid-template-columns: 1fr;
		}

		.spotify-section {
			margin-top: 30px;
		}

		.experience-wrapper {
			display: block;
		}

		.work-tabpanel {
			margin-left: 0;
			margin-top: 25px;
		}

		.experience {
			max-width: 100%;
		}
	}

	@media only screen and (max-width: 768px) {
		.hero-image {
			width: 150px;
			height: 150px;
		}
	}
</style>
