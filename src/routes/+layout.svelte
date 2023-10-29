<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import './styles.css';
</script>

<div class="app flex min-h-screen flex-col bg-background text-slate-500">
  <Header />

  <main class="mx-auto my-0 box-border flex w-full max-w-5xl flex-1 p-4">
    <slot />
  </main>
  <Footer />
</div>
