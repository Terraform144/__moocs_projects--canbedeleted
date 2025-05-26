<script>
let image = 'https://bit.ly/3GOTubz';
function change() {
  image = 'https://bit.ly/3GOTubz';
}
let prenom = 'Jean';
</script>
<img src={image} on:click={change}>
<hr>
<label for="prenom">quel est votre prénom ?</label>
<input type="text" id="prenom" bind:value={prenom}>
<h2>Bonjour {prenom}</h2>
  