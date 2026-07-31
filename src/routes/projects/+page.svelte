<script>
	import Banner from '$lib/components/Banner.svelte';
	import ContactBar from '$lib/components/ContactBar.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Section from '$lib/components/Section.svelte';

	import { projectGroups } from '$lib/data/projects.js';
	import { pageMeta, site } from '$lib/data/site.js';

	const total = projectGroups.reduce((sum, group) => sum + group.projects.length, 0);
</script>

<svelte:head>
	<title>{pageMeta.projects.title}</title>
	<meta name="description" content={pageMeta.projects.description} />
</svelte:head>

<Banner
	title="Projects"
	tagline={['Applications', 'Infrastructure', 'Games', 'Research', `${total} in total`]}
/>

<ContactBar />

<main class="page-main">
	<div class="shell stack">
		{#each projectGroups as group (group.title)}
			<Section title={group.title} blurb={group.blurb}>
				<div class="cards">
					{#each group.projects as project, i (project.name)}
						<ProjectCard {project} index={i} />
					{/each}
				</div>
			</Section>
		{/each}

		<aside class="archive">
			<p class="archive-label">Archive</p>
			<p>
				My earliest game work lives on
				<a href={site.itchUrl} target="_blank" rel="noreferrer noopener">itch.io</a>. Those are
				learning projects from when I was starting out — they're kept up for posterity rather than
				as a showcase of what I build today.
			</p>
		</aside>
	</div>
</main>

<style lang="scss">
	.cards {
		display: grid;
		gap: 0.85rem;
		grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
	}

	.archive {
		background: var(--surface);
		border: 1px dashed var(--rule);
		border-radius: var(--radius-lg);
		padding: 1rem 1.15rem;
	}

	.archive-label {
		color: var(--text-muted);
		font-family: var(--font-mono);
		font-size: 0.58rem;
		letter-spacing: 0.11em;
		margin-bottom: 0.4rem;
		text-transform: uppercase;
	}

	.archive p:last-child {
		color: var(--text-muted);
		font-size: 0.85rem;
		line-height: 1.65;
		max-width: 62ch;
	}
</style>
