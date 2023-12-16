<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import ProjectCard from './ProjectCard.svelte';

  const projects: ComponentProps<ProjectCard>[] = [
    {
      title: 'linards.dev',
      description:
        'This is my personal website, which I use to showcase my projects and provide a space for experimenting with new technologies.',
      url: 'https://linards.dev',
      tags: ['SvelteKit', 'Tailwind', 'TypeScript'],
      sourceCodeUrl: 'https://github.com/linardsblk/personal_site',
    },
    {
      title: 'CSDD Helper',
      description:
        'A Chrome extension designed for CSDD (Latvian Road Traffic Safety Directorate) theory exam practice. It enhances functionality by allowing users to answer questions using a keyboard, auto-play videos, skip introductions, and more. This allows for a much faster and efficient theory exam practice without the need for a mouse',
      url: 'https://github.com/linardsblk/csdd_helper',
      tags: ['JavaSript'],
    },
    {
      title: 'QR Wallpaper',
      description:
        'An application to generate a QR image for your wallpaper or screensaver. I developed this solution in response to the inconvenience of Face ID not working with masks during the COVID-19 pandemic, which necessitated frequent phone unlocking to show certificates. This app generates a scannable QR code while preserving the original wallpaper.',
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
