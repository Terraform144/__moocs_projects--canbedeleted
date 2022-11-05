import axios from 'axios';

function generateJoke() {

    const config = {
        headers:{
            Accept: 'application/json'
        }
    }

    axios.get('https://icanhazdadjoke.com', config).then(res => {
        document.getElementById('joke').innerHTML = res.data.joke
    })
    /* to del
    return "Je ne crois pas les marches elles sont tjs au dessus de l'autre ... joke 1";*/
}

export default generateJoke