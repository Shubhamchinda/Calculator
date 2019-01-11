const logic={
    inputStr: "",
    result: "",
    setString(str){
        this.inputStr += str;
    },
    equalTo(){
        this.result = eval(this.inputStr);
        this.inputStr = this.result;
    },
    operator(o){
        switch(o){
            case "equal":{
                this.equalTo();
                break;
            }
            case 'clearEntry':{
                this.clearEntry();
                break;
            }
            case 'clear':{
                this.clear();
                break;
            }
            default:{
                this.result = eval(this.inputStr);
                this.setString(o);
            }
        }
        //console.log("inputBefore - ",this.inputStr)
        //console.log("result - ",result);
        //console.log("inputAfter - ", this.inputStr)
    },
    clear(){
        this.inputStr = "";
        this.result = "";
    },
    sqr(val){
        return val**2;
    },
    squr(val){
        return Math.sqrt(val).toFixed(3);
    },
    fraction(val){
        return (1/val).toFixed(2);
    },
    average(val){
        return val*(this.result*0.01);
    }
}