Vue.createApp({
    data() {
        return {
            goals:[],
            enteredValue:''
        };
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue='';
        }
    }
}).mount('#app');










/* //Get the elements that we need
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');


function addGoal(){
//Get the input value from the element    
const enteredValue = inputEl.value;
//Create an element
const listItemEl = document.createElement('li');
//Set the element content
listItemEl.textContent = enteredValue;
//Put the element inside the existing one
listEl.appendChild(listItemEl);
//Turn the input value to nothing
inputEl.value='';
}

//Click the button will initiate the function
buttonEl.addEventListener('click', addGoal); */

