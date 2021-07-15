const textOne = "filler text 1"
const textTwo = "filler text 2"
const textThree = "filler text 3"
function text1() {
    if (onclick="text1") {
        document.getElementById("resultOne").innerHTML = textOne;
    }
}
function text2() {
    document.getElementById("resultOne").innerHTML = textTwo;

}
function text3() {
    document.getElementById("resultOne").innerHTML = textThree;
}
if (document.getElementsByClassName("options")) {
    function hide() {
    var x = document.getElementByClassName("options");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}