<script>
  import Button from './Button.svelte';
</script>

<section
  class="hero">
	<div class="ombre">

  <div class="center_button">
    <Button text="Commander" />
  </div>
  </div>
</section>

<style>
.ombre {
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.5rem;
}
.center_button {
	z-index: 10;
	display: flex;
	height: 30vh;
	align-items: center;
	justify-content: center;
}
.hero {
  width: 100vw;
  height: 30vh;
  background-image: url('/public/pizzaria.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}
</style>
