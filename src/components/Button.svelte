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
	background-color: #bb251c;
	color: #e1e1e1;
	border-radius: 8px;
    border: 2px solid #e1e1e1;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 1000;
    font-family: inherit;
}
</style>
