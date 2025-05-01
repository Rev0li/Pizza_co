<script>
  export let title = "À PROPOS";
  export let text = "Une pizzeria artisanale avec des pizzas faites maison, des ingrédients frais et locaux, et une cuisson au feu de bois.";
  export let image1 = "/pizza.png";
  export let image2 = "/commerce.jpg";
</script>

<section class="about-section">
  <!-- <h2>{title}</h2> -->
  <!-- <p>{text}</p> -->

  <div class="images-wrapper">
    <img src={image1} alt="Pizza artisanale Minoterie" class="img back" />
    <img src={image2} alt="Devanture Minoterie"      class="img front"  />
  </div>
</section>

<style>
  .about-section {

    padding: 1rem;
	  height: 300px;
    text-align: center;
    background: #FFF9F5;
    color: #3B2714;
  }

  .about-section h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .about-section p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }

  .images-wrapper {
	  	  display: flex;
	  flex-direction:column;
	  justify-content:space-between;
    width: 100%;
    max-width: 300px;       /* ajuste selon ta maquette */
    height: auto;
  }

  .images-wrapper .img {
    display: block;
    width: 60%;
    border-radius: 1rem;
    object-fit: cover;
  }

  /* image du dessous */
  .images-wrapper .back {
    position: absolute;
    left: 70%;
	  width:150px;
    transform: translateX(-50%);
    z-index: 1;
  }

  /* image du dessus */
  .images-wrapper .front {
  box-shadow: 4px -4px 12px rgba(0, 0, 0, 0.7);
    position: relative;
	  width:170px;
	  height: 200px;
	  margin-top:100px;
    z-index: 2;
  }
</style>

