<script>
    import TabRow from "#lib/components/TabRow.svelte";

    const projects = [
        {
            name: "Coop Co",
            desc: "A knockon :tm: of Egg Inc being rebuilt in Svelte",
            href: "/Coop-Co",
            pinned: true
        },
        {
            name: "Visual Schedule Builder",
            desc: "A tool for me to visually build out my college schedule",
            href: "/Visual-Schedule-Builder",
            pinned: true
        },
        {
            name: "Under Pressure",
            desc: "First ever Game Jam participation, built for NYIGJ 2024, recieved second place",
            href: "/Under-Pressure",
            pinned: false
        },
        {
            name: "Web Accessibility & LLMs",
            desc: "University project analyzing how LLMs build accessible web interfaces by default",
            href: "/WebAccessibility-LLMs",
            pinned: false
        },
        {
            name: "Web Accessibility & LLMs",
            desc: "University project analyzing how LLMs build accessible web interfaces by default",
            href: "/WebAccessibility-LLMs",
            pinned: false
        }
    ]

    const pinnedProjects = projects.filter((item) => item.pinned)
    const unpinnedProjects = projects.filter((item) => !item.pinned)
</script>

<div class="flexCol">
    <h1>Projects</h1>
    <TabRow />

    <h3>Things I'm currently working on!</h3>
    <div class="flexRow">
        {#each pinnedProjects as project}
            <div class="project">
                <p>{project.name}</p>
                <p>{project.desc}</p>
                {#if project.href !== ""}
                    <button class="button-blue" onclick={() => {window.location.href = project.href}}>Visit It {"=>"}</button>
                {/if}
            </div>
        {/each}
    </div>

    <h3>Other Projects (Not in Active Development)</h3>
    <div class="flexRow">
        {#each unpinnedProjects as project}
            <div class="project flexRow">
                <p>{project.name}</p>
                {#if project.href !== ""}
                    <button class="button-blue" onclick={() => {window.location.href = project.href}}>Visit It {"=>"}</button>
                {/if}
            </div>
        {/each}
    </div>

    
</div>