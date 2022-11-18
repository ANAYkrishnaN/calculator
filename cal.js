function display(num){
       // result to be added next to previous number
 result.value+=num}


 function allclear(){
    result.value=""
 }

 function evaluateexp(){
// currentExp=result.value
// result.value=eval(currentExp)
// or
result.value=eval(result.value)

 }

 function backspace(){
   // data=result.value
   // s=data.slice(0,-1)
   // result.values=s
   // or

   result.value=result.value.slice(0,-1)

 }