<script>
  export let text = "Commander";
  export let onClick = () => {};
</script>

<button
  on:click={onClick}
  class="template_1"
>
  {text}
</button>
<style>
.template_1 {
	background-color: var(--color-redM);
	color: white;
	border-radius: 8px;
    border: 2px solid white;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 1000;
    font-family: inherit;
}
</style>
