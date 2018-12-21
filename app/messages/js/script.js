var Messages = document.getElementsByClassName("message");
var btn = document.getElementById('message-balk');
var times_clicked = 0;

for(var i = 0; i < Messages.length; i++){
    if(i > 0){
        Messages[i].classList.add('hidden');
    }
}

btn.addEventListener("click", function(){
    times_clicked++;
    Messages[times_clicked].classList.remove('hidden');
});



