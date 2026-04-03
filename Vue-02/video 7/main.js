const app = Vue.createApp({
    data() {
        return {
            cart:1,
            product: 'Socks',
            StudentName:['Le Nguyen Huu Phuoc -GCS230180'],
            image:`./assets/images/socks_green.jpg`,
            instock:false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id: 2234, color: 'green', image:`./assets/images/socks_green.jpg`},
                {id: 2235, color: 'blue', image:`./assets/images/socks_blue.jpg`}
            ],
            
            
        }
    },
        methods: {
            addToCart(){
                this.cart += 1},
            
            removeFromCart(){
                if( this.cart >0){
                this.cart -= 1
                }
            },

            updateImage(variantImage){
                this.image = variantImage
        
            
        }
        }
    
    })

