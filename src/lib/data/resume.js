// ============================================================================
//  RESUME CONTENT  —  drives the About page.
//
//  DATE MAINTENANCE: search for "Present" whenever something wraps up.
//  A finished item = replace "Present" with the end month/year and delete
//  its `status` pill. Ongoing work keeps "Present" plus the pill.
//
//  Wrap key phrases in <b></b> inside `summary` and `points` for emphasis.
// ============================================================================

export const summary = `Senior Computer Science student and <b>Toyota Motor North America</b> IT
intern with six years of hands-on development experience spanning <b>Svelte</b> and JavaScript
front-end web development, browser-based games, a self-hosted Linux homelab, and research on
web accessibility with large language models. Coursework includes low-level systems programming
in C, C++ and ARM assembly. Experienced delivering inside an <b>Agile/Scrum</b> team — from
requirements gathering with business stakeholders through implementation, testing and release.`;

export const experience = [
	{
		role: 'OneTech Summer Intern',
		org: 'Toyota Motor North America',
		when: 'May 2026 – Aug 2026',
		where: 'Plano, TX',
		points: [
			'<b>Redesigned internal legacy systems</b>, modernizing the user experience and adding flexibility for the teams that rely on them daily.',
			'Partnered directly with business stakeholders to gather requirements and deliver <b>self-service solutions</b> for internal reference tools.',
			'Contributed to the full <b>Agile/Scrum</b> cadence — daily standups, parking lot sessions, backlog refinement and sprint retrospectives.',
			'Tracked work end-to-end in <b>Jira</b>, authoring tickets for new features, enhancements and defects.',
			'Performed exploratory testing that surfaced <b>bugs and missing functionality</b>.'
		]
	},
	{
		role: 'Summer Staff',
		org: 'Kanakuk',
		when: '2023 – 2025',
		where: 'Lampe, MO',
		points: [
			'Ran and instructed multiple daily activities — dock, canoe, pool and high-elements — under continuous safety monitoring.',
			'Facilitated <b>high-elements safety training</b> and consistently completed weekly reporting and paperwork on schedule.'
		]
	},
	{
		role: 'Team Member',
		org: 'Whataburger',
		when: 'Jul 2021 – May 2023',
		where: 'Frisco, TX',
		points: [
			'Collaborated with a fast-moving team to cook and assemble food through peak weekend lunch and dinner rushes.',
			'Operated, cleaned and maintained food preparation and cooking equipment.'
		]
	}
];

export const education = {
	school: 'University of North Texas',
	degree: 'B.S., Computer Science',
	when: 'Aug 2023 – Dec 2027 (expected)',
	where: 'Denton, TX',
	coursework: [
		'Low-Level & Systems Programming',
		'Software Engineering & SDLC',
		'Software Testing Fundamentals',
		'Project Management'
	]
};

export const leadership = [
	{
		role: 'Student Leader',
		org: 'UNT Baptist Student Ministry',
		when: 'Spring 2024 – Fall 2025',
		where: 'Denton, TX',
		points: [
			'Led the weekly free-lunch ministry serving <b>200+ students</b> every week.',
			'Recruited, scheduled and directed volunteer teams for each service.',
			'Coordinated with sponsoring organizations to secure ongoing support.'
		]
	}
];

export const interests = [
	'Homelabbing & self-hosting',
	'Reading',
	'Factory & automation simulation games',
	'Church and community service'
];

// Short blurb used on the home page.
export const intro = `I'm a computer science student at UNT and a former software intern at Toyota North America.
I spend my time on front-end web work with Svelte, low-level systems programming, and running the
homelab that hosts everything I self-host.`;
