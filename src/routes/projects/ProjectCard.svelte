<script lang="ts">
  export let title: string;
  export let description: string;
  export let url: string;
  export let tags: string[] = [];
  export let sourceCodeUrl: string | null = null;

  const tagsString = `[${tags.join(', ')}]`;
</script>

<div class="flex flex-col rounded border-2 border-lines p-2">
  <a href={url} class="text-secondary-blue hover:underline">
    {title}
  </a>
  <div class="text-sm no-underline">
    {description}
  </div>
  <div class="mt-auto">
    <div class="mt-2 flex">
      {#if sourceCodeUrl}
        <div class="h-8 w-8 hover:text-accent-orange">
          <a href={sourceCodeUrl} aria-label="Source code on GitHub"
            ><svg
              class="h-6 w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
              />
            </svg>
          </a>
        </div>
      {/if}
      <div class="ml-auto text-accent-orange">
        {tagsString}
      </div>
    </div>
  </div>
</div>
