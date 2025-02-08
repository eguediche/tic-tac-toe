let xBtn = document.querySelector(".x-btn")
let oBtn = document.querySelector(".o-btn")
let xBtnNotClicked = document.querySelector(".x-nonactive-btn");
let oBtnNotClicked = document.querySelector(".o-nonactive-btn");
let xBtnClicked = document.querySelector(".x-active-btn");
let oBtnClicked = document.querySelector(".o-active-btn");
let BtnClicked = oBtn;
let gameBtn = document.querySelector(".game-player");


xBtn.addEventListener("click", () => {
    if (xBtn != BtnClicked) {
        xBtnNotClicked.style.display = "none";
        xBtnClicked.style.display = "flex";
        oBtnClicked.style.display = "none";
        oBtnNotClicked.style.display = "flex";
        xBtn = BtnClicked;
        oBtn != BtnClicked;
        xJ1 = true;
        xJ2 = false;
        oJ1 = false;
        oJ2 = true;
        console.log("debug")
    } else {
        xBtn = BtnClicked;
    }
});

oBtn.addEventListener("click", () => {
    if (oBtn != BtnClicked) {
        oBtnNotClicked.style.display = "none";
        oBtnClicked.style.display = "flex";
        xBtnClicked.style.display = "none";
        xBtnNotClicked.style.display = "flex";
        oBtn = BtnClicked;
        xBtn != BtnClicked;
        oJ1 = true;
        oJ2 = false;
        xJ1 = false;
        xj2 = true;
    } else {
        oBtn = BtnClicked;
    }
})

let gameModeChoice = document.querySelector(".menu-player")
let gamePage = document.querySelectorAll("#game-page")

gameBtn.addEventListener("click", () => {
    gameModeChoice.style.display = "none";
    gamePage.style.display = "flex";
    console.log("debug gamemode");
});


/*restartBtn.addEventListener("click", () => {
	if (getComputedStyle(restart).display != "flex") {
		restart.style.display = "flex";
		console.log("if debug");
	}
    restartBtnCancel.addEventListener("click", () => {
        restart.style.display ="none";
        console.log("cancel debug");
    })
});*/
