'use strict';
function validate(x, reg) {
  if (!reg.test(x)) {
    return false;
  }
  return true;
}

function middle() {
  let word = prompt('Enter word');
  let result;
  if (!validate(word, /^[a-zA-Zа-яА-ЯіІ]+$/)) {
    alert('Invalid input data');
    return 0;
  }

  result = word.substr(word.length - 1 >>> 1, (~word.length & 1) + 1);

  alert(result);
}

middle();
