<script>
	import Pill from './Pill.svelte';

	/**
	 * Shared header for jobs, leadership roles and projects.
	 * @type {{
	 *   title: string,
	 *   subtitle?: string,
	 *   when?: string,
	 *   where?: string,
	 *   status?: string,
	 *   statusStyle?: 'solid' | 'soft',
	 *   compact?: boolean
	 * }}
	 */
	let {
		title,
		subtitle = '',
		when = '',
		where = '',
		status = '',
		statusStyle = 'solid',
		compact = false
	} = $props();
</script>

<div class="head" class:compact>
	<div class="identity">
		<h3>
			{title}{#if status}<Pill text={status} variant={statusStyle} />{/if}
		</h3>
		{#if subtitle}
			<p class="org">{subtitle}</p>
		{/if}
	</div>

	{#if when || where}
		<div class="when">
			{when}
			{#if where}<span class="where">{where}</span>{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	@use '../../styles/tokens' as *;

	.head {
		align-items: baseline;
		display: flex;
		gap: 0.5rem 1rem;
		justify-content: space-between;
		margin-bottom: 0.35rem;
	}

	h3 {
		align-items: center;
		color: var(--text);
		display: flex;
		flex-wrap: wrap;
		font-size: 1rem;
		gap: 0.5rem;
		letter-spacing: -0.02em;
	}

	.compact h3 {
		font-size: 0.88rem;
	}

	.org {
		color: var(--teal);
		font-size: 0.85rem;
		font-weight: 600;
		margin-top: 0.05rem;
	}

	.when {
		color: var(--text-muted);
		font-family: var(--font-mono);
		font-size: 0.62rem;
		letter-spacing: 0.01em;
		text-align: right;
		white-space: nowrap;
	}

	.where {
		display: block;
		font-style: italic;
		font-weight: 400;
		margin-top: 0.15rem;
		opacity: 0.85;
	}

	@media (max-width: $bp-sm) {
		.head {
			flex-direction: column;
		}

		.when {
			text-align: left;
		}
	}
</style>
