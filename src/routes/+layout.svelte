<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="bg-brand-bg font-sans overflow-x-hidden min-h-screen flex flex-col">
  <Navbar />
  <main class="flex-1 max-w-[1728px] mx-auto w-full flex flex-col">
    <slot />
  </main>
  <Footer />
</div>
