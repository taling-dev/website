<script lang="ts">
  import { page } from '$app/stores';
  import { Menu } from 'lucide-svelte';

  let menuOpen = false;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ];

  function isActive(href: string): boolean {
    const pathname = $page.url.pathname;
    if (href === '/') return pathname === '/';
    if (href.startsWith('/')) return pathname.startsWith(href);
    return false;
  }
</script>

<nav class="bg-white border-b border-gray-100 sticky top-0 z-50">
  <div class="max-w-[1728px] mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2">
      <img src="/logo.svg" alt="Taling logo" class="h-8 md:h-9 w-auto" />
    </a>

    <!-- Nav links -->
    <ul class="hidden lg:flex items-center gap-8 text-[18px] font-medium text-brand-text">
      {#each navLinks as link}
        <li>
          <a
            href={link.href}
            class="transition-colors hover:text-brand-crimson {isActive(link.href)
              ? 'text-brand-crimson font-bold border-b-2 border-brand-crimson pb-1'
              : ''}"
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>

    <!-- CTA -->
    <a
      href="/contact"
      class="hidden md:hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-[#bd185d] to-[#7e22ce] text-white text-[16px] lg:text-[18px] font-extrabold px-6 lg:px-8 py-2.5 lg:py-3 rounded-full hover:brightness-110 transition-all whitespace-nowrap"
    >
      Start a Project
    </a>

    <!-- Mobile hamburger -->
    <button
      on:click={() => (menuOpen = !menuOpen)}
      class="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
      aria-label="Open menu"
    >
      <Menu class="w-6 h-6" />
    </button>
  </div>

  <!-- Mobile menu -->
  <div
    class="{menuOpen
      ? 'flex flex-col'
      : 'hidden'} lg:hidden bg-white border-t border-gray-100 px-6 py-6 gap-5 text-lg font-medium text-brand-text"
  >
    {#each navLinks as link}
      <a
        href={link.href}
        on:click={() => (menuOpen = false)}
        class={isActive(link.href) ? 'text-brand-crimson font-semibold' : ''}
      >
        {link.label}
      </a>
    {/each}
    <a
      href="/contact"
      on:click={() => (menuOpen = false)}
      class="mt-2 inline-flex justify-center bg-gradient-to-r from-[#bd185d] to-[#7e22ce] text-white font-bold px-5 py-3 rounded-full"
    >
      Start a Project
    </a>
  </div>
</nav>
