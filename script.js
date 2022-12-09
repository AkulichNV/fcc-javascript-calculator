const res = document.getElementById('result');
const ans = document.getElementById('answer');

let flag = false;
let cur = 0;
let op = '';

function fNum(n) {
  if (flag) {
    res.innerHTML = n;
    if(ans.innerHTML === '0' || ans.innerHTML === 'Digit Limit Met') {
      ans.innerHTML = res.innerHTML;
    } else { 
      ans.innerHTML += n;
    }
    flag = false;
  } else {
    if(res.innerHTML === '0') {
      res.innerHTML = n;
      ans.innerHTML = res.innerHTML;
    } else {
      res.innerHTML += n; 
      ans.innerHTML += n;
    }
   }
  if(res.innerHTML.length > 17 || ans.innerHTML.length > 17) {
    ans.innerHTML = 'Digit Limit Met';
    flag = true;
    res.innerHTML = '0';
  } 
}
function fOp(a) {
  isEqual();
  if(ans.innerHTML != "Digit Limit Met" && !ans.innerHTML.endsWith('+') && !ans.innerHTML.endsWith('-') && !ans.innerHTML.endsWith('*') && !ans.innerHTML.endsWith('/')) {
    ans.innerHTML += a; 
  }
  var read = res.innerHTML;
  if(flag && op != '=') {
    res.innerHTML = cur;
  } else {
    flag = true;
    if ('+' == op) {
      cur += parseFloat(read);
    }else if('-' == op) {
      cur -= parseFloat(read);
    }else if('/' == op) {
      cur /= parseFloat(read);
    } else if ('*' == op) {
      cur *= parseFloat(read);
    } else {
      cur = parseFloat(read); 
    }
    res.innerHTML = cur;
    op = a;
    if('=' == op) {
        ans.innerHTML += cur;}
 
    if(res.innerHTML.length > 16 || ans.innerHTML.length > 25) {
      res.innerHTML = res.innerHTML.substring(0,16);
      ans.innerHTML = ans.innerHTML.substring(0,25);
    }
  }
}
function fDot() {
  let rOut = res.innerHTML;
  if (flag) {
    rOut = "0.";
    ans.innerHTML += '.';
    flag = false;
  } else {
    if (rOut.indexOf(".") == -1) {
      rOut += ".";
      ans.innerHTML += '.';
    }
  }
  res.innerHTML = rOut;
}
function fPer() {
  ans.innerHTML = ans.innerHTML.substring(0, ans.innerHTML.length - res.innerHTML.length);
  res.innerHTML = (parseFloat(res.innerHTML) / 100) * parseFloat(cur);
  ans.innerHTML += res.innerHTML;
}
function fNeg() {
  res.innerHTML = parseFloat(res.innerHTML) * -1;
  ans.innerHTML = ans.innerHTML.substring(0, ans.innerHTML.length - res.innerHTML.length);
  ans.innerHTML += res.innerHTML;
}
function ce(){
  if (res.innerHTML != '0' && !flag){
    ans.innerHTML = ans.innerHTML.substring(0, ans.innerHTML.length - res.innerHTML.length);
  }
  flag = true;
  res.innerHTML = '0'; 
}
function ac(){
  ce();
  ans.innerHTML = '0';
  cur = 0;
  op = ''; 
}
function isEqual(){
  if(ans.innerHTML.indexOf("=") !== -1){
      ans.innerHTML = cur;
    }
}