try{
	  function checkMobile() {
         if ((navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i))) {
            window.location.href = "error.html";
         } else if(screen.width < screen.height){
			 window.location.href = "error.html";
		 	}
		 } 
 
	  window.onload = checkMobile;

window.addEventListener('scroll', function() {
    if(window.scrollY > 275) {
        document.getElementById("sfButton").hidden = false;
        document.getElementById("scentFinder").hidden = false;
		document.getElementById("scentFinderTextArea").hidden = false;
		document.getElementById("scentFinderText").hidden = false;
		
    }
    if(window.scrollY < 275) {
        document.getElementById("sfButton").hidden = true;
        document.getElementById("scentFinder").hidden = true;
		document.getElementById("scentFinderTextArea").hidden = true;
		document.getElementById("scentFinderText").hidden = true;
		
    }
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
	if(slideIndex > 1){
		document.getElementById("roseText").hidden = true;
		document.getElementById("exploreText").hidden = true;
	}
	else if(slideIndex == 1){
		document.getElementById("roseText").hidden = false;
		document.getElementById("exploreText").hidden = false;
	}
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
  });        

//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

function start(){
    document.getElementById("birdBox").hidden = true;
    document.getElementById("initialText").hidden = true;
    document.getElementById("startButton").style.display = 'none' ;

    document.getElementById("in-msg-div").hidden = false;
    document.getElementById("out-msg-div1").hidden = false;
    document.getElementById("out-msg-div2").hidden = false;

    document.getElementById("out-msg1").innerHTML = "For you";
    document.getElementById("out-msg2").innerHTML = "For someone else";

    document.getElementById("out-msg1").onclick = firstSFQ ;
    document.getElementById("out-msg2").onclick = firstSFQ ;
    
    document.getElementById("in-msg").innerHTML = "You are choosing...";



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

function exitButton(){
    document.getElementById("resultScents").hidden = true;

    document.getElementById("in-msg-div").hidden =  true;
    document.getElementById("out-msg-div1").hidden = true;
    document.getElementById("out-msg-div2").hidden = true;
    document.getElementById("out-msg-div3").hidden = true;
    document.getElementById("out-msg-div4").hidden = true;
    document.getElementById("out-msg-div5").hidden = true;


    document.getElementById("birdBox").hidden = false;
    document.getElementById("initialText").hidden = false;
    document.getElementById("startButton").style.display = 'inline';
    document.getElementById("startButton").onclick = start ;
}

function readMore(){
    document.getElementById("extra").hidden = false;
    document.getElementById("readMore").hidden = true;
    document.getElementById("readLess").hidden = false;

}

function readLess(){
    document.getElementById("extra").hidden = true;
    document.getElementById("readMore").hidden = false;
    document.getElementById("readLess").hidden = true;
}
}catch(err){
	
}


