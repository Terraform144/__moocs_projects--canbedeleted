<script>
  import Fiche from './Components/Fiche.svelte';
  let data = {prenom : '', nom : '', age : ''};

</script>

<input type="text" placeholder="prenom" id="prenom" bind:value={data.prenom}>
<input type="text" placeholder="nom" id="nom" bind:value={data.nom}>
<input type="text" placeholder="age" id="age" bind:value={data.age}>
<Fiche {...data} />
<Fiche prenom={data.prenom} nom={data.nom} age={data.age} />