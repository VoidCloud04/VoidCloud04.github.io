// ============================================================================
//  PROJECTS  —  grouped, looped over on the Projects page.
//
//  Each project supports:
//    name     (required)  Display title.
//    when                 Date range shown on the right of the card.
//    status               Pill text, e.g. 'In Progress' / 'Ongoing' / 'Complete'.
//    statusStyle          'solid' (default) or 'soft' for an outlined pill.
//    stack     []         Tech chips shown under the title.
//    summary              One-line description.
//    points    []         Bullet list. Wrap key phrases in <b></b> for emphasis.
//    links     []         { label, href } buttons at the bottom of the card.
//    details   []         Optional expandable spec groups:
//                           { label: 'Hardware', items: ['CPU — i5-8500', ...] }
//                         Any project with `details` renders a Specs toggle.
//
//  `featured: true` also surfaces the project on the home page.
// ============================================================================

export const projectGroups = [
	{
		title: 'Applications & Tools',
		blurb: 'Software people actually use.',
		projects: [
			{
				name: 'Visual Schedule Builder',
				when: '2026 – Present',
				status: 'In Progress',
				featured: true,
				stack: ['Svelte 5', 'SvelteKit', 'Sass', 'GitHub Pages'],
				summary:
					'A visual course-schedule planner for college students, built to replace a campus tool my university retired.',
				points: [
					'Rebuilding a <b>retired university scheduling tool</b> as a free, self-service web app students can use without an account.',
					'Built on <b>Svelte 5 and SvelteKit</b> with a Material Design 3 inspired interface and a fully static deployment.'
				],
				links: [
					{ label: 'Source', href: 'https://github.com/VoidCloud04/Visual-Schedule-Builder' }
				]
			}
		]
	},

	{
		title: 'Infrastructure & Homelab',
		blurb: 'Hardware and services I run and maintain myself.',
		projects: [
			{
				name: 'Self-Hosted Home Server & NAS',
				when: 'Mar 2026 – Present',
				status: 'Ongoing',
				featured: true,
				stack: ['Linux', 'SnapRAID', 'MergerFS', 'Tailscale', 'DNS', 'Media Streaming'],
				summary:
					'A personal Linux server providing network-wide ad-blocking, media streaming and redundant NAS storage for the whole household.',
				points: [
					'Built and administer a Linux server delivering <b>network-wide DNS ad-blocking</b>, media streaming for a physical media library, and NAS storage for household clients.',
					'Engineered <b>data redundancy with SnapRAID parity</b> and pooled multiple physical disks into a single namespace using <b>MergerFS</b>.',
					'Configured <b>Tailscale</b> for secure remote access to the server and its services from outside the home network.',
					'Own uptime, capacity planning and backup verification for the whole stack.'
				],
				details: [
					{
						label: 'Hardware',
						items: [
							'CPU — Intel Core i5-8500',
							'GPU — Intel UHD Graphics 630',
							'Motherboard — ASUS Prime Z390-P',
							'Memory — 16 GB DDR4'
						]
					},
					{
						label: 'Storage',
						items: ['3 x 2 TB HDD', '1 x 1 TB HDD', '2 x 256 GB NVMe M.2 SSD']
					},
					{
						label: 'Software & Services',
						items: [
							'OpenMediaVault 8 (Debian 13 kernel)',
							'SnapRAID + MergerFS',
							'Jellyfin',
							'Automatic Ripping Machine',
							'Pi-hole',
							'Tailscale'
						]
					}
				]
			}
		]
	},

	{
		title: 'Web Games',
		blurb: 'Browser games and idle-game experiments. All playable in the browser.',
		projects: [
			{
				name: 'Under Pressure',
				when: '2024',
				stack: ['JavaScript', 'HTML5', 'CSS3'],
				summary: 'A game built for the New Years Incremental Game Jam 2024. Recieved 2nd Place',
				links: [{ label: 'Play', href: 'https://voidcloud04.github.io/Under-Pressure' }]
			},
			{
				name: 'Coop Co',
				stack: ['JavaScript', 'HTML5', 'CSS3'],
				summary: 'Egg Inc, without the microtransactions.',
				links: [{ label: 'Play', href: 'https://voidcloud04.github.io/Coop-Co' }]
			},
			{
				name: 'Chemcremental JS',
				stack: ['JavaScript', 'HTML5', 'CSS3'],
				summary:
					'A remaster of an early project in JavaScript, taking inspiration from Synergism.',
				links: [{ label: 'Play', href: 'https://voidcloud04.github.io/Chemcremental-JS' }]
			},
			{
				name: 'Pixel Simulation',
				when: '2023',
				stack: ['JavaScript', 'HTML5 Canvas'],
				summary: 'A prototype falling-sand particle simulation built on HTML canvases.',
				links: [{ label: 'Play', href: 'https://voidcloud04.github.io/PixelSimulation' }]
			}
		]
	},

	{
		title: 'Research & Coursework',
		blurb: 'University work worth keeping around.',
		projects: [
			{
				name: 'Web Accessibility Testing — LLMs',
				stack: ['Empirical Study', 'Accessibility', 'HTML5'],
				summary:
					'A university empirical study on whether large language models can generate accessible web pages.',
				links: [
					{ label: 'Read', href: 'https://voidcloud04.github.io/WebAccessibility-LLMs' }
				]
			}
		]
	}
];

// Convenience list used by the home page.
export const featuredProjects = projectGroups
	.flatMap((group) => group.projects.map((project) => ({ ...project, group: group.title })))
	.filter((project) => project.featured);
