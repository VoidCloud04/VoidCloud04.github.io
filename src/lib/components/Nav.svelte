<script>
	import { page } from '$app/state';
	import { site } from '$lib/data/site.js';

	const isActive = (href) =>
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
</script>

<nav class="nav" aria-label="Primary">
	<div class="shell inner">
		<a class="wordmark" href="/">
			<img src="/Images/VoidWish.png" alt="" width="22" height="22" />
			<span>{site.alias}</span>
		</a>

		<ul class="links">
			{#each site.nav as item (item.href)}
				<li>
					<a
						href={item.href}
						class:active={isActive(item.href)}
						aria-current={isActive(item.href) ? 'page' : undefined}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style lang="scss">
	.nav {
		background: rgba(10, 18, 25, 0.88);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--rule);
		position: sticky;
		top: 0;
		z-index: 20;
	}

	.inner {
		align-items: center;
		display: flex;
		gap: 1.5rem;
		justify-content: space-between;
		min-height: 3.25rem;
	}

	.wordmark {
		align-items: center;
		color: var(--text);
		display: inline-flex;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		gap: 0.5rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;

		&:hover {
			color: var(--teal-hi);
			text-decoration: none;
		}

		img {
			display: block;
		}
	}

	.links {
		display: flex;
		gap: clamp(0.75rem, 2.5vw, 1.75rem);

		a {
			color: var(--text-muted);
			display: inline-block;
			font-family: var(--font-mono);
			font-size: 0.68rem;
			letter-spacing: 0.07em;
			padding: 0.35rem 0;
			position: relative;
			text-transform: uppercase;

			&:hover {
				color: var(--text);
				text-decoration: none;
			}

			&.active {
				color: var(--teal);
			}

			&.active::after {
				background: var(--teal);
				border-radius: 2px;
				bottom: -0.15rem;
				content: '';
				height: 2px;
				left: 0;
				position: absolute;
				right: 0;
			}
		}
	}
</style>
