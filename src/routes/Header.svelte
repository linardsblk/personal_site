<script>
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
  ];
</script>

<header>
  <nav class="w-full h-10 border-b-2 border-lines">
    <ul class="flex flex-row h-full">
      {#each navItems as nav}
        <li
          aria-current={$page.url.pathname === nav.url ? 'page' : undefined}
          class={clsx('border-r-2 border-lines px-2 ', {
            'border-b-accent-orange border-b-4 border-separate':
              $page.url.pathname === nav.url,
          })}
        >
          <a href={nav.url}>{nav.name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
