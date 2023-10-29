<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import './styles.css';
</script>

<div class="app flex min-h-screen flex-col bg-background text-slate-500">
  <Header />

  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
