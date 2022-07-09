const slider = document.querySelector(".slider");

const value = document.querySelector(".sliderValue")
console.log("hey")
slider.addEventListener("change",()=>{
    console.log(slider.value)
    value.innerText = slider.value
})