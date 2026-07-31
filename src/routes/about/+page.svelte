<script>
	import Banner from '$lib/components/Banner.svelte';
	import ChipRow from '$lib/components/ChipRow.svelte';
	import ContactBar from '$lib/components/ContactBar.svelte';
	import EntryHead from '$lib/components/EntryHead.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import Points from '$lib/components/Points.svelte';
	import Section from '$lib/components/Section.svelte';

	import {
		education,
		experience,
		interests,
		leadership,
		summary
	} from '$lib/data/resume.js';
	import { pageMeta, site } from '$lib/data/site.js';
	import { skillGroups } from '$lib/data/skills.js';
</script>

<svelte:head>
	<title>{pageMeta.about.title}</title>
	<meta name="description" content={pageMeta.about.description} />
</svelte:head>

<Banner title="About" tagline={site.tagline}>
</Banner>

<ContactBar />

<main class="page-main">
	<div class="shell split">
		<div class="stack">
			<Section title="Professional Summary">
				<p class="summary">{@html summary}</p>
			</Section>

			<Section title="Experience">
				<div class="entries">
					{#each experience as job (job.role + job.org)}
						<article class="entry">
							<EntryHead
								title={job.role}
								subtitle={job.org}
								when={job.when}
								where={job.where}
								status={job.status ?? ''}
								statusStyle={job.statusStyle ?? ''}
							/>
							<Points items={job.points} />
						</article>
					{/each}
				</div>
			</Section>

			<Section title="Leadership">
				<div class="entries">
					{#each leadership as role (role.role + role.org)}
						<article class="entry">
							<EntryHead
								title={role.role}
								subtitle={role.org}
								when={role.when}
								where={role.where}
								status={role.status ?? ''}
								statusStyle={role.statusStyle ?? ''}
							/>
							<Points items={role.points} />
						</article>
					{/each}
				</div>
			</Section>
		</div>

		<aside>
			<Panel title="Education">
				<p class="edu-school">{education.school}</p>
				<p class="edu-degree">{education.degree}</p>
				<p class="edu-meta">{education.when}</p>
				<p class="edu-meta">{education.where}</p>
				<div class="coursework">
					<p class="coursework-label">Relevant coursework</p>
					<Points items={education.coursework} dense />
				</div>
			</Panel>

			<Panel title="Technical Skills">
				{#each skillGroups as group (group.label)}
					<ChipRow label={group.label} items={group.items} />
				{/each}
			</Panel>

			<Panel title="Interests">
				<p class="interests">{interests.join(' · ')}</p>
			</Panel>
		</aside>
	</div>
</main>

<style lang="scss">
	.summary {
		color: var(--text-soft);
		font-size: 0.95rem;
		line-height: 1.75;
		max-width: 72ch;
	}

	.entries {
		display: flex;
		flex-direction: column;
		gap: 1.35rem;
	}

	.entry {
		border-left: 2px solid var(--rule);
		padding-left: 0.95rem;
		transition: border-color var(--speed) var(--ease);

		&:hover {
			border-left-color: var(--teal-dim);
		}
	}

	.edu-school {
		font-size: 0.95rem;
		font-weight: 600;
	}

	.edu-degree {
		color: var(--teal);
		font-size: 0.85rem;
		font-weight: 600;
		margin-top: 0.1rem;
	}

	.edu-meta {
		color: var(--text-muted);
		font-family: var(--font-mono);
		font-size: 0.6rem;
		letter-spacing: 0.02em;
		margin-top: 0.3rem;

		& + & {
			margin-top: 0.1rem;
		}
	}

	.coursework {
		border-left: 2px solid var(--teal-dim);
		margin-top: 0.75rem;
		padding-left: 0.7rem;
	}

	.coursework-label {
		color: var(--text-muted);
		font-family: var(--font-mono);
		font-size: 0.58rem;
		letter-spacing: 0.09em;
		margin-bottom: 0.3rem;
		text-transform: uppercase;
	}

	.interests {
		color: var(--text-soft);
		font-size: 0.85rem;
		line-height: 1.7;
	}
</style>
