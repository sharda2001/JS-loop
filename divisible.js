let n=require("readline-sync")
var number=n.questionInt("enter the number")
for(var i=1; i<=number; i++){
    if(i%7===0){
        console.log(i)
    }

}