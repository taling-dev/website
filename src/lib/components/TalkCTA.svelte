<script lang="ts">
  import { Phone } from 'lucide-svelte';
</script>

<section class="px-6 md:px-12 lg:px-24 pb-12 md:pb-16 lg:pb-20">
  <div class="w-full bg-gradient-to-r from-white via-[#F7EDFF] to-[#F0DBFF] rounded-[20px] p-8 md:p-12 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
    <div class="flex flex-col gap-4 max-w-2xl">
      <h2 class="text-3xl lg:text-4xl font-extrabold text-[#131B2E] leading-tight">
        Have Project in Mind? Let's Talk
      </h2>
      <p class="text-base md:text-lg lg:text-xl font-medium text-brand-text leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus metus ac ipsum volutpat sollicitudin.
      </p>
    </div>

    <a
      href="tel:+62888333222"
      class="bg-gradient-to-r from-[#BD185D] to-[#7E22CE] text-white rounded-full px-7 md:px-10 py-3.5 md:py-5 flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform shadow-lg shadow-brand-purple/20 whitespace-nowrap"
    >
      <div class="bg-white/20 p-2 rounded-full">
        <Phone class="size-5 md:size-6" />
      </div>
      <span class="text-lg md:text-xl lg:text-2xl font-extrabold leading-none">+62 888 333 222</span>
    </a>
  </div>
</section>
