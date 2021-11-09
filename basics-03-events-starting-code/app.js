const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      confirmedName:''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    addName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(event){
      alert('Submitted');
    },
    confirmName(){
      this.confirmedName = this.name;
    }
  },
});

app.mount("#events");
