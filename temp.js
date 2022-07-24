class Member {
    constructor() {
        this.name = document.getElementById("name").value;
        this.age = document.getElementById("age").value;
        this.sex = document.getElementById("sex").value;
        this.email = document.getElementById("email").value;
        this.phn = document.getElementById("phn").value;
        this.adhar = document.getElementById("adhar").value;
        this.dob = document.getElementById("dob").value;
        this.resume = document.getElementById("resume").value;
    }
}

//let member1 = new Member();


let success = ()=>{
    //let member1 = new Member();
    alert("Success "+document.getElementById("name").value);
}