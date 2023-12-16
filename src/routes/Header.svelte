<script lang="ts">
  import { page } from '$app/stores';
  import clsx from 'clsx';

  const navItems = [
    {
      name: 'hello.js',
      url: '/',
    },
    {
      name: 'about.md',
      url: '/about',
    },
    {
      name: 'projects.tsx',
      url: '/projects',
    },
  ] as const;

  let navOpen = false;

  function toggleNavOpen() {
    navOpen = !navOpen;
  }

  $: isCurrentPage = (url: string) => {
    // normalize by removing trailing shash
    url = url.replace(/\/$/, '');
    const pathname = $page.url.pathname.replace(/\/$/, '');

    return url === pathname;
  };
</script>

<header class="sticky top-0 bg-background">
  <nav class="min-h-10 w-full border-b-2 border-lines">
    <!-- Desktop layout navigation -->
    <ul class="hidden h-full flex-row sm:flex">
      {#each navItems as nav}
        <li
          aria-current={isCurrentPage(nav.url) ? 'page' : undefined}
          class={clsx('border-r-2 border-lines px-2 ', {
            'border-separate border-b-4 border-b-accent-orange': isCurrentPage(
              nav.url,
            ),
          })}
        >
          <a href={nav.url}>{nav.name}</a>
        </li>
      {/each}
    </ul>
    <!-- Mobile layout navigation -->
    <div class="flex sm:hidden">
      <button class="m-0.5 mr-3 h-10 w-10 self-start" aria-label="Toggle Navigation" on:click={toggleNavOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-10 w-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <ul class="flex h-full flex-1 flex-col self-center">
        {#each navItems as nav}
          <li
            aria-current={isCurrentPage(nav.url) ? 'page' : undefined}
            class={clsx('text-lg', {
              'border-b-2 border-lines px-2 ': navOpen,
              'border-separate border-b-4 border-b-accent-orange':
                isCurrentPage(nav.url) && navOpen,
              hidden: !isCurrentPage(nav.url) && !navOpen,
              'last:border-0': !isCurrentPage(nav.url),
            })}
          >
            <a on:click={toggleNavOpen} href={nav.url}>{nav.name}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</header>
