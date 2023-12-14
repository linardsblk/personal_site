<script lang="ts">
  export let title: string;
  export let description: string;
  export let url: string;
  export let tags: string[] = [];
</script>

<a href={url} class="group flex flex-col rounded border-2 border-lines p-2">
  <div class="text-secondary-blue group-hover:underline">
    {title}
  </div>
  <div class="text-sm no-underline">
    {description}
  </div>
  <div class="mt-auto flex justify-between">
    <div></div>
    <div class="flex justify-end gap-4 text-accent-orange">
      {#each tags as tag}
        <div>{tag}</div>
      {/each}
    </div>
  </div>
</a>
