<script>
  let src='https://bit.ly/3GOTubz';
  let logo='Logo Svelte';
  let taille=100;
  let url='https://svelte.dev';
  let lien='cliquez ici';
  let compteur=0;
  function incrementer() {
    compteur += 1;
  }
</script>
<p><button on:click={incrementer}>{compteur}</button></p>
<p><a href={url}>{lien}</a></p>
<img {src} alt={logo} width={taille}>