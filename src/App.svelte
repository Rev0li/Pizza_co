<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Contact from './components/Contact.svelte'
  import Hero from './components/Hero.svelte';
  import BottomNav from './components/BottomNav.svelte';
  import Image from './components/image.svelte';
  import MenuList from './components/Menu_List.svelte';
  import About from './components/About.svelte';
  import FloatLogo from './components/FloatingLogo.svelte';
  import Test from './components/Test.svelte';

  let current = 'carte';
</script>


<main>
	<FloatLogo/>
	<Hero />
	<About/>
	<Image
		image1="/pizza.png"
		image2="/commerce.jpg"
	/>
	<MenuList />
	<!-- <Test/> -->
	<Contact/>
	<BottomNav bind:active={current} />
</main>

<style>
main {
	padding-bottom: 3.5rem;
}
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
