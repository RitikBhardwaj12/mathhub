// Function to find exponent
function power(){
  n = document.getElementById('input1').value
  d = document.getElementById("input2").value
  document.getElementById("answer").innerHTML=n**b
}

// Function to find nth fibonacci
function fibonacci(){
  n = document.getElementById('input1').value
  let a = 0;
  let b = 1;
  let c = 0;
  for(let i=2; i<=n;i++){
    c=a+b;
    a=b;
    b=c;
  }
  document.getElementById("answer").innerHTML=b;
}

//Function to find factorial of a number
function factorial(){
  n = document.getElementById("input1").value
  let answer=1;
  if(n==0 || n==1){
    return 1;
  }
  else{
    for (var i=n;i>=1;i--){
      answer = answer*i
    }
    document.getElementById("answer").innerHTML=answer;
  }
}


// Function to convert Celsius to Fahrenhiet
function CeltoFah(){
  n= document.getElementById("input1").value
  answer = n*9/5+32;
  document.getElementById("answer").innerHTML=answer;

}
// Function to convert Fahrenhiet to Celsius
function FahtoCel(){
  n= document.getElementById("input1").value
  answer = (n-32)*5/9;
  document.getElementById("answer")=answer

}
//Function to Check if a number is prime or not
function primechecker(){
  n = document.getElementById("input1").value
  let isPrime=true;

  if (n==1){
    document.getElementById("answer").innerHTML="1 is neither prime nor composite number."
  }
  else if (n > 1){
    for (let i = 2; i<n; i++){
      if (n%i==0){
        isPrime = false;
        break;
      }
    }
    if (isPrime){
      document.getElementById("answer").innerHTML=n+" is not a Prime Number."

    }
    else {
      document.getElementById("answer").innerHTML=n+" is a Prime Number."
    }
  }
  else{
    document.getElementById("answer").innerHTML=n+" is not a Prime Number."
  }
}
