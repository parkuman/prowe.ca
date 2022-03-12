<script>
	export let name;
	export let width = "1rem";
	export let height = "1rem";
</script>

{#if name === "spotify"}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 256 256"
		aria-labelledby="title"
		aria-describedby="desc"
		role="img"
		{width}
		{height}
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<g transform="translate(128 128) scale(0.72 0.72)" style="">
			<g transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
				<path
					d="M 44.999 0.002 L 45 0 C 20.148 0 0 20.147 0 44.999 C 0 69.854 20.148 90 45 90 c 24.853 0 45 -20.146 45 -45.001 C 90 20.149 69.854 0.002 44.999 0.002 z M 65.637 64.902 l -0.001 0.001 C 65.636 64.902 65.636 64.902 65.637 64.902 c -0.808 1.326 -2.535 1.741 -3.857 0.933 c -10.567 -6.458 -23.868 -7.917 -39.532 -4.339 c -1.509 0.346 -3.014 -0.6 -3.358 -2.109 c -0.346 -1.509 0.596 -3.014 2.11 -3.358 c 17.142 -3.919 31.845 -2.232 43.706 5.016 C 66.028 61.856 66.447 63.58 65.637 64.902 C 65.637 64.902 65.637 64.902 65.637 64.902 z M 71.144 52.651 C 71.144 52.651 71.144 52.651 71.144 52.651 L 71.144 52.651 L 71.144 52.651 c -1.018 1.651 -3.177 2.169 -4.826 1.155 c -12.093 -7.434 -30.534 -9.587 -44.841 -5.244 c -1.855 0.56 -3.815 -0.485 -4.378 -2.338 c -0.559 -1.855 0.487 -3.811 2.34 -4.376 c 16.343 -4.959 36.659 -2.557 50.55 5.979 C 71.638 48.843 72.16 51.004 71.144 52.651 L 71.144 52.651 z M 71.618 39.892 L 71.618 39.892 c -14.506 -8.614 -38.432 -9.406 -52.279 -5.204 c -2.224 0.674 -4.575 -0.581 -5.249 -2.804 c -0.674 -2.225 0.58 -4.575 2.805 -5.25 c 15.896 -4.825 42.32 -3.893 59.018 6.019 c 2 1.187 2.656 3.77 1.471 5.767 C 76.201 40.42 73.611 41.079 71.618 39.892 z"
					style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #1CCC5B; fill-rule: nonzero; opacity: 1;"
					transform=" matrix(1 0 0 1 0 0) "
					stroke-linecap="round"
				/>
			</g>
		</g>
	</svg>
{:else if name === "menu"}
	<svg {width} {height} viewBox="0 0 20 20" fill="none">
		<path
			d="M2.5 7.5H17.5"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M2.5 12.5H17.5"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{:else if name === "cross"}
	<svg
		viewBox="0 0 24 24"
		{width}
		{height}
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		shape-rendering="geometricPrecision"
	>
		<path d="M18 6L6 18" />
		<path d="M6 6l12 12" />
	</svg>
{:else}
	<!-- use feather icons -->
	<svg {width} {height} viewBox="0 0 24 24" aria-hidden="true">
		<use href="/icons/icons.svg#{name}" />
	</svg>
{/if}

<style>
	svg {
		/* width: 1rem;
		height: 1rem; */
		stroke: currentColor;
		stroke-width: 1px;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
	}
</style>
