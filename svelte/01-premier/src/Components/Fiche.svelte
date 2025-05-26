<script>
    export let prenom, nom, age;
</script>
<div>
    <p>Nom : {prenom} {nom}</p>
    <p>Age : {age}</p>
</div>
<style>
    div {
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
        background: lightgreen;
        font-size:2rem;
    }
    p {
        margin: 5px 0;
    }
</style>