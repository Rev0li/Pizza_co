<script>
  export let pizzas = [
    {
      icon: "🍕",
      name: "Reine",
      desc: "Tomate, mozzarella, jambon, champignons",
      price: "11 €"
    },
    {
      icon: "🍃",
      name: "Végétarienne",
      desc: "Mozzarella, légumes saisonniers",
      price: "12 €"
    },
    {
      icon: "🌶️",
      name: "Diavola",
      desc: "Tomate, mozzarella, chorizo épicé",
      price: "12 €"
    }
  ];
</script>

<section class="menu">
  <h2>Nos spécialités</h2>

  <div class="pizza-list">
    {#each pizzas as p}
      <div class="pizza-item">
        <div class="pizza-icon">{p.icon}</div>
        <div class="pizza-info">
          <div class="pizza-name">{p.name}</div>
          <div class="pizza-desc">{p.desc}</div>
        </div>
        <div class="pizza-price">{p.price}</div>
      </div>
    {/each}

    <div class="pizza-item more">
      <span>…</span>
    </div>
  </div>
</section>

<style>
  .menu {
    padding: 1rem;
    background: #FFF9F5;
    color: #3B2714;
  }
  .menu h2 {
    text-align: center;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .pizza-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .pizza-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    border-radius: 1rem;
    padding: 0.75rem 1rem;
    /* Ombre légère */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .pizza-icon {
    font-size: 1.5rem;
    margin-right: 0.75rem;
  }

  .pizza-info {
    flex: 1;
  }
  .pizza-name {
    font-weight: 600;
    font-size: 1.1rem;
  }
  .pizza-desc {
    font-size: 0.875rem;
    color: #555;
    margin-top: 0.25rem;
  }

  .pizza-price {
    font-size: 1.1rem;
    font-weight: 600;
    margin-left: 1rem;
    white-space: nowrap;
  }

  /* Bloc “...” centré */
  .pizza-item.more {
    justify-content: center;
    font-size: 1.5rem;
    color: #aaa;
    background: white;
  }
</style>

