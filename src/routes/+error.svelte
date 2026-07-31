<script>
	import { page } from '$app/state';
	import Banner from '$lib/components/Banner.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { site } from '$lib/data/site.js';
</script>

<svelte:head>
	<title>{page.status} — Michael McFarlin</title>
</svelte:head>

<Banner title="Page" emphasis="Not Found" tagline={[`Error ${page.status}`]} />

<main class="page-main">
	<div class="shell">
		<p class="msg">
			{page.error?.message ?? 'That page does not exist.'} Try one of these instead:
		</p>
		<div class="links">
			{#each site.nav as item (item.href)}
				<LinkButton href={item.href} label={item.label} external={false} />
			{/each}
		</div>
	</div>
</main>

<style lang="scss">
	.msg {
		color: var(--text-soft);
		font-size: 0.95rem;
		margin-bottom: 1.1rem;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
</style>
