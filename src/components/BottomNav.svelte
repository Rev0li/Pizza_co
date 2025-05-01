<script>
  export let active = 'carte'; // 'carte' | 'commander' | 'appeler'

  const goToCarte = () => {
    active = 'carte';
    document.getElementById('carte')?.scrollIntoView({ behavior: 'smooth' });
  };
  const orderOnline = () => {
    active = 'commander';
    window.location.href = '#';
  };
  const callUs = () => {
    active = 'appeler';
    window.location.href = '#';
  };
</script>

<nav class="bottom-nav">
  <button on:click={goToCarte} class="nav-item {active === 'carte' ? 'active' : ''}">
    <!-- Icône carte -->
    <svg viewBox="0 0 24 24">
      <path d="M3 5h18M3 10h18M3 15h18M3 20h18"
            stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <span>Carte</span>
  </button>

  <button on:click={orderOnline} class="nav-item {active === 'commander' ? 'active' : ''}">
    <!-- Icône commander -->
    <svg viewBox="0 0 24 24">
      <!-- on applique `fill="currentColor"` pour qu’il suive bien la couleur -->
      <path fill="currentColor" d="M5 4h14v2H5V4zm2 4h10v2H7V8zm-2 4h14v2H5v-2zm2 4h10v2H7v-2z"/>
    </svg>
    <span>Commander</span>
  </button>

  <button on:click={callUs} class="nav-item {active === 'appeler' ? 'active' : ''}">
    <!-- Icône téléphone -->
    <svg viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H15a2 2 0 012 2v2.586a1 1 0 01-.293.707
               l-1.414 1.414a1 1 0 00-.293.707V15a2 2 0 01-2 2H9.414a1 1 0 01-.707-.293L7.293 15.293a1 1 0 00-.707-.293H4a2 2 0 01-2-2V9.414
               a1 1 0 01.293-.707L3.707 7.293A1 1 0 004 6.586V5z"/>
    </svg>
    <span>Appeler</span>
  </button>
</nav>
<style>
/* barre fixe en bas sur mobile/tablette */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0; right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  z-index: 1000;
}

/* bouton (icône + label) */
.nav-item {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  color: #888888;
  cursor: pointer;
  padding: 0;
}

.nav-item svg {
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.25rem;
  fill: none;
  stroke: currentColor;
}

/* état actif (couleur pizzeria) */
.nav-item.active {
  color: #A33323; /* adapte cette valeur à ta couleur principale */
}

/* masquer sur écrans larges */
@media (min-width: 768px) {
  .bottom-nav {
    display: none;
  }
}
</style>

