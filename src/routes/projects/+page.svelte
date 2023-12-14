<script lang="ts">
  import ProjectCard from './ProjectCard.svelte';

  const projects = [
    {
      title: 'QR Wallpaper',
      description:
        'Generate QR image for your wallpaper or screensaver. I was tired of Face ID not working with masks during COVID and unlocking my phone every time I was required to show ceritificate. So I made this app to generate scannable QR code while keeping original wallpaper.',
      url: 'https://qrwallpaper.linards.id.lv/',
      tags: ['React', 'Material UI'],
    },
  ];
</script>

<div
  style="grid-template-columns: repeat(auto-fill, minmax(350px, 1fr))"
  class="grid w-full gap-4 p-4"
>
  {#each projects as project}
    <ProjectCard {...project} />
  {/each}
</div>
