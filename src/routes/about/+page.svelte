<script lang="ts">
  import { onMount } from 'svelte';
  let pElement: HTMLParagraphElement;

  onMount(() => {
    const resizeObserver = new ResizeObserver(() => {
      let codeHeight = 0;
      const codeElements = document.querySelectorAll('.code');

      codeElements.forEach((element) => {
        codeHeight += element.clientHeight;
      });

      const linesCount = Math.ceil(codeHeight / 28) + 1;
      let numberingHtml = '';
      for (let i = 1; i < linesCount; i++) {
        numberingHtml += i + '<br>';
      }

      const linesElement = document.getElementById('lines');
      if (linesElement) {
        linesElement.innerHTML = numberingHtml;
      }

      const asterisksHtml = `&nbsp;*<br>`.repeat(linesCount - 2);
      const asterisksElement = document.getElementById('asterisks');
      if (asterisksElement) {
        asterisksElement.innerHTML = `/**<br>${asterisksHtml}&nbsp;*/<br>`;
      }
    });

    resizeObserver.observe(pElement);

    return () => resizeObserver.unobserve(pElement);
  });
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About me" />
</svelte:head>

<div class="flex">
  <div><p id="lines" class="mr-4 w-4 text-lg"></p></div>
  <div><p id="asterisks" class="w-8 text-lg"></p></div>
  <div>
    <p class="code text-lg" bind:this={pElement}>
      <br />
      Hi, I'm Linards Bulks, a full-stack developer from Riga. Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Sed, quia. Aspernatur, eaque? Perferendis
      autem fuga impedit nam mollitia minima, accusantium quod deleniti ratione perspiciatis
      quos? Eius aut dolorum amet quam? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Aspernatur corrupti vel, earum facere assumenda ab autem aliquam quisquam
      sapiente, illo dolores voluptate maiores similique itaque blanditiis commodi
      ipsum, exercitationem sit. Lorem ipsum dolor sit amet consectetur adipisicing
      elit.
    </p>
    <p class="code text-lg">
      Hi, I'm Linards Bulks, a full-stack developer from Riga. Lorem ipsum dolor
      sit amet consectetur adipisicing elit.
      <br />
    </p>
  </div>
</div>
