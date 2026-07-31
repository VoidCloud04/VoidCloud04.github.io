<script>
	import '@fontsource-variable/inter';
	import '../styles/global.scss';

	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<Nav />
{@render children()}
<Footer />
