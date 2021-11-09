const app = Vue.createApp({
data(){
    return {
        result: 0,
    };
},
watch: {
    result(){
        const that = this;
        setTimeout(function(){
            that.result = 0;
        }, 5000);
    }
},
computed:{
    checkResult(){
        if(this.result<37){
            return 'Not there yet';
        }else if(this.result>37){
            return 'Too much!';
        }
    }
},
methods:{
    add5(){
        this.result+=5;
    },
    add1(){
        this.result++;
    }
}
});

app.mount("#assignment");