<script>
	/** Sidebar panel, echoing the tinted aside on the resume. */
	/** @type {{ title: string, children: import('svelte').Snippet }} */
	let { title, children } = $props();
</script>

<div class="panel">
	<h2>{title}</h2>
	{@render children()}
</div>

<style lang="scss">
	.panel {
		background: var(--surface);
		border: 1px solid var(--rule);
		border-top: 3px solid var(--teal-dim);
		border-radius: var(--radius-lg);
		padding: 0.95rem 1.05rem 1.1rem;
	}

	.panel + :global(.panel) {
		margin-top: 1rem;
	}

	h2 {
		border-bottom: 1px solid var(--rule);
		color: var(--text);
		font-size: 0.72rem;
		font-weight: 500;
		letter-spacing: 0.11em;
		margin-bottom: 0.8rem;
		padding-bottom: 0.4rem;
		text-transform: uppercase;
	}
</style>
