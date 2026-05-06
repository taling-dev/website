<script lang="ts">
  import { Star } from 'lucide-svelte';

  export let variant: 'white-border' | 'purple' | 'dark' | 'large' = 'white-border';
  export let author: string;
  export let role: string;
  export let content: string;
  export let stars: number = 5;
  export let avatar: string = 'https://www.figma.com/api/mcp/asset/1632a71f-3b71-491e-93c4-3f050607ff15';
  export let delay: number = 0;

  const variants = {
    'white-border': 'bg-white border-t-4 border-brand-crimson shadow-lg',
    'purple': 'bg-[#EBEEFF] shadow-none',
    'dark': 'bg-[#0F172A] text-white shadow-lg',
    'large': 'bg-white shadow-xl md:col-span-2'
  };

  const textColors = {
    'white-border': 'text-brand-text',
    'purple': 'text-brand-text',
    'dark': 'text-gray-300',
    'large': 'text-brand-text'
  };

  const authorColors = {
    'white-border': 'text-black',
    'purple': 'text-black',
    'dark': 'text-white',
    'large': 'text-black'
  };
</script>

<div
  data-reveal
  style="transition-delay: {delay}ms;"
  class="rounded-[20px] p-6 md:p-8 flex flex-col gap-5 transition-all hover:scale-[1.02] duration-700 opacity-0 translate-y-8 ease-out {variants[variant]}"
>

  <!-- Stars -->
  <div class="flex gap-1">
    {#each Array.from({ length: 5 }) as _, i}
      <Star class="size-4 md:size-5 {i < stars ? 'text-brand-crimson fill-brand-crimson' : 'text-gray-300'}" />
    {/each}
  </div>

  <!-- Content -->
  <blockquote class="text-lg md:text-xl font-bold leading-relaxed {textColors[variant]}">
    "{content}"
  </blockquote>

  <!-- Author -->
  <div class="mt-auto flex items-center gap-4">
    <img
      src={avatar}
      alt={author}
      class="size-10 md:size-12 rounded-full object-cover bg-gray-200"
    />
    <div>
      <p class="font-bold text-sm md:text-base {authorColors[variant]}">{author}</p>
      <p class="font-bold text-xs md:text-sm opacity-80 {variant === 'dark' ? 'text-gray-400' : 'text-brand-text'}">
        {role}
      </p>
    </div>
  </div>

</div>
