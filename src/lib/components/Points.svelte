<script>
	/** Bullet list. Items may contain inline HTML (<b>, <i>, <a>). */
	/** @type {{ items: string[], dense?: boolean }} */
	let { items, dense = false } = $props();
</script>

<ul class="points" class:dense>
	{#each items as item (item)}
		<li>{@html item}</li>
	{/each}
</ul>

<style lang="scss">
	.points {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	li {
		color: var(--text-soft);
		font-size: 0.9rem;
		line-height: 1.55;
		padding-left: 1.05rem;
		position: relative;

		&::before {
			color: var(--teal);
			content: '▸';
			font-size: 0.8rem;
			left: 0;
			line-height: 1.75;
			position: absolute;
			top: 0;
		}
	}

	.dense li {
		font-size: 0.82rem;
		padding-left: 0.85rem;

		&::before {
			content: '';
			background: var(--teal);
			border-radius: 50%;
			height: 4px;
			top: 0.6rem;
			width: 4px;
		}
	}
</style>
