const app = Vue.createApp({
  data() {
    return {
      user1: false,
      user2: false,
      show: true,
      hide: false,
      inputBackgroundColor: "",
    };
  },
  computed: {
    classSelected() {
      return { user1: this.user1, user2: this.user2 };
    },
    visibleClass() {
      return { visible: this.show, hidden: this.hide };
    },
  },
  methods: {
    getUser(event) {
      const input = event.target.value;
      if (input === "user1") {
        this.user1 = true;
        this.user2 = false;
      } else if (input === "user2") {
        this.user2 = true;
        this.user1 = false;
      }
    },
    showHide() {
      this.show = !this.show;
      this.hide = !this.hide;
    },
  },
});

app.mount("#assignment");
