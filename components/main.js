const humberBtn = document.querySelector(".humber-icon")
const sidebar = document.querySelector(".sidebar-wrapper");
const container = document.querySelector(".container");


humberBtn.addEventListener("click",()=>{
    sidebar.classList.add("trans-on");
    sidebar.classList.remove("trans-off");
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
})

function closeDrawer(){
    sidebar.classList.remove("trans-on");
    sidebar.classList.add("trans-off");
    document.body.style.backgroundColor = "#ffffff";
}

container.addEventListener("click",closeDrawer)
