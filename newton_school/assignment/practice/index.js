let obj = {
    name: "manisha",
    stream: "arts",

}
console.log(obj.name);
function parent(){
    let a=65;
    function child(){
        let b=54;
        console.log(a+b);
    }
    child();
}
parent();
let v = [5,1,7,3,8,2];
let arr = v.sort();
console.log(arr[3]);

let str ="I AM A DEVELOPER";
console.log(str.toLowerCase());

// let =new Date();
// let dt = getDate();
// console.log(dt);

setInterval(updateTime, 1000);

function updateTime(){
   time.innerHTML=new Date();
}
