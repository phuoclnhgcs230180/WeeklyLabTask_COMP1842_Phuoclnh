const app = Vue.createApp({
    data() {
        return {
            cart:1,
            StudentName:['Le Nguyen Huu Phuoc -GCS230180'],
            product: 'Socks',
            image:`./assets/images/socks_green.jpg`,
            instock:true,
            details:['50% cotton','30% wool','20% polyester'],
            sizes:['Le Nguyen Huu Phuoc -GCS230180'],
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
        /*Lê Nguyễn Hữu Phước
        Video 6*/
            
        }
        }
    
    })

