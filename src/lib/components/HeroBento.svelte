<script lang="ts">
  import { ArrowRight, Users, ChevronRight, Code } from 'lucide-svelte';

  const capabilities = [
    { num: '01', label: 'Custom Website' },
    { num: '02', label: 'Web Apps' },
    { num: '03', label: 'Business Dashboard' },
  ];
</script>

<section class="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-3 px-6 md:px-12 lg:px-24 pt-12 md:pt-16 lg:pt-20 pb-1.5 flex-1">

  <!-- Left — big gradient hero card -->
  <div class="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#F4B8CB] to-[#BD185D]/60 flex flex-col justify-end p-6 md:p-10 lg:p-12 min-h-[350px] md:min-h-[400px] lg:min-h-0">
    <div class="relative z-10 max-w-2xl">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 lg:mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </h1>
      <a
        href="/contact"
        class="inline-flex items-center gap-3 bg-gradient-to-r from-[#bd185d] to-[#7e22ce] text-white text-base md:text-lg lg:text-xl font-extrabold px-6 lg:px-8 py-3 lg:py-3.5 rounded-full hover:brightness-110 transition-all group"
      >
        Explore Work
        <ArrowRight class="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2.5} />
      </a>
    </div>
  </div>

  <!-- Right column — two stacked cards -->
  <div class="flex flex-col gap-3">

    <!-- About Us card -->
    <div class="bg-brand-light rounded-2xl p-6 lg:p-8 flex flex-col gap-3 lg:gap-4 flex-1 relative group cursor-pointer">
      <div class="flex items-center gap-3 lg:gap-4">
        <div class="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-[rgba(126,34,206,0.1)] flex items-center justify-center">
          <Users class="w-5 h-5 lg:w-6 lg:h-6 text-brand-purple" />
        </div>
        <h3 class="font-extrabold text-gray-900 text-xl lg:text-2xl">About Us</h3>
      </div>
      <p class="text-brand-text text-base lg:text-lg font-medium leading-relaxed pr-8 lg:pr-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus metus ac ipsum volutpat sollicitudin.
      </p>
      <div class="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2">
        <ChevronRight class="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-brand-purple transition-colors" />
      </div>
    </div>

    <!-- Capabilities card -->
    <div class="bg-white rounded-2xl p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 flex-1 shadow-[0px_0px_18px_-1px_rgba(0,0,0,0.08)]">
      <div class="flex items-center justify-between">
        <h3 class="font-extrabold text-gray-900 text-xl lg:text-2xl">Capabilities</h3>
        <Code class="text-brand-crimson w-5 h-5 lg:w-6 lg:h-6" strokeWidth={3} />
      </div>

      <ul class="flex flex-col gap-0">
        {#each capabilities as { num, label }, index}
          <li class="flex items-center gap-3 lg:gap-4 py-2 lg:py-2.5 group cursor-pointer">
            <span class="text-sm lg:text-base font-semibold text-brand-crimson">{num}</span>
            <span class="text-base lg:text-lg text-brand-text font-bold group-hover:text-brand-purple transition-colors">{label}</span>
          </li>
          {#if index < 2}
            <hr class="border-gray-100" />
          {/if}
        {/each}
      </ul>
    </div>

  </div>
</section>
