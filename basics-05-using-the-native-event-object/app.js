const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      completename: '',
      lastName: ''
    };
  },
  watch : {
    name(value){
      if (value === "") {
        this.completename = "";
      } else {
      this.completename = value + " " + "Smir"
    }
  },
    lastName(value) {
      if (value === "") {
        this.completename = "";
      } else {
      this.completename = this.name + " " + value
    }
  },
  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Smith"
    }

  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Smith"
    },
    resetInput() {
      this.name = "";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
}});

app.mount('#events');
