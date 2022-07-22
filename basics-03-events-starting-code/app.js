const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: ""
    };
  },
  methods: {
    add(num) {
      this.counter=this.counter +num;
    },
    remove(num) {
      this.counter=this.counter-num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('Submitted');
    } 
  }
});

app.mount('#events');
