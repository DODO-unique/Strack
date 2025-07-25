const btn = document.getElementById("btn");
const txt = document.getElementById("display");

// console.log(`connected ${txt.textContent}`)

btn.addEventListener("click", () => {
    // console.log("reached here")
    let currentNum = parseInt(txt.textContent, 10);
    // console.log(currentNum);
    currentNum += 1;
    txt.textContent = `${currentNum}🔥`;
});