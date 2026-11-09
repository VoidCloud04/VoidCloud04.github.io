<script>
	let { children } = $props();
	import '#lib/styles/global.scss'
</script>

<svelte:head>
	<link rel="icon" href="/VoidWish.png" />
</svelte:head>

{@render children()}
