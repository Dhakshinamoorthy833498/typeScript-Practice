var reviews = [2, 4.5, 3, 5, 2];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log(total);
var average = total / reviews.length;
console.log(average);
reviews.push(6);
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
