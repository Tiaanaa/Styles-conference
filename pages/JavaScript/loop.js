/* let sliceOfToast = 0;
const desiredToast = 3;


console.log("-------WHILE-------")
while(sliceOfToast < desiredToast){
    console.log("Toasting a slice of bread .....");
    sliceOfToast ++;
    console.log ( `You have ${sliceOfToast} slice(s) of toast.`)
}


console.log ("--------FOR-------")
for (sliceOfToast = 0; sliceOfToast<=desiredToast; sliceOfToast++){
    console.log("Toasting a slice of bread .....");
    sliceOfToast ++;
    console.log ( `You have ${sliceOfToast} slice(s) of toast.`)   
} */

let students = ["Tomi", "Tiana", "Christy", "Peniel", "Abraham", "Sarah", "Joseph", "Enoch", "Ibrahim", "Khadijat", "Jennifer"]

console.log('------FOR------')
for(i =0; i<=students.length; i++){
    
    console.log(`Good day ${students[i]}. Trust you had a good day? `)
    i++;
}
console.log('--------FIRST WHILE-------')
counter=0;
while(counter < students.length){
    const newValue = "goodday " + students[counter];
    console.log(newValue);
    counter++;

}

console.log('------second WHILE-----')
counter =0;
while(counter<students.length){
    console.log(`Good day ${students[counter]}`);
    counter++
}