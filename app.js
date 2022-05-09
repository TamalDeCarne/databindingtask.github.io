const app = Vue.createApp({
    data(){
        return {
            myName: 'Bernardo',
            myAge: 24,
            firstImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
            secondImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png'
        }
    },
    methods: {
          getRng() {
            const rng = Math.random();
            return rng;
          },
          getFutureAge(){
            return this.myAge + 5;
          },
          getRandomImage(){
              const rng = Math.random();
              if (rng < 0.50) {
                return this.firstImage;
              }
              else {
                return this.secondImage;
              }
          }
    }
});



app.mount('#assignment');