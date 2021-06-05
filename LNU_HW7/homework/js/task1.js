function validate(x, reg) {
  if (!reg.test(x)) {
    return false;
  }
  return true;
}
/*eslint no-magic-numbers: 0*/
function cafe() {
  let tip, check, tipAmount,totalSum;
  check = prompt('Check number');
  if (!validate(check, /^([0-9]*[.])?[0-9]+$/)) {
    alert('Invalid input data: Check number validate error');
    return 0;
  }

  tip =prompt('Tip percentage');
  if (!validate(tip, /^[0-9]{1,3}%?$/)) {
    alert('Invalid input data: Tip percentage validate error');
    return 0;
  } else if (parseInt(tip) > 100) {
    alert('Invalid input data: tip bigger that 100%');
    return 0;
  }
  check = parseFloat(check);
  tip = parseInt(tip);
  tipAmount = check * tip/100;
  totalSum = tipAmount + check;
  alert('Check number: ' + check.toFixed(2) + '\n' +
        'Tip: ' + parseInt(tip) + '%\n' +
        'Tip amount: ' + tipAmount.toFixed(2) + '\n' +
        'Total sum to pay: ' + totalSum.toFixed(2)
        );
}

cafe();
