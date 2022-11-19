const app = Vue.createApp({
    data() {
        return {
            firstName:'John',
            lastName:'Doe',
            email:'male',
            picture: ''
        }
    }, methods:{
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const {results} = await res.json();

            this.picture = results[0].picture.large;
//console.log(results);
        }
    }
});

app.mount('#app');