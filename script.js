
function getValue(value) {            //  function for concate element on input box
  const display = document.getElementById('calc')
  display.value += value

}
function getOperator(value)
{
  const display = document.getElementById('calc')
let a=new Array
  a= calc.value
let b=a[a.length-1]
   if(value===b)
   {
   calc.value = calc.value
   }
   else {
     calc.value += value
   }
}
function getResult() {               //  Add,sub,multi,and division opreation performimg function
  const display = document.getElementById('calc')
  let x = display.value
  let y = eval(x) 
    display.value = Math.round( y * 1000) / 1000;
}
function rSin(value) {             // function for calculation of sin in radian mode 
  calc.value += value
  const display = value
  let x = value
  let y = Math.sin(x)        // for radian calcultion sin
  return display.value = y

}
function rCos(value) {       // function for calculation of cos  in radian mode 

  calc.value += value
  const display = value
  let x = value
  let y = Math.cos(x)            // for radian calcultion of cos 
  return display.value = y

}
function backSpace() {             // function for delete one by one element in input box 
  let b = calc.value.slice(0, length - 1)
  return calc.value = b
}
function dSin(value) {         
                                  // function for calculation of sin in degree mode 
  calc.value += value
  const display = value
  let x = value
  let pi = Math.PI
  let y = Math.sin(x * pi / 180)        // for degree calcultion sin
  return display.value = y

}
function dCos(value) {
  // function for calculation of cos  in degree mode 
  calc.value += value
  const display = value
  let x = value
  let pi = Math.PI
  let y = Math.cos(x * pi / 180)            // for degree calcultion of cos 
  return display.value = y
  s.type = "number"
}
function deg() {

  var x = document.getElementById("degree");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    s.type = "number"
  }
}
function rad() {

  var x = document.getElementById("radian");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
function reset(value)  // function for reset input field
{
  value = "";
  return calc.value = value;
}
function resin(value)    // function for resin evalute 
{
  let s = document.getElementById('calc')
  s.type = "text"
  calc.value += value
  const display = value
  let x = value
  let resin = 392.9
  let y = value * resin        // for degree calcultion sin
  return display.value = y
  s.type = "number"
}
function pi(value)   // function for pi defining
{
  return calc.value += value
}
function sqr(value) {
  calc.value += value
  const display = value
  let x = value * value
  return display.value = x
}
function cube(value) {
  let s = document.getElementById('calc')
  s.type = "text"
  calc.value += value
  const display = value
  let x = value * value * value
  return display.value = x
  s.type = "number"
}
function fact(value) {  
console.log(value)

let i=value
let f=1
while(i!=0)
{
     f=f*i
     i--
}
return calc.value =f
}
function sqrt(value) {

  calc.value += value
  const display = value
  let x = value
  let y = Math.sqrt(x)
  return display.value = y

}
function power(value)
{
  calc.value += value
  const display = value
  let x = value
  let y = Math.pow(x)
  return display.value = y
}
