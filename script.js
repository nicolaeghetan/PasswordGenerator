//get  all elements
const resultPass = document.getElementById('resultPass')
const genPass = document.getElementById('generatePassword')
const saveClip = document.getElementById('copyToClipboard')
const lc = 'abcdefghijklmnopqrstuvwxyz'
const uc = lc.toLocaleUpperCase();
const nums = '1234567890'
const sc = '!@#$%^&*().""'
let allCases = '';

// get lenght of our password and convert input in to a number
let passLength = prompt('Insert lenght of your password between 8 and 128');
passLength = parseInt(passLength);

while ( passLength < 8 || passLength > 128) {
    alert('Insert a number between 8 and 128 !!!')
    passLength = prompt('Insert lenght of your password between 8 and 128');
    passLength = parseInt(passLength);
}
if ( confirm('You whant to use lower cases in your generated password ? ')){
    allCases = allCases.concat(lc);
}
else {
    allCases = allCases;
    }

if ( confirm('You whant to use upper cases in your generated password ? ')){
    allCases = allCases.concat(uc);
    
}
else {
    allCases = allCases;
    }
if ( confirm('You whant to use numbers in your generated password ? ')){
    allCases = allCases.concat(nums);
    }
else {
    allCases = allCases;
    }
if ( confirm('You whant to use special characters in your generated password ? ')){
    allCases = allCases.concat(sc);
    }
else {
    allCases = allCases;
    }
genPass.addEventListener('click', function(){
    let genPassword = [];
    for (var i = 0; i < passLength; i++) 
    genPassword= genPassword + allCases.charAt(Math.floor(Math.random() * allCases.length));
// Password function 
resultPass.innerText = genPassword;
})
saveClip.addEventListener('click', function(){
    resultPass.select();
    document.execCommand('copy')
})

    


