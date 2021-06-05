'use strict';
function validate(x, reg) {
  if (!reg.test(x)) {
    return false;
  }
  return true;
}

function cafe() {
  let tip, check, tipAmount,totalSum;
  const hundred = 100;
  const two = 2;
  check = prompt('Check number');
  if (!validate(check, /^([0-9]*[.])?[0-9]+$/)) {
    alert('Invalid input data: Check number validate error');
    return 0;
  }

  tip =prompt('Tip percentage');
  if (!validate(tip, /^[0-9]{1,3}%?$/)) {
    alert('Invalid input data: Tip percentage validate error');
    return 0;
  } else if (parseInt(tip) > hundred) {
    alert('Invalid input data: tip bigger that 100%');
    return 0;
  }
  check = parseFloat(check);
  tip = parseInt(tip)
  tipAmount = check * tip/hundred;
  totalSum = tipAmount + check;
  alert('Check number: ' + check.toFixed(two) + '\n' +
        'Tip: ' + parseInt(tip) + '%\n' +
        'Tip amount: ' + tipAmount.toFixed(two) + '\n' +
        'Total sum to pay: ' + totalSum.toFixed(two)
        )
}

cafe();
