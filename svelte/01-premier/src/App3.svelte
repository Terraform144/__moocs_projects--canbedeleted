<script>
  import Fiche from './Components/Fiche.svelte';
  let prenom = '';
  let nom = '';
  let age = '';
</script>

<input type="text" placeholder="prenom" id="prenom" bind:value={prenom}>
<input type="text" placeholder="nom" id="nom" bind:value={nom}>
<input type="text" placeholder="age" id="age" bind:value={age}>
<Fiche {prenom} {nom} {age} />
  