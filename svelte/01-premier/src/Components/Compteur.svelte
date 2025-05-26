<script context="module">
    let total= 0;
    export function grandTotal() {
        return total;   
    }
</script>
<script>
    let compteur = 0;
    function plusUn() {
        compteur += 1;
        total ++;
    }
</script>
<button on:click={plusUn}>{compteur}</button>