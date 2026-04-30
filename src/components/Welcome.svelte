<script>
  let count = 0;
  function increment() {
    count += 1;
  }
</script>

<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mt-10 border border-slate-200">
  <div class="shrink-0">
    <div class="h-12 w-12 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
      {count}
    </div>
  </div>
  <div>
    <div class="text-xl font-medium text-black">Astro + Svelte</div>
    <p class="text-slate-500">Tailwind is working!</p>
    <button 
      on:click={increment}
      class="mt-2 px-4 py-1 text-sm text-indigo-600 font-semibold rounded-full border border-indigo-200 hover:text-white hover:bg-indigo-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors"
    >
      Click me
    </button>
  </div>
</div>