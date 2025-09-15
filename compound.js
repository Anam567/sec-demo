function calculateCompoundInterest(p,r,n,t){
    return p * Math.pow(( 1 + r / n),n * t);
}

const principal=1000;
const rate=0.05;
const times=4;
const years=5;

const amount = calculateCompoundInterest(principal,rate,times,years);
console.log("Compound Interest Amount after ${years} years: ",amount.toFixed(2));
