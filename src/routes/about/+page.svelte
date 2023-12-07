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
  <title>About</title>
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
  <div>
    <div bind:this={commentedCodeElement}>
      <p class="text-lg">
        <br />
        Hi, I'm Linards Bulks, a full-stack developer from Riga. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Sed, quia. Aspernatur, eaque? Perferendis
        autem fuga impedit nam mollitia minima, accusantium quod deleniti ratione
        perspiciatis quos? Eius aut dolorum amet quam? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aspernatur corrupti vel, earum facere assumenda
        ab autem aliquam quisquam sapiente, illo dolores voluptate maiores similique
        itaque blanditiis commodi ipsum, exercitationem sit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit.
      </p>
      <p class="text-lg">
        Hi, I'm Linards Bulks, a full-stack developer from Riga. Lorem ipsum
        dolor sit amet consectetur adipisicing elit.
        <br />
      </p>
    </div>
  </div>
</div>
