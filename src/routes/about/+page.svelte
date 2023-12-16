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
  <meta name="description" content="Linards Bulks - Full-stack developer. About me." />
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
        Hi, I'm Linards Bulks, a Full-stack developer based in Riga. I specialize in building web applications of varying scales and complexities. My toolkit includes React and its ecosystem, Node.js, TypeScript, MongoDB, PostgreSQL, Docker, and more. I use this website to showcase my projects and experiment with new technologies.
      </p>
      <p class="text-lg">
        <br />
        Interested in connecting? Feel free to check out my socials below or send me an <a class="underline text-accent-orange"  href="mailto:linards.bulks@gmail.com">email</a>. :)
        <br />
      </p>
    </div>
  </div>
</div>
