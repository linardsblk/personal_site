<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import './styles.css';
</script>

<div class="app flex min-h-[100dvh] flex-col bg-background text-slate-400">
  <Header />

  <main class="my-0 box-border flex w-screen flex-1">
    <slot />
  </main>
  <Footer />
</div>
