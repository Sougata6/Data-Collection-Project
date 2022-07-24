class Member {
    constructor(name, age, sex, email, phone, adhar, dob, resume) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.email = email;
        this.phone = phone;
        this.adhar = adhar;
        this.dob = dob;
        this.resume = resume;
    }
}

let members = [];

let success = ()=>{
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let sex = document.getElementById("sex").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let adhar = document.getElementById("adhar").value;
    let dob = document.getElementById("dob").value;
    let resume = document.getElementById("resume").value;

    let member1 = new Member(name, age, sex, email, phone, adhar, dob, resume);

    //members.push(member1);

    /*let anyNull = Object.values(member1).every( (value) =>{
        if(!value){
            return true;
        } 
        else {
            return false;
        }    
    });
    alert(anyNull);*/
    let members = [];
    let arr = Object.values(member1);
    console.log(arr);
    /*let anyEmpty = arr.every(element =>{
        return (!element);
    });
    console.log(anyEmpty);*/

    let allFilled = true;
    for (let i in arr){
        allFilled = allFilled & arr[i];
        //console.log(anyEmpty,arr[i]);
    }
    console.log(allFilled);

    if(!allFilled){
        alert("Please fill up all the fields!");
    } else {
        alert("Submitted");
    }

    /*if(anyNull){
        alert("fill up all the fields!");
    }
    else {
        alert("Submitted");
    }*/

    console.log("Success");
}