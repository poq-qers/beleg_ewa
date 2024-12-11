const app = new Vue({
    el: '#app',
    data() {
      return {
        products: [
          { id: "1", quantity: "15", name: "PHP-Buch" },
          { id: "2", quantity: "15", name: "PHP-Kochbuch" },
          { id: "3", quantity: "15", name: "Java-Kochbuch" }
        ],
        korb: []
      };
    },
    methods: {
      order(index) {
        const product = this.products[index];
        const existingProduct = this.korb.find(item => item.id === product.id);
        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          this.korb.push({ ...product, quantity: 1 });
        }
        const warenkorb = document.getElementById("warenkorb");
        warenkorb.style.visibility = "visible";
      },
      now() {
        const today = new Date();
        const date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = "" + date + ' Uhrzeit: ' + time;
        this.timestamp = dateTime;
      },
      increaseQuantity(item) {
        item.quantity++;
      },
      decreaseQuantity(item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.korb = this.korb.filter(korbItem => korbItem.id !== item.id);
        }
      },
      toggleDarkMode() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark-mode', this.darkMode);
      },
      
    },
    mounted() {
      setInterval(this.now, 1000);
      console.log("Screen Width: " + window.innerWidth);
      console.log("Screen Height: " + window.innerHeight);
    }
  });