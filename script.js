const myButton = document.querySelector("#change-button");
const myHeading = document.querySelector("h1");
const myImage = document.querySelector("#main-image");
let isHackerCatShowing = true;
myButton.addEventListener("click", () => {
    myHeading.textContent = "(this applies to everyone except for Lizevelyn) you clicked my button! pay me 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 dollars right now!! Oh you didn't know this would happen? now you owe me! so too bad! sucker! :D";
    if (isHackerCatShowing === true) {
        myImage.src = "https://i.redd.it/3g0v1w80i6j51.jpg";
        isHackerCatShowing = false;
    } else {
        myImage.src = "https://avatars.mds.yandex.net/get-shedevrum/12365046/552fe1ecd97711ee84e70a0d9f74bed2/orig"
        isHackerCatShowing = true; 
        myHeading.textContent = "(this applies to everyone except for Lizevelyn) why ya gotta be such a stupid idiot and click my button? Now you owe me a lot of money! >:D so to o bad! sucker! i dont care if you are broke! pay me! :D and now you changed my image back to normal! how boring! why you gotta be so boring! :D you need to be more exciting! :D and stop being a sucker! :D so too bad! sucker!sucker! :D sucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksucksuck!sucker! :D";
    }
    
    });
for (let i = 0; i < 150; i++) {
    const box = document.createElement("div");
       box.classList.add("floating-box");
    box.style.left = Math.random() * 100 + "%";
    box.style.top = Math.random() * 100 + "%";
    document.body.appendChild(box);
}