<script>
	/**
	 * Gradient page header, mirroring the resume banner.
	 * @type {{
	 *   title: string,
	 *   emphasis?: string,
	 *   tagline?: string[],
	 *   children?: import('svelte').Snippet
	 * }}
	 */
	let { title, emphasis = '', tagline = [], children } = $props();
</script>

<header class="banner">
	<div class="shell">
		<h1>{title}{#if emphasis}&nbsp;<b>{emphasis}</b>{/if}</h1>

		{#if tagline.length}
			<p class="tagline">
				{#each tagline as part (part)}
					<span class="part">{part}</span>
				{/each}
			</p>
		{/if}

		{#if children}
			<div class="actions">{@render children()}</div>
		{/if}
	</div>
</header>

<style lang="scss">
	.banner {
		background: var(--banner);
		border-bottom: 3px solid var(--teal-dim);
		padding-block: clamp(1.75rem, 5vw, 3rem);
	}

	h1 {
		color: #fff;
		font-size: clamp(1.6rem, 4.5vw, 2.5rem);
		font-weight: 300;
		letter-spacing: 0.02em;
		line-height: 1.1;
		text-transform: uppercase;

		b {
			color: #fff;
			font-weight: 700;
		}
	}

	.tagline {
		align-items: baseline;
		color: #a8d4e2;
		display: flex;
		flex-wrap: wrap;
		font-family: var(--font-mono);
		font-size: clamp(0.66rem, 1.6vw, 0.76rem);
		letter-spacing: 0.02em;
		line-height: 1.7;
		margin-top: 0.6rem;
		row-gap: 0.1rem;
	}

	// Separator lives on the preceding item so it never dangles onto its own line.
	.part:not(:last-child)::after {
		color: #6fa8bd;
		content: '|';
		padding-inline: 0.55rem;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin-top: 1.25rem;
	}
</style>
