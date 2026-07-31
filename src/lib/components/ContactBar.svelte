<script>
	import { site } from '$lib/data/site.js';
</script>

<div class="contactbar">
	<div class="shell inner">
		{#each site.links as link (link.href)}
			<p class="item">
				<span class="lbl">{link.label}</span>
				<a href={link.href} target="_blank" rel="noreferrer noopener">{link.text}</a>
			</p>
		{/each}
		<p class="item">
			<span class="lbl">Location</span>
			<span class="value">{site.location}</span>
		</p>
	</div>
</div>

<style lang="scss">
	@use '../../styles/tokens' as *;

	.contactbar {
		background: var(--surface);
		border-bottom: 1px solid var(--rule);
	}

	.inner {
		align-items: baseline;
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem 1.75rem;
		padding-block: 0.55rem;
	}

	.item {
		font-size: 0.78rem;
	}

	.lbl {
		color: var(--teal);
		font-family: var(--font-mono);
		font-size: 0.58rem;
		letter-spacing: 0.09em;
		margin-right: 0.45rem;
		text-transform: uppercase;
	}

	.value {
		color: var(--text-soft);
	}

	@media (max-width: $bp-sm) {
		.inner {
			flex-direction: column;
		}
	}
</style>
