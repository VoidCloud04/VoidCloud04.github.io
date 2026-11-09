<script>
    const tabs = [
    {
        name: "Root",
        color: "",
        href: "/",
    },
    {
        name: "Projects",
        color: "blue",
        href: "/projects"
    },
    {
        name: "Home Labbing",
        color: "purple",
        href: "/homelab"
    }]
</script>

<div class="flexRow">
        {#each tabs as tab}
            <button class="button-{tab.color}"
            onclick={() => {window.location.href = tab.href}}>{tab.name}</button>
        {/each}
</div>