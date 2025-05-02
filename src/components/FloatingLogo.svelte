<!-- FloatingLogo.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';

  let scrollY = 0;
  let offsetX = 0;
  let offsetY = 0;
  let scale   = 1;

  function handleScroll() {
    scrollY = window.scrollY;
    // Hauteur totale scrollable
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    // progress 0 → 1
    const progress = Math.min(scrollY / maxScroll, 1);

    // 1) vertical : de -50px → centre de l'écran
    //    top initial = -50, on veut arriver à window.innerHeight/2
    offsetY = progress * (window.innerHeight / 2.5 + 50);

    // 2) horizontal non-linéaire (sinus) si tu veux garder un balancement
    offsetX = Math.sin(progress * Math.PI * 2) * -50;

    // 3) scale : de 1 → 2 (double taille)
    scale = 1 + progress;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // initial
    handleScroll();
  });
  onDestroy(() => window.removeEventListener('scroll', handleScroll));
</script>

<img
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
    top: 170px;             /* point de départ dans le haut de l'écran */
    left: 50%;
    width: 300px;           /* taille de base */
    opacity: 0.8;
    pointer-events: none;
    will-change: transform;
    z-index: -1;
    transform-origin: center;
  }
</style>

