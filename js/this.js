const student ={
    name:"Priye",
    age:23,
    eng:34,
    math:97,
    phy:97,
    getAvg(){
        console.log(this);
        let avg =(this.eng+ this.math +this.phy)/3;
        console.log(avg);
        console.log  (`${this.name} got avg marks = ${avg}`);
    }
}

// by default call window object on console page
    function getAvg(){
        console.log(this);
    }
  