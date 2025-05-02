<script>
  export let pizzas = [
    {
		  icon: "/icone.png",
      name: "Pizza Guigaz",
      desc: "Tomate, basilic, Burrata Pugliese, huile d’ail et poivre",
      price: "13 €"
    },
      {
		  icon: "/icone.png",
      name: "Pizza Truffée",
      desc: "Crème de truffes, mozzarella, jambon truffé, ciboulette, truffe de saison",
      price: "11 €"
    },   {
		  icon: "/icone.png",
      name: "Reine",
      desc: "Sauce tomate, Fior di Latte, champignons bruns, jambon aux herbes et huile de cèpes.",
      price: "11 €"
    },   {
      icon: "/icone.png",
      name: "Pizza Organic",
      desc: "Crème maison, Fior di Latte, oignons marinés, persil grillé, Burratina, mâche, olives, taggiasche et huile de livèche.",
      price: "12 €"
    },
    {
      icon: "/icone.png",
      name: "Pizza du moment",
      desc: "Crème maison, mozzarella Fior di latte, huile d’oignon cébette Après cuisson: roquette, mortadelle à la pistache, pistache concassée",
      price: "17 €"
    }
  ];
</script>

<section class="menu">
  <h2>Nos spécialités</h2>

  <div class="pizza-list">
    {#each pizzas as p}
      <div class="pizza-item">
		<!--       <div class="pizza-icon">          -->
		<!-- 	<img src={p.icon} alt={p.name + " icon"} /> -->
		<!-- </div> -->
		<div class="pizza-text">
			<div class="pizza-info">
			<div class="pizza-name">{p.name}</div>
    	    <div class="pizza-price">{p.price}</div>
        	</div>
			<div class="pizza-desc">{p.desc}</div>
        </div>  
      </div>
    {/each}

    <div class="pizza-item more">
      <span>…</span>
    </div>
  </div>
</section>

<style>
  .menu {
    padding: 0.5rem;
    background: var(--color-greyM);
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
    /* align-items: center; */
    justify-content: space-around;
    background: white;
    border-radius: 1rem;
    padding: 0.65rem 0.8rem;
    /* Ombre légère */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .pizza-icon img {
	  max-width: 45px;
    margin-right: 0.5rem;
  }
  .pizza-icon  {
  
    display: flex;
 	align-items:center;
  }

.pizza-text {
	  display:flex;
	  flex-direction:column;
	  width: 100%
  }
  .pizza-info {
    display: flex;
  	justify-content: flex-start;
	  
  }
  .pizza-name {
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--color-redM);
  }
  .pizza-desc {
	  padding:0;
    font-size: 0.875rem;
    color: var(--color-blackM);
  }

  .pizza-price {
	  display:flex;
	  flex-direction:row;
	  color:var(--color-goldM);
	  justify-content:flex-end;
    font-size: 1.1rem;
    font-weight: 600;
	  flex-grow:1;
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

