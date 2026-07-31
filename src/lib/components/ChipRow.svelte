<script>
	import Chip from './Chip.svelte';

	/** @type {{ label?: string, items: string[] }} */
	let { label = '', items } = $props();
</script>

<div class="chip-row">
	{#if label}
		<p class="label">{label}</p>
	{/if}
	<div class="chips">
		{#each items as item (item)}
			<Chip>{item}</Chip>
		{/each}
	</div>
</div>

<style lang="scss">
	.chip-row + :global(.chip-row) {
		margin-top: 0.85rem;
	}

	.label {
		color: var(--text-muted);
		font-family: var(--font-mono);
		font-size: 0.62rem;
		font-weight: 500;
		letter-spacing: 0.08em;
		margin-bottom: 0.45rem;
		text-transform: uppercase;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}
</style>
