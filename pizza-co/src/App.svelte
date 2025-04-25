<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import Hero from './components/Hero.svelte';
  import BottomNav from './components/BottomNav.svelte';
  import Image from './components/image.svelte';
  import MenuList from './components/Menu_List.svelte';

  let current = 'carte';
</script>


<main>
<Hero />

<div class="text-center px-4 py-8">
  <h1 class="text-3xl sm:text-4xl font-bold">La Minoterie</h1>
  <p class="mt-2 text-lg sm:text-xl text-gray-700">Le goût du feu de bois</p>
</div>
	<Image
	image1="public/pizza.png"
	image2="/public/commerce.jpg"
	/>
	<MenuList />

<BottomNav bind:active={current} />
</main>

<style>
  .logo {
    height: 6em;
    padding: 0em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
