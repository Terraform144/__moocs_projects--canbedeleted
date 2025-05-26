<script>
  import Compteur, {grandTotal} from "./Components/Compteur.svelte";
  let somme = 0;
</script>
<Compteur />
<Compteur />
<Compteur />
<Compteur />
<button on:click ={() => {
  somme = grandTotal();
  alert(`Le total est ${somme}`);
}}>Afficher le total</button>
<span>{somme}</span>