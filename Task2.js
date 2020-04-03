Data = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }   
];

let rate;
const interestCalculator = (array) =>{
    const interestData = array.map(item => {
        const {
            principal,
            time
        } = item;
    if(principal >= 2500 && time > 1 < 3){
         rate = 3
    }else  if (principal >= 2500 && time >= 3){
         rate = 4
    }else  if (principal < 2500 || time <= 1){
         rate= 2
    }else{
         rate = 1;
    }
    const interest = (principal * rate * time) / 100;
    item.interest = interest;
    item.rate = rate;

    return item;
    });
    return interestData;
}
console.log(interestCalculator(Data));
