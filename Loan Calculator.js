


var slider1 = document.getElementById("amount");
var slider2 = document.getElementById("interest");
var slider3 = document.getElementById("year");
var output1 = document.getElementById("demo1");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");

output1.innerHTML = "₹ "+slider1.value;
output2.innerHTML = slider2.value+" %";
output3.innerHTML = slider3.value+" Yr";

slider1.oninput = function() {
  output1.innerHTML = this.value;
  var out1=output1;
}
slider2.oninput = function() {
  output2.innerHTML = this.value;
  var out2=output2;
}
slider3.oninput = function() {
  output3.innerHTML = this.value;
  var out3=output3;
}
document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {  

  const UIamount = slider1.value;
  const UIinterest = slider2.value;
  const UIyears = slider3.value;

  const principal = parseFloat(UIamount);
  const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears) * 12;

  //Compute monthly Payment

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  //Compute Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //Compute Total Payment
  const interest = UIinterest/100
  const powercal = (Math.pow((1+interest),UIyears) - 1)/(interest) 
  const total = UIamount*powercal*(1+interest)
  // const powercal = (Math.pow((1+interest),UIyears) - 1)*(1+interest) 
  // const total = UIamount*interest/powercal
  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  //Show results

  const p = UIamount;
  const r = UIinterest;
  const i  = (r/100)/12;
  const n = UIyears*12;

  const mathpow = (Math.pow((1+i),n)) - 1
  FV = p*(mathpow)*(1+i)/i

  const estret = FV - (UIamount*UIyears*12);

  document.getElementById("monthlyPayment").innerHTML = "₹ " + UIamount*UIyears*12;
  document.getElementById("totalInterest").innerHTML = "₹ " + estret.toFixed(2);

  document.getElementById("totalPayment").innerHTML = "₹ " + FV.toFixed(2);
    e.preventDefault();
}
