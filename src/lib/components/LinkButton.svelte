<script>
	/** @type {{ href: string, label: string, variant?: 'solid' | 'ghost', external?: boolean }} */
	let { href, label, variant = 'ghost', external = true } = $props();
</script>

<a
	class="btn"
	class:solid={variant === 'solid'}
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noreferrer noopener' : undefined}
>
	{label}
	<span class="arrow" aria-hidden="true">→</span>
</a>

<style lang="scss">
	.btn {
		align-items: center;
		border: 1px solid var(--chip-br);
		border-radius: var(--radius);
		color: var(--text-soft);
		display: inline-flex;
		font-family: var(--font-mono);
		font-size: 0.64rem;
		gap: 0.4rem;
		letter-spacing: 0.05em;
		padding: 0.35rem 0.7rem;
		text-transform: uppercase;
		transition:
			border-color var(--speed) var(--ease),
			color var(--speed) var(--ease),
			background var(--speed) var(--ease);

		&:hover {
			background: var(--teal-ghost);
			border-color: var(--teal);
			color: var(--teal-hi);
			text-decoration: none;
		}
	}

	.arrow {
		transition: transform var(--speed) var(--ease);
	}

	.btn:hover .arrow {
		transform: translateX(2px);
	}

	.solid {
		background: var(--teal-dim);
		border-color: var(--teal-dim);
		color: #eafcff;

		&:hover {
			background: var(--teal);
			border-color: var(--teal);
			color: #04161b;
		}
	}
</style>
