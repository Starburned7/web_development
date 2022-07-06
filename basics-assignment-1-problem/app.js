const app = Vue.createApp({
    data() {
        return {
            name: 'Zarema',
            age: 30,
            picLink : "https://cdn.pixabay.com/photo/2017/09/25/11/55/cyberspace-2784907_1280.jpg"
            
        };
    },
    methods: {
        calculateAge() {
            return this.age +5;
        },
        calculateRandom() {
            return Math.random();
        }
        
    }

    }
);

app.mount('#assignment');


// ageIn5Years: age+5,
//             favouriteNumber: Math.random(),
//             picLink: 'https://vuejs.org/'