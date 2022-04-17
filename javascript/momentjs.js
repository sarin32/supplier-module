var div = document.getElementById('divmoment')
var input,dateEntered;
div.innerHTML=moment();
document.getElementById('date').addEventListener("change",function(){
    input = this.value;
    dateEntered = new Date(input);
    var mmt = moment(dateEntered);
    var today = moment();
    var diff = mmt.diff(today,'days');
    if(diff<0){
        alert('Sorry selected date can not be a past date.')
    }
    else{
        div.innerHTML = 'selected date:' +input
    }
})