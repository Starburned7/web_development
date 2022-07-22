const app = Vue.createApp({
    data() {
        return {
          inputValue: "",
          confirmedInputValue:""
        };
      },
    methods: {
      showAlert() {
        alert('Hello');
      },
      setInputValue(event) {
        this.inputValue = event.target.value; 
    },
    setconfirmedInputValue() {
        this.confirmedInputValue = this.inputValue;
  }}});
  
  app.mount('#assignment');
  