<script lang="ts">
  import ReviewsHero from '$lib/components/ReviewsHero.svelte';
  import ReviewGrid from '$lib/components/ReviewGrid.svelte';
  import ClientMarquee from '$lib/components/ClientMarquee.svelte';
  import ModernizeCTA from '$lib/components/ModernizeCTA.svelte';
</script>

<svelte:head>
  <title>Reviews — Taling Dev</title>
  <meta name="description" content="See what our clients say about Taling Dev. We deliver high-impact digital solutions that drive business success." />
</svelte:head>

<ReviewsHero />
<ReviewGrid />
<ClientMarquee />
<ModernizeCTA />
