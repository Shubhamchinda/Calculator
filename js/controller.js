window.onload=function(){
    var buttons = document.getElementsByClassName("btn");
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",function(event){
            compute(event.target);
        });
    }
}
var temp="";

function compute(target){
    
    if(!target.hasAttribute("id")){
        
        temp += target.innerText;
        if(document.querySelector("#textBox").value == logic.result){
            document.querySelector("#textBox").value = "";
        }
        document.querySelector("#textBox").value += target.innerText;
    }
    else if(target.getAttribute("id")==="del"){
        temp=temp.slice(0,(temp.length-1));
        document.querySelector("#textBox").value = temp;
    }
    else if(target.getAttribute("id")==="sqr"){
        temp = logic.sqr(temp);
        document.querySelector("#textBox").value = temp;
    }
    else if(target.getAttribute("id")==="squr"){
        temp = logic.squr(temp);
        document.querySelector("#textBox").value = temp;
    }
    else if(target.getAttribute("id")==="fraction"){
        temp = logic.fraction(temp);
        document.querySelector("#textBox").value = temp;
    }
    else if(target.getAttribute("id")==="average"){
        temp = logic.average(temp);
        document.querySelector("#textBox").value = temp;
    }
    else if(target.getAttribute("id")==="clearEntry"){
        temp="";
        document.querySelector("#textBox").value = logic.result;
    }
    else if(target.getAttribute("id")==="plusMinus"){
        if(temp===""){
            temp = parseInt(logic.result);
            temp -= temp*2;
            document.querySelector("#textBox").value = temp;
        }
        else{
            temp = parseInt(temp);
            temp -=temp*2;
            document.querySelector("#textBox").value = temp;
        }
    }
    else{
        logic.inputStr += temp;
        logic.operator(target.getAttribute("id"));
        document.querySelector("#inputString").innerText=logic.inputStr;
        document.querySelector("#textBox").value = logic.result;
        temp="";
    }
}