<script lang="ts">
  export let title: string;
  export let description: string;
  export let url: string;
  export let tags: string[] = [];
  export let sourceCodeUrl: string | null = null;

  const tagsString = `[${tags.join(', ')}]`;
</script>

<div class="flex flex-col rounded border-2 border-lines p-2">
  <a href={url} class="flex items-center text-secondary-blue hover:underline">
    {title}
    <svg
      class="mx-2 h-4 w-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
      />
    </svg>
  </a>
  <div class="text-sm no-underline">
    {description}
  </div>
  <div class="mt-auto">
    <div class="mt-2 flex">
      {#if sourceCodeUrl}
        <div class="mt-auto h-8 w-8 hover:text-accent-orange">
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
      <div class="ml-auto text-end text-accent-orange">
        {tagsString}
      </div>
    </div>
  </div>
</div>
