const app = Vue.createApp({
    data() {
        return {
            goals: [],
            enteredGoalValue: "",
            paragraphIsVisible: true
        };
    },
    computed: {
        buttonCaption() {
            return this.paragraphIsVisible ? 'Hide List' : 'Show List';
        },
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue)
        },
        toggleParagraphVisibility() {
            this.paragraphIsVisible = !this.paragraphIsVisible
        },  
    },
});

app.mount('#assignment');