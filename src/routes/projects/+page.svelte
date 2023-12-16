<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import ProjectCard from './ProjectCard.svelte';

  const projects: ComponentProps<ProjectCard>[] = [
    {
      title: 'linards.dev',
      description:
        'My personal website I use to showcase my projects and provide a space to experiment with new technologies.',
      url: 'https://linards.dev',
      tags: ['SvelteKit', 'Tailwind', 'TypeScript'],
      sourceCodeUrl: 'https://github.com/linardsblk/personal_website',
    },
    {
      title: 'CSDD Helper',
      description:
        'Chrome extension for CSDD (Latvian Road Traffic Safety Directorate) theory exam practice. It adds functionality to answer questions with keyboard, auto-play videos, skip intro and more. Allows to practice theory exam without mouse and in less time.',
      url: 'https://github.com/linardsblk/csdd_helper',
      tags: ['JavaSript'],
    },
    {
      title: 'QR Wallpaper',
      description:
        'Generate QR image for your wallpaper or screensaver. I was tired of Face ID not working with masks during COVID and unlocking my phone every time I was required to show ceritificate. So I made this app to generate scannable QR code while keeping original wallpaper.',
      url: 'https://qrwallpaper.linards.id.lv/',
      tags: ['React', 'Material UI'],
      sourceCodeUrl: 'https://github.com/linardsblk/qr-wallpaper',
    },
  ];
</script>

<svelte:head>
  <title>Projects - linards.dev</title>
  <meta name="description" content="Linards Bulks - Full-stack developer. Projects." />
</svelte:head>
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
