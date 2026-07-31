// ============================================================================
//  SITE IDENTITY  —  name, tagline, contact links and navigation.
//  Edit anything here and it updates everywhere on the site.
// ============================================================================

export const site = {
	firstName: 'Void',
	lastName: '',
	alias: 'VoidCloud',

	// Shown under the name in the banner, joined with a "|" separator.
	tagline: ['Software Developer', 'IT Intern', 'Web & Systems Development', 'B.S. Computer Science Candidate'],

	location: 'Texas, United States',

	// Early / archived game work, linked from the bottom of the Projects page.
	itchUrl: 'https://mrbacon470.itch.io/',

	// Contact strip under the banner. Add or remove entries freely.
	links: [
		{
			label: 'GitHub',
			text: 'github.com/VoidCloud04',
			href: 'https://github.com/VoidCloud04'
		},
	],

	// Primary navigation. `href` must match the route folder in src/routes.
	// Keep the trailing slash — the site is built with trailingSlash: 'always'.
	nav: [
		{ label: 'Home', href: '/' },
		{ label: 'Projects', href: '/projects/' },
		{ label: 'About', href: '/about/' }
	]
};

// Per-page <title> and meta description.
export const pageMeta = {
	home: {
		title: 'Void — Software Developer',
		description:
			'Software developer and computer science student working across front-end web, systems programming and self-hosted infrastructure.'
	},
	projects: {
		title: 'Projects — Void',
		description:
			'Applications, homelab infrastructure, web games and coursework research built by Michael McFarlin.'
	},
	about: {
		title: 'About — Void',
		description:
			'Background, experience, education and technical skills for Michael McFarlin, software developer.'
	}
};
