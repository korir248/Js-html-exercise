

function  getGrade(value){
    if(25<value<=30){
        console.log("A")
    }else if(20<value<=25){
        console.log("B")
    }else if(15<value<= 20){
        console.log("C")
    }else if(10<value<=15){
        console.log("D")
    }else if(5<value<=10){
        console.log("E")
    }else if(0<value<=5){
        console.log("F")
    }else{
        console.log("error")
    }
   
}

const getInput = () => {
    console.log("Please enter the score");
    process.stdin.on("data", (data) => {
    const grade = data;
    getGrade(grade);
    process.exit();
    })
}

getInput();