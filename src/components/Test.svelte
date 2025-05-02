<!-- PizzaItem.svelte -->
<script>
  export let name;
  export let desc;
  export let price;
  // URL de l’image à afficher en « peek » dans le coin
</script>

<div class="pizza-item">
  <div class="content">
    <div class="info">
      <div class="name">{name}</div>
      <div class="price">{price}</div>
    </div>
    <div class="desc">{desc}</div>
  </div>
</div>

<style>
  .pizza-item {
    position: relative;
    z-index: 1;               /* <-- assure que la carte soit au-dessus */
    background: #fff;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    overflow: visible;        /* <-- laisse le coin dépasser */
    margin-bottom: 1rem;
    max-width: 360px;
  }

  .content {
    position: relative;
    z-index: 2;               /* <-- contenu devant le flap */
  }

  .info {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .name  { color: #A33323; }
  .price { color: #D4A373; }
  .desc  { color: #3B2714; font-size: 0.9rem; }

  /* le pseudo-élément pour le coin */
  .pizza-item::after {
    content: '';
    position: absolute;
    bottom: -20px;           /* ajuste pour coller juste sous la carte */
    right: -20px;            /* ajuste pour coller à droite */
    width: 120px;
    height: 120px;
    background-image: url("/pizza.png");
    background-size: cover;
    background-position: center;
    transform: rotate(15deg); /* légèrement pivoté */
    border-radius: 0.5rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    z-index: 0;               /* <-- derrière la carte */
  }
</style>

