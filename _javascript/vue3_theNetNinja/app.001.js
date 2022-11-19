// https://www.youtube.com/watch?v=F7PLPJqVotk&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=2

/*
const app = Vue.createApp({
    // data, function
    template : '<h2>I am the template</h2>'
}); */

const app = Vue.createApp({
    data() {
        return {
            showBooks : true,
            title : 'The empire',
            author : 'the two',
            age : 45
        }
    },
    methods: {
        changeTitle(str) {
            //this.title = "new title from methods"
            this.title = str
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
});

app.mount('#app');