<script>
    import TabRow from "#lib/components/TabRow.svelte";

    const deviceList = [
        {
            name: "Homelab",
            os: "Open Media Vault 8",
            hardware: ['i5-8500','16GB DDR4', '2x 256GB NvME', '3x 2TB HDD', '1x 1TB HDD']
        },
        {
            name: "Homebrew Router",
            os: "Opnsense 26.7",
            hardware: ['Dell Optiplex 7010 SFF', '8GB DDR4', '1x 256GB NvME']
        },
        {
            name: "ONT Bypass Module",
            os: "8311 Firmware",
            hardware: ['X-ONU SFPP Module']
        }
    ]

    const serviceList = [
        {
            name: "Jellyfin"
        },
        {
            name: "Automatic Ripping Machine"
        },
        {
            name: "Pi Hole"
        }
    ]
</script>

<div class="flexCol">
    <h1>Homelabbing Schenanigans</h1>

    <TabRow />

    <h3>Devices</h3>
    <div class="flexRow">
        {#each deviceList as device}
            <div class="flexCol device">
                <h4>{device.name}</h4>
                <p>Operating System: {device.os}</p>
                <div class="flexRow">
                    {#each device.hardware as item,i}
                        <p>{item}{i < device.hardware.length - 1 ? "," : ""}</p>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
    <h3>Services</h3>
    <div class="flexRow">
        {#each serviceList as service}
            <p class="device">{service.name}</p>
        {/each}
    </div>
</div>

<style lang="scss">

</style>