function validate(){
    var name = document.getElementById('name');
    var password = document.getElementById('password-signup').value;
    var cnf_password = document.getElementById('cnf-password-signup').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('dob').value;
    var dob =moment(new Date(date));
    var today = moment();
    var pincode = document.getElementById('pincode').value;
    var state = document.getElementById('state').value;
    var error  = document.getElementById('input-error');
    error.innerText="";

    if(name=='' || password=='' || cnf_password=='' ||phone=='' || date=='' ||pincode==''||state==''){
        error.innerText = 'please enter all necessary fields';
    }
    else if(password.length <8 || password.length>16){
        error.innerText = 'password length should be between 8 and 16';
    }
    else if(password != cnf_password){
        error.innerText="Passwords doesn't match";
    } 
    else if(isNaN(phone) || phone.length!=10){
        error.innerText="please enter a valid 10 digit phone number";
    }
    else if(dob.diff(today,'days')>0){
        error.innerText='please enter a valid date of birth';
    }
    else if(isNaN(pincode) || pincode.length!=6){
        error.innerText='Invalid pincode';
    }
    else if(state== 'select'){
        error.innerText='please select a state';
    }
}