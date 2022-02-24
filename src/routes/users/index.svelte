<script>
	export let users;
</script>

<svelte:head>
	<title>Users | Parker Rowe</title>
</svelte:head>

<h1>Users</h1>
{#if users && users.length > 0}
	<ul>
		{#each users as user}
			<li><a href="/users/{user.id}">{user.firstName} {user.lastName}</a></li>
		{/each}
	</ul>
{:else}
	<p>no users in db!</p>
{/if}
