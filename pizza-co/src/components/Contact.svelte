<!-- ContactInfo.svelte -->
<div class="contact">
  <div class="section social">
    <div class="icons">
      <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
      <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
      <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
  <div class="section">
    <h3>TROUVEZ-NOUS</h3>
    <p>123 Rue de la Pizzeria<br>75000 Paris</p>
  </div>
  <div class="section">
    <h3>HORAIRES</h3>
    <p>Du lundi au samedi<br>12:00-14:30, 18:30-22:30</p>
  </div>
</div>

<style>
  .contact {
    display: flex;
	flex-direction:column;
    justify-content: space-between;
    background-color: #FDF7EC;
    padding: 0.5rem;
	padding-bottom:1.5rem;
    font-family: Arial, sans-serif;
    color: #000;
  }

  .section h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .section p {
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
  }

  .social .icons {
    display: flex;
	justify-content: space-around;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .social .icons a {
    font-size: 1.5rem;
    text-decoration: none;
    color: inherit;
  }
</style>

