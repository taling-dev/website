<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';
</script>

<section class="px-6 md:px-12 lg:px-24 pb-12 md:pb-16 lg:pb-20">
  <div
    class="rounded-2xl px-8 md:px-12 py-10 md:py-12 lg:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10"
    style="background: linear-gradient(117deg, rgba(255,255,255,1) 0%, rgba(247,237,255,1) 50%, rgba(240,219,255,1) 100%);"
  >
    <div class="flex flex-col gap-3 max-w-2xl">
      <h2 class="text-3xl lg:text-4xl font-extrabold text-[#131B2E] leading-tight">
        Check our Portfolio
      </h2>
      <p class="text-base md:text-lg lg:text-xl font-medium text-brand-text leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus
        metus ac ipsum volutpat sollicitudin.
      </p>
    </div>

    <a
      href="/portfolio"
      class="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#bd185d] to-[#7e22ce] text-white text-base md:text-lg font-extrabold tracking-[0.02em] px-7 py-3.5 rounded-full hover:brightness-110 hover:scale-[1.03] transition-all duration-200 whitespace-nowrap group"
    >
      Explore More
      <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
</section>
