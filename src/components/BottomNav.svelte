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
		<div class="icons">
			<a href="#" aria-label="Appeler">
		<i class="fa-solid fa-motorcycle"></i>	</a>
		</div>
				<span>Livraison</span>
	</button>

	<button on:click={orderOnline} class="nav-item {active === 'commander' ? 'active' : ''}">
		<div class="icons">
			<a href="#" aria-label="Appeler">
	<i class="fa-solid fa-shoe-prints"></i>		</a>
				<span>Commande</span>
		</div>
	</button>

	<button on:click={callUs} class="nav-item {active === 'appeler' ? 'active' : ''}">
		<div class="icons">
			<a href="#" aria-label="Appeler">
				<i class="fa-solid fa-phone-flip"></i>
			</a>
		</div>
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
	box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.27);
	padding: 0.5rem 0 1rem 0;
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
.icons {
	display: flex;
	font-size: 1.5rem;
	flex-direction:column;
	justify-content: space-around;
	/* gap: 1rem; */
	margin-top: 0.5rem;
}
span {
	font-size: 1rem;
}
.icons a {
	text-decoration: none;
	color: var(--color-redM);
}

/* masquer sur écrans larges */
@media (min-width: 768px) {
	.bottom-nav {
		display: none;
	}
}
</style>

