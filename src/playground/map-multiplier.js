const multiplier = {
    numbers : [1,2,3,4],
    multiplyby: 2,
    multiply(){
        return this.numbers.map((n)=>n*this.multiplyby);
    }

};

console.log(multiplier.multiply());