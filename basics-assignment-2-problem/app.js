const app = Vue.createApp({
  data() {
    return {
      input: "",
      output: "",
    };
  },
  methods: {
    showAlert() {
      alert("This is awesome!");
    },
    setInput(event) {
      this.input = event.target.value;
    },
    setOutput(event) {
      this.output = event.target.value;
    },
  },
});
app.mount("#assignment");
