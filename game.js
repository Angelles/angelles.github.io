// These are the potential next parts of the story. 
const textOne = "filler text 1";
const textTwo = "filler text 2";
const textThree = "filler text 3";

//These are the buttons that drive the story forward.
const optionsOne = document.getElementById("options");
const optionsTwo = document.getElementById("options2");

//These are the next parts of the story.
const resultOne = document.getElementById("resultOne");
const resultTwo = document.getElementById("resultTwo");
const resultThree = document.getElementById("resultThree");

// This code displays the story text related to each button.
function text1() {
   resultOne.innerHTML = textOne; 
  }
function text2() {
    resultOne.innerHTML = textTwo;
  }
function text3() {
    resultOne.innerHTML = textThree;
  }
function text4() {
  resultTwo.innerHTML = "filler text 4";
}
function text5() {
  resultTwo.innerHTML = "filler text 5";
}
function text6() {
  resultTwo.innerHTML = "filler text 6";
}

// This code allows users to scroll to the top of the page when they click the Start Over button.
function scrollToTop () {
  window.scrollTo (0,0);
  resultOne.style.display = "none";
  resultTwo.style.display = "none";
  resultThree.style.display = "none";
  optionsTwo.style.display = "none";
}
// This code clears the first set of buttons and reveals the next set.
function partTwo() {
  if (optionsOne.clicked == true) {
      optionsOne.style.display = "none";
       optionsTwo.style.display = "initial";  
      }
    }
