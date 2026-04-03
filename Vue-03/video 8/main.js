const App = Vue.createApp({
    data() {
        return {
            cart:1,
            product: 'Socks',
            brand: 'Vue Mastery',
            StudentName:['Le Nguyen Huu Phuoc -GCS230180'],
            selectedVariant: 0,
            image: `./assets/images/socks_green.jpg`,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id: 2234, color: 'green', image:`./assets/images/socks_green.jpg`, quantity: 50},
                {id: 2235, color: 'blue', image:`./assets/images/socks_blue.jpg`, quantity: 0}
            ],
            
            
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },

        updateVariant(index) {
            this.selectedVariant = index
            this.image = this.variants[index].image
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
        ,
        instock() {
            return this.variants[this.selectedVariant].quantity > 0
        },
        saleMessage() {
            return this.onSale ? this.brand + ' ' + this.product + ' is on sale' : ''
        }
    }
    })

/*Lê Nguyễn Hữu Phước
 Video 8*/