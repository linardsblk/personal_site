<script lang="ts">
  import { onMount } from 'svelte';

  let commentedCodeElement: HTMLDivElement;

  const getLinesCount = () => {
    const codeHeight = commentedCodeElement?.clientHeight ?? 0;
    return Math.ceil(codeHeight / 28) + 1;
  };

  let linesCount = getLinesCount();

  onMount(() => {
    const resizeObserver = new ResizeObserver(() => {
      linesCount = getLinesCount();
    });

    resizeObserver.observe(commentedCodeElement);

    return () => resizeObserver.unobserve(commentedCodeElement);
  });
</script>

<svelte:head>
  <title>About - linards.dev</title>
  <meta name="description" content="About me" />
</svelte:head>

<div class="flex">
  <div>
    <p class="mr-4 w-4 text-lg">
      {#each { length: linesCount } as _, i}
        {i + 1}<br />
      {/each}
    </p>
  </div>
  <div>
    <p class="w-8 text-lg">
      //*<br />
      {#each { length: linesCount } as _, i}
        &nbsp;*<br />
      {/each}
      */<br />
    </p>
  </div>
  <div class="max-w-screen-md">
    <div bind:this={commentedCodeElement}>
      <p class="text-lg">
        <br />
        Hi, I'm Linards Bulks, a Full-stack developer located in Riga. My speciality is building web applications of various scale and complexity. My toolset includes React and it's ecosystem, Node.js, TypeScript, MongoDB, PostgreSQL, Docker, and more. Using this website to present my projects and experiment with new technologies.
      </p>
      <p class="text-lg">
        <br />
        Interested in connecting? Feel free to write me an <a class="underline text-accent-orange"  href="mailto:linards.bulks@gmail.com">email</a> or socials linked in the footer. :)
        <br />
      </p>
    </div>
  </div>
</div>
