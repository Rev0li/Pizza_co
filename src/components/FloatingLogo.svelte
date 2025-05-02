<script>
  import { onMount, onDestroy } from 'svelte';
  let scrollY = 0;
  let offsetX = 0;
  let offsetY = 0;
  let scale = 1;

  let logoEl;
  let logoHeight = 0;

  function handleScroll() {
    scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollY / maxScroll, 1);

	  const startYvh = 18;
	const startY = window.innerHeight * (startYvh / 100);

    const endY = window.innerHeight - 30 - logoHeight;

    offsetY = startY + progress * (endY - startY);
    offsetX = Math.sin(progress * Math.PI * 2) * -50;
    scale = 1 + progress;
  }

  function measureLogo() {
    if (logoEl) {
      logoHeight = logoEl.offsetHeight;
      handleScroll(); // recalcul immédiat
    }
  }

  onMount(() => {
    measureLogo();
    window.addEventListener('resize', measureLogo);
    window.addEventListener('scroll', handleScroll, { passive: true });
  });

  onDestroy(() => {
    window.removeEventListener('resize', measureLogo);
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<img
  bind:this={logoEl}
  src="/Logotype-mini-RED.png"
  alt=""
  class="floating-logo"
  style="
    transform:
      translateX(calc(-50% + {offsetX}px))
      translateY({offsetY}px)
      scale({scale});
  "
/>

<style>
  .floating-logo {
    position: fixed;
    top: 0; /* on gère nous-mêmes l’offsetY */
    left: 50%;
    width: 300px;
    opacity: 0.8;
    pointer-events: none;
    will-change: transform;
    z-index: -1;
    transform-origin: center;
  }
</style>

