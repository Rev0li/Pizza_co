<script>
  export let pizzas = [
    {
		  icon: "/icone.png",
      name: "Reine",
      desc: "Tomate, mozzarella, jambon, champignons, huile verte, olive, moutarde",
      price: "11 €"
    },
      {
		  icon: "/icone.png",
      name: "Reine",
      desc: "Tomate, mozzarella, jambon, champignons, huile verte, olive, moutarde",
      price: "11 €"
    },   {
		  icon: "/icone.png",
      name: "Reine",
      desc: "Tomate, mozzarella, jambon, champignons, huile verte, olive, moutarde",
      price: "11 €"
    },   {
      icon: "/icone.png",
      name: "Végétarienne",
      desc: "Mozzarella, légumes saisonniers",
      price: "12 €"
    },
    {
      icon: "/icone.png",
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
        <div class="pizza-icon">         
			<img src={p.icon} alt={p.name + " icon"} />
		</div>
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
    /* align-items: center; */
    justify-content: space-around;
    background: white;
    border-radius: 1rem;
    padding: 0.65rem 0.5rem;
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
  }
  .pizza-info {
    display: flex;
  	justify-content: flex-start;
	  
  }
  .pizza-name {
    font-weight: 600;
    font-size: 1.1rem;
  }
  .pizza-desc {
	  padding:0;
    font-size: 0.875rem;
    color: #555;
  }

  .pizza-price {
	  display:flex;
	  flex-direction:row;
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

