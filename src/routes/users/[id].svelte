<script>
	export let user;
</script>

<svelte:head>
	{#if user}
		<title>{user.firstName} {user.lastName} | Parker Rowe</title>
	{:else}
		<title>Not Found | Parker Rowe</title>
	{/if}
</svelte:head>

<h1>User:</h1>
{#if user}
	<p>First Name: {user.firstName}</p>
	<p>Last Name: {user.lastName}</p>
{:else}
	<p>user not found in db!</p>
{/if}
