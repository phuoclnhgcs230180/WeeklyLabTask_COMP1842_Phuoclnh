const App = Vue.createApp({
    data () {
        return {
            StudentName:['Le Nguyen Huu Phuoc -GCS230180'],
            cart:0,
            premium: true
        }
    },
    methods:{
        updateCart(id){
            this.cart += 1
            console.log('Added product with id:', id)
        }
    }
});

