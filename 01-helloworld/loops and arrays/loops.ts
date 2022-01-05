let reviews : number[] = [2,4.5,3,5,2];
let total : number = 0;
for(let i =0;i<reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}
console.log(total);
let average : number = total/reviews.length;
console.log(average);
reviews.push(6);

for(let i =0;i<reviews.length; i++){
    console.log(reviews[i]);

}
