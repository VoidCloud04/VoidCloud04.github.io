<script>
	import { site } from '$lib/data/site.js';

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="shell inner">
		<p class="copy">© {year} {site.firstName} {site.lastName}</p>
		<p class="meta">
			Built with <a href="https://svelte.dev" target="_blank" rel="noreferrer noopener">Svelte 5</a>
			·
			<a href="https://github.com/VoidCloud04/VoidCloud04.github.io" target="_blank" rel="noreferrer noopener">
				Source
			</a>
		</p>
	</div>
</footer>

<style lang="scss">
	@use '../../styles/tokens' as *;

	.footer {
		background: var(--surface);
		border-top: 1px solid var(--rule);
		margin-top: auto;
	}

	.inner {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem 1.5rem;
		justify-content: space-between;
		padding-block: 1.1rem;
	}

	p {
		color: var(--text-muted);
		font-family: var(--font-mono);
		font-size: 0.62rem;
		letter-spacing: 0.03em;
	}

	@media (max-width: $bp-sm) {
		.inner {
			justify-content: flex-start;
		}
	}
</style>
