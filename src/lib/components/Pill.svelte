<script>
	/** @type {{ text: string, variant?: 'solid' | 'soft' }} */
	let { text, variant = 'solid' } = $props();
</script>

<span class="pill" class:soft={variant === 'soft'}>{text}</span>

<style lang="scss">
	.pill {
		background: var(--teal-dim);
		border: 1px solid var(--teal-dim);
		border-radius: 999px;
		color: #eafcff;
		font-family: var(--font-mono);
		font-size: 0.56rem;
		font-weight: 500;
		letter-spacing: 0.09em;
		line-height: 1.6;
		padding: 0.1rem 0.5rem;
		text-transform: uppercase;
		white-space: nowrap;
		vertical-align: 0.12em;
	}

	.soft {
		background: transparent;
		color: var(--teal);
	}
</style>
