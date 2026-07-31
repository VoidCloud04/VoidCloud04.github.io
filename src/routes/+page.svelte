<script>
	import Banner from '$lib/components/Banner.svelte';
	import ChipRow from '$lib/components/ChipRow.svelte';
	import ContactBar from '$lib/components/ContactBar.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Section from '$lib/components/Section.svelte';

	import { featuredProjects } from '$lib/data/projects.js';
	import { education, experience, intro } from '$lib/data/resume.js';
	import { pageMeta, site } from '$lib/data/site.js';
	import { skillGroups } from '$lib/data/skills.js';

	const current = experience[0];

	const glance = [
		{ label: 'Role', value: `${current.role}, ${current.org}` },
		{ label: 'Study', value: `${education.degree} — ${education.school}` },
		{ label: 'Based', value: site.location }
	];
</script>

<svelte:head>
	<title>{pageMeta.home.title}</title>
	<meta name="description" content={pageMeta.home.description} />
</svelte:head>

<Banner title={site.firstName} emphasis={site.lastName} tagline={site.tagline}>
	<LinkButton href="/projects/" label="View Projects" variant="solid" external={false} />
</Banner>

<ContactBar />

<main class="page-main">
	<div class="shell split">
		<div class="stack">
			<Section title="About Me">
				<p class="lede">{intro}</p>
				<p class="lede">
					I used to build a lot of idle games. These days most of my time goes to my degree, my
					homelab, and web projects I actually want to keep maintaining.
				</p>
			</Section>

			<Section title="Currently Building">
				<div class="cards">
					{#each featuredProjects as project, i (project.name)}
						<ProjectCard {project} index={i} />
					{/each}
				</div>
				<p class="more">
					<a href="/projects/">See everything I've built →</a>
				</p>
			</Section>
		</div>

		<aside>
			<Panel title="Technical Skills">
				{#each skillGroups as group (group.label)}
					<ChipRow label={group.label} items={group.items} />
				{/each}
			</Panel>

			<Panel title="At a Glance">
				<dl class="glance">
					{#each glance as row (row.label)}
						<div class="row">
							<dt>{row.label}</dt>
							<dd>{row.value}</dd>
						</div>
					{/each}
				</dl>
			</Panel>

			<Panel title="Elsewhere">
				<ul class="elsewhere">
					{#each site.links as link (link.href)}
						<li>
							<span class="lbl">{link.label}</span>
							<a href={link.href} target="_blank" rel="noreferrer noopener">{link.text}</a>
						</li>
					{/each}
				</ul>
			</Panel>
		</aside>
	</div>
</main>

<style lang="scss">
	.lede {
		color: var(--text-soft);
		font-size: 0.98rem;
		line-height: 1.7;

		& + & {
			margin-top: 0.7rem;
		}
	}

	.cards {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.more {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.03em;
		margin-top: 1rem;
	}

	.glance .row + .row {
		margin-top: 0.65rem;
	}

	dt {
		color: var(--text-muted);
		font-family: var(--font-mono);
		font-size: 0.58rem;
		letter-spacing: 0.09em;
		margin-bottom: 0.15rem;
		text-transform: uppercase;
	}

	dd {
		color: var(--text-soft);
		font-size: 0.85rem;
		line-height: 1.5;
	}

	.elsewhere li + li {
		margin-top: 0.6rem;
	}

	.elsewhere .lbl {
		color: var(--text-muted);
		display: block;
		font-family: var(--font-mono);
		font-size: 0.58rem;
		letter-spacing: 0.09em;
		margin-bottom: 0.1rem;
		text-transform: uppercase;
	}

	.elsewhere a {
		font-size: 0.82rem;
		overflow-wrap: anywhere;
	}
</style>
