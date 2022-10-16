let marks = 10;

if (marks >= 50){
    console.log("Pass");

    if(marks >= 60 && marks<70){
        console.log("b+");
    }
    else if(marks >= 70 && marks <90){
        console.log('a');
    }
    else if(marks >= 90 && marks <100){
        console.log('a+');
    }
    else if(marks === 100){
        console.log('perfect score');
    }
}
else{
    console.log("fail")
}