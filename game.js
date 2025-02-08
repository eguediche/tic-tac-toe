let xJ1 = true;
let oJ1 = false;
let xJ2 = false;
let oJ2 = true;

/*Un tableau avec les case apparait par magie et me permet de faire en sorte qui si 3 meme signe sont aligner le joueur est gagnat*/
let restart = document.querySelector(".restart-boite");
let restartBtn = document.querySelector(".reload-btn");
let restartBtnCancel = document.querySelector(".cancel-btn")

restartBtn.addEventListener("click", () => {
	if (getComputedStyle(restart).display != "flex") {
		restart.style.display = "flex";
		console.log("if debug");
	}
    restartBtnCancel.addEventListener("click", () => {
        restart.style.display ="none";
        console.log("cancel debug");
    })
});


