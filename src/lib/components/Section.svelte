<script>
	/** @type {{ title?: string, blurb?: string, children: import('svelte').Snippet }} */
	let { title = '', blurb = '', children } = $props();
</script>

<section class="section">
	{#if title}
		<h2>{title}</h2>
	{/if}
	{#if blurb}
		<p class="blurb">{blurb}</p>
	{/if}
	{@render children()}
</section>

<style lang="scss">
	h2 {
		border-bottom: 1.5px solid var(--teal-dim);
		color: var(--text);
		font-size: 0.78rem;
		font-weight: 500;
		letter-spacing: 0.13em;
		margin-bottom: 0.9rem;
		padding-bottom: 0.4rem;
		text-transform: uppercase;
	}

	.blurb {
		color: var(--text-muted);
		font-size: 0.86rem;
		margin: -0.4rem 0 1rem;
	}
</style>
