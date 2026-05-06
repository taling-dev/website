<script lang="ts">
  import { onMount } from 'svelte';
  import ReviewCard from './ReviewCard.svelte';

  const reviews = [
    {
      variant: 'white-border' as const,
      author: 'Andi Situmorang',
      role: 'CEO Kogu Space',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus metus ac ipsum volutpat sollicitudin. Maecenas a leo euismod, egestas nunc at, porta odio.',
      stars: 5,
      delay: 100
    },
    {
      variant: 'purple' as const,
      author: 'Andi Situmorang',
      role: 'CEO Kogu Space',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus metus ac ipsum volutpat sollicitudin.',
      stars: 4,
      delay: 200
    },
    {
      variant: 'dark' as const,
      author: 'Andi Situmorang',
      role: 'CEO Kogu Space',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus metus ac ipsum volutpat sollicitudin.',
      stars: 5,
      delay: 300
    },
    {
      variant: 'large' as const,
      author: 'Andi Situmorang',
      role: 'CEO Kogu Space',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus metus ac ipsum volutpat sollicitudin. Maecenas a leo euismod, egestas nunc at, porta odio.',
      stars: 4,
      delay: 400
    }
  ];

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  });
</script>

<section class="px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1728px] mx-auto">

    <!-- Row 1: Left (White Border), Right (Purple) -->
    <div class="lg:col-span-2">
      <ReviewCard {...reviews[0]} />
    </div>
    <div class="lg:col-span-1">
      <ReviewCard {...reviews[1]} />
    </div>

    <!-- Row 2: Left (Dark), Right (Large White) -->
    <div class="lg:col-span-1">
      <ReviewCard {...reviews[2]} />
    </div>
    <div class="lg:col-span-2">
      <ReviewCard {...reviews[3]} />
    </div>

  </div>
</section>
