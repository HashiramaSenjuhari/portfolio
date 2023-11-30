// Function to change the name to a different language
function changeName() {
    const nameDisplay = document.getElementById('name-display');
    const languages = ['Korean', 'Chinese', 'Hindi', 'Russian','Urudu','french','hola'];
    
    // Generate a random language
    const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
    
    // Map of names in different languages
    const nameMap = {
        'Korean': '안녕 !',
        'Chinese': '你好 !',
        'Hindi': 'नमस्ते !',
        'Russian': 'привет !',
        'Urudu' : 'ہیلو !',
        'french' : 'Salut !',
        'hola' : 'Hola !'


    };

    // Change the name and language
    nameDisplay.textContent = nameMap[randomLanguage];
}

// Change the name every second
setInterval(changeName, 1000);

// Clear the interval after 5 seconds
setTimeout(() => {
    clearInterval(intervalId);
}, 1000);

// ----------------------------------------------------------
var divs = ["Menu1", "Menu2"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

// ---------------------------------------------
