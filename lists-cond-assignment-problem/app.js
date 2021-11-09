const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      list: [],
      isListVisible:true
    };
  },
  methods: {
    addValue() {
      this.list.push(this.enteredValue);
    },
    toggleList(){
      this.isListVisible = !this.isListVisible;
    }
  },
});

app.mount("#assignment");
