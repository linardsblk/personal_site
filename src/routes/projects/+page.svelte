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

<div class="projects-grid grid h-max w-full items-stretch gap-4 p-4">
  {#each projects as project}
    <ProjectCard {...project} />
  {/each}
</div>

<style>
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
</style>
