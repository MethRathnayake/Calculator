console.log("Hello Bro");
let temp=0;
let first_no=0;
let operation="";
let result=0;
function display(num){
   temp=Number(String(temp)+String(num))
   document.getElementById("text").value=document.getElementById("text").value+num;
   
    
}
function operation1(op){
    first_no=temp;
    temp=0;
    operation=op;
    document.getElementById("text").value=document.getElementById("text").value+op;

}

function calculate1() {
    switch (String(operation)) {
        case "*":
            result=first_no*temp;
            document.getElementById("text").value=result;
            temp=result;

            break;
        case "/":
            result=first_no/temp;
            document.getElementById("text").value=result;
            temp=result;

            break;
        case "+":
            result=first_no+temp;
            document.getElementById("text").value=result;
            temp=result;

            break;
        case "-":
            result=first_no-temp;
            document.getElementById("text").value=result;
            temp=result;
            break;
        default:
            document.getElementById("text").value="Error";
    }
    
}

function clear1(){
     temp=0;
     first_no=0;
     operation="";
     result=0;
     document.getElementById("text").value="";

}
  
