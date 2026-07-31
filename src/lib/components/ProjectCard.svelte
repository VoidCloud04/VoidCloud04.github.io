<script>
	import { slide } from 'svelte/transition';
	import Chip from './Chip.svelte';
	import EntryHead from './EntryHead.svelte';
	import LinkButton from './LinkButton.svelte';
	import Points from './Points.svelte';

	/** @type {{ project: Record<string, any>, index?: number }} */
	let { project, index = 0 } = $props();

	let open = $state(false);

	const detailsId = $derived(
		`specs-${index}-${project.name.replace(/\W+/g, '-').toLowerCase()}`
	);
	const hasDetails = $derived(Boolean(project.details?.length));
</script>

<article class="card">
	<EntryHead
		title={project.name}
		when={project.when ?? ''}
		status={project.status ?? ''}
		statusStyle={project.statusStyle ?? 'solid'}
	/>

	{#if project.stack?.length}
		<div class="stack-chips">
			{#each project.stack as tech (tech)}
				<Chip>{tech}</Chip>
			{/each}
		</div>
	{/if}

	{#if project.summary}
		<p class="summary">{project.summary}</p>
	{/if}

	{#if project.points?.length}
		<Points items={project.points} />
	{/if}

	{#if hasDetails}
		<button
			class="toggle"
			type="button"
			aria-expanded={open}
			aria-controls={detailsId}
			onclick={() => (open = !open)}
		>
			<span class="caret" class:open aria-hidden="true">▸</span>
			{open ? 'Hide specs' : 'Show specs'}
		</button>

		{#if open}
			<div class="details" id={detailsId} transition:slide={{ duration: 200 }}>
				{#each project.details as group (group.label)}
					<div class="spec-group">
						<p class="spec-label">{group.label}</p>
						<ul>
							{#each group.items as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		{/if}
	{/if}

	{#if project.links?.length}
		<div class="links">
			{#each project.links as link (link.href)}
				<LinkButton href={link.href} label={link.label} />
			{/each}
		</div>
	{/if}
</article>

<style lang="scss">
	@use '../../styles/tokens' as *;

	.card {
		background: var(--surface);
		border: 1px solid var(--rule);
		border-left: 3px solid var(--teal-dim);
		border-radius: var(--radius-lg);
		padding: 1rem 1.15rem 1.1rem;
		transition:
			border-color var(--speed) var(--ease),
			transform var(--speed) var(--ease),
			box-shadow var(--speed) var(--ease);

		&:hover {
			border-left-color: var(--teal);
			box-shadow: var(--shadow);
			transform: translateY(-2px);
		}
	}

	.stack-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
		margin: 0.5rem 0 0.65rem;
	}

	.summary {
		color: var(--text-soft);
		font-size: 0.9rem;
		margin-bottom: 0.55rem;
	}

	.toggle {
		align-items: center;
		background: transparent;
		border: 1px solid var(--chip-br);
		border-radius: var(--radius);
		color: var(--text-muted);
		cursor: pointer;
		display: inline-flex;
		font-family: var(--font-mono);
		font-size: 0.62rem;
		gap: 0.45rem;
		letter-spacing: 0.05em;
		margin-top: 0.85rem;
		padding: 0.3rem 0.65rem;
		text-transform: uppercase;
		transition:
			border-color var(--speed) var(--ease),
			color var(--speed) var(--ease);

		&:hover {
			border-color: var(--teal);
			color: var(--teal-hi);
		}
	}

	.caret {
		display: inline-block;
		transition: transform var(--speed) var(--ease);

		&.open {
			transform: rotate(90deg);
		}
	}

	.details {
		border-top: 1px dashed var(--rule);
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
		margin-top: 0.85rem;
		padding-top: 0.9rem;
	}

	.spec-label {
		color: var(--teal);
		font-family: var(--font-mono);
		font-size: 0.58rem;
		letter-spacing: 0.09em;
		margin-bottom: 0.35rem;
		text-transform: uppercase;
	}

	.spec-group li {
		color: var(--text-soft);
		font-size: 0.8rem;
		line-height: 1.7;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.9rem;
	}

	@media (max-width: $bp-sm) {
		.card {
			padding: 0.9rem 1rem;
		}
	}
</style>
