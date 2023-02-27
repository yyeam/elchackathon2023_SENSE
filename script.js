window.addEventListener('scroll', function() {
    if(window.scrollY > 230) {
        document.getElementById("sfButton").hidden = false;
    }
    if(window.scrollY < 230) {
        document.getElementById("sfButton").hidden = true;
    }
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}



const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();


// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {

    picker.on('emoji', emoji => {
      document.querySelector('input').value += emoji;
    });
  
    emojiBtn.addEventListener('click', () => {
      picker.togglePicker(emojiBtn);
    });
  });        

//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

// send msg 
submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;

    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="img/me.jpg" class="avatar">
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';

})

function start(){
    document.getElementById("birdBox").hidden = true;
    document.getElementById("initialText").hidden = true;
    document.getElementById("startButton").style.display = 'none' ;

    document.getElementById("in-msg-div").hidden = false;
    document.getElementById("out-msg-div1").hidden = false;
    document.getElementById("out-msg-div2").hidden = false;
    
    
}

function firstSFQ(){ 
    document.getElementById("out-msg-div3").hidden = false;

    document.getElementById("out-msg1").innerHTML = "For Him";
    document.getElementById("out-msg2").innerHTML = "For Her";
    document.getElementById("out-msg3").innerHTML = "For Both";
    
    document.getElementById("out-msg1").onclick = secondSFQ ;
    document.getElementById("out-msg2").onclick = secondSFQ ;
    document.getElementById("out-msg3").onclick = secondSFQ ;

    document.getElementById("in-msg").innerHTML = "The fragarance is...";
}

function secondSFQ(){
    document.getElementById("out-msg1").innerHTML = "A day to the races";
    document.getElementById("out-msg2").innerHTML = "A night at the opera";
    document.getElementById("out-msg3").innerHTML = "Lunch hour to happy hour";

    document.getElementById("out-msg1").onclick = thirdSFQ ;
    document.getElementById("out-msg2").onclick = thirdSFQ ;
    document.getElementById("out-msg3").onclick = thirdSFQ ;
    
    document.getElementById("in-msg").innerHTML = "When will they be wearing the fragrance?";
}

function thirdSFQ(){
    document.getElementById("out-msg-div4").hidden = false;
    document.getElementById("out-msg-div5").hidden = false;

    document.getElementById("out-msg1").innerHTML = "Fresh";
    document.getElementById("out-msg2").innerHTML = "Lively";
    document.getElementById("out-msg3").innerHTML = "Delicate";
    document.getElementById("out-msg4").innerHTML = "Deep";
    document.getElementById("out-msg5").innerHTML = "Opulent";

    document.getElementById("out-msg1").onclick = fourthSFQ ;
    document.getElementById("out-msg2").onclick = fourthSFQ ;
    document.getElementById("out-msg3").onclick = fourthSFQ ;
    document.getElementById("out-msg4").onclick = fourthSFQ ;
    document.getElementById("out-msg5").onclick = fourthSFQ ;

    document.getElementById("in-msg").innerHTML = "Which word would they be most drawn to?";
}

function fourthSFQ(){
    document.getElementById("out-msg-div5").hidden = true;

    document.getElementById("out-msg1").innerHTML = "Daring";
    document.getElementById("out-msg2").innerHTML = "Fancy";
    document.getElementById("out-msg3").innerHTML = "Relaxed";
    document.getElementById("out-msg4").innerHTML = "Upbeat";

    document.getElementById("out-msg1").onclick = fifthSFQ ;
    document.getElementById("out-msg2").onclick = fifthSFQ ;
    document.getElementById("out-msg3").onclick = fifthSFQ ;
    document.getElementById("out-msg4").onclick = fifthSFQ ;

    document.getElementById("in-msg").innerHTML = "You want the fragrance to make them feel..";
}

function fifthSFQ(){
    document.getElementById("resultScents").hidden = false;

}

