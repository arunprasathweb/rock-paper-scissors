function getValue(){
    let userselect = document.querySelector('input[name="option"]:checked').value;
    console.log(userselect);
    let imageSource = "assets/" + userselect + ".png";
    console.log(imageSource);
    document.getElementById("user").src = imageSource;

    let randomNo = Math.floor(Math.random() * 3 + 1);
    document.getElementById("bot").src = "assets/q" + randomNo + ".png";
    let botselect = "q" + randomNo;
    console.log(botselect);

    if(userselect == "q1" && botselect == "q1" ) {
           document.getElementById("comment").textContent = "Draw";
    }if(userselect == "q1" && botselect == "q2" ) {
        document.getElementById("comment").textContent = "Bot wins";
    }if(userselect == "q1" && botselect == "q3" ) {
        document.getElementById("comment").textContent = "You win";
    }if(userselect == "q2" && botselect == "q1" ) {
        document.getElementById("comment").textContent = "You win";
    }if(userselect == "q2" && botselect == "q2" ) {
        document.getElementById("comment").textContent = "Draw";
    }if(userselect == "q2" && botselect == "q3" ) {
        document.getElementById("comment").textContent = "Bot wins";
    }if(userselect == "q3" && botselect == "q1" ) {
        document.getElementById("comment").textContent = "Bot wins";
    }if(userselect == "q3" && botselect == "q2" ) {
        document.getElementById("comment").textContent = "You win";
    }if(userselect == "q3" && botselect == "q3" ) {
        document.getElementById("comment").textContent = "Draw";
    }

}

