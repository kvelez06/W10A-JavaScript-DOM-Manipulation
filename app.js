var firstPTag = document.querySelector("body p");                       // this selects the first <p> in body
firstPTag.style.color = "blue";

var allPTags = document.querySelectorAll("body p");                     // this selects all <p>
for(var index = 0; index < allPTags.length; index++) {
    allPTags[index].style.fontWeight = "bold";
}

var header = document.getElementById("header-text");                    // this selects the ID. in this case it's the header-text
header.style.fontSize = "100px";                                        // - applies font size to the header  "100px"
header.style.color = "grey";                                            // - applies color to the header "grey"

var infoTags = document.getElementsByClassName("info-text");            // this selects ALL class with the name "info-text"
for(var index = 0; index < infoTags.length; index++) {                  // for(loop)
    infoTags[index].style.fontStyle = "italic";                         // applies the fontStyle to classes
}