const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-button");
const infoText = document.getElementById("infotext");
let filterInput;


textInput.addEventListener ("keyup", ()=>{
    filterInput = textInput.value.replace(/[^A-Z0-9]/ig,"");
    if(filterInput){
        return checkButton.classList.add("active")
    }else{
        checkButton.classList.remove ("active");
        infoText.style.display="none";
    }
})


checkButton.addEventListener("click", ()=>{
    let reverseInput = filterInput.split("").reverse().join("");
    infoText.style.display = "block"
    if(filterInput != reverseInput){
        return infoText.innerHTML = `Sorry, <span>${filterInput}</span> is not a palindrome`
    } else{
        infoText.innerHTML = `Yes, <span>${filterInput}</span> is a palindrome`
    }
   
   
})

