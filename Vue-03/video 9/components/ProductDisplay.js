App.component('product-display', {
    props:{
        premium:{
            type: Boolean,
            required: true
        }
    },
        template: 
         /*html*/
        `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
            <img 
              v-bind:src="image" 
              :class="{ 'out-of-stock-img': !instock }">
            </div>
        
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="onSale">{{ saleMessage }}</p>
          <p v-if="instock">In Stock</p>
          <p v-else>Out of Stock</p>

          <p>Shipping {{shipping}}
          </p>

          <product-details :details="details"></product-details>
          
          <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }">
          
          </div>
          <button 
          class="button"
          :class="{ disabledButton: !instock }"
          :disabled="!instock" 
          @click="addToCart">Add to Cart
          </button>
                </div>
            </div>
        </div>`,
  
data() {
        return {
            
            product: 'Socks',
            brand: 'Vue Mastery',
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
            this.$emit('add-to-cart')
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
        },
        shipping () {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})
/*Lê Nguyễn Hữu Phước
 Video 9*/