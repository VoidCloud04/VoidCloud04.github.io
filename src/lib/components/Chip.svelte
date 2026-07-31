<script>
	let { children } = $props();
</script>

<span class="chip">{@render children()}</span>

<style lang="scss">
	.chip {
		display: inline-block;
		background: var(--chip-bg);
		border: 1px solid var(--chip-br);
		border-radius: var(--radius);
		color: var(--chip-fg);
		font-family: var(--font-mono);
		font-size: 0.7rem;
		font-weight: 500;
		letter-spacing: -0.02em;
		line-height: 1.5;
		padding: 0.15rem 0.5rem;
		white-space: nowrap;
	}
</style>
