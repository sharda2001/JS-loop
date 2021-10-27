// while loop:

var i=0;
while(i<5){
    console.log(i);
    i=i+1
}

// for loop:

for(var i = 0; i < 3; i++){
    console.log(i)
}

// do while loop

var i=0;
do{
    console.log(i);
    i++
}
while(i<5);

// for in loop:

let name=["sharda","suman","sharma"]
for(names in name){
    console.log(name[names])
}

// for of loop

let na=["sharda","suman","sharma"];
for(let names of na){
    console.log(names)
}

let Navgurukul = ['Pune', 'Bangalore', 'Sarjapur'];

// cmpKey are the property keys
for (let cmpKey in Navgurukul) {
 console.log(cmpKey);
}

// cmpValue are the property values
for (let cmpValue of Navgurukul) {
 console.log(cmpValue)
}



