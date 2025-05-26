<script>
  let bool= true;
  function toogle(){
    bool = !bool;
  }
</script>
<style>
  .rouge {color: red;}
  .noir {color: black;}
</style>
<button on:click={toogle}>Changer la couleur</button>
<span class={bool ? 'rouge' : 'noir'}>Texte en couleur</span>

<button on:click={toogle}>Changer la couleur</button>
<p class:rouge={bool}>text simple</p>