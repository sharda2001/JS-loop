var sum1=0
for(i=0; i<=5; i++){
    let n=require("readline-sync")
    var sum=n.questionInt("enter the number")
    sum1=sum1+sum
    console.log(sum1)
}