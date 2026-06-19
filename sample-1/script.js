Vue.createApp({
  data() {
    return {
      imageUrl: "siba.jpg"
    };
  },

  methods: {
    changeImage() {
      this.imageUrl = "siba2.avif";
    }
  }
}).mount("#app");