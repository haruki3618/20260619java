Vue.createApp({
  data() {
    return {
      name: "ワールドカップボール",
      price: 9800,
      description: "ワールドカップで使用されてるボール。",
      image: "soccer.jpg",
      url: "https://example.com/",
      stock: 5,
      priceColor: "#0fb06a"
    };
  }
}).mount("#app");