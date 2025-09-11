const heading = document.getElementById("title");

setTimeout(()=>{
    heading.innerText = "This is new Heading, not the old one";
    const newPara = document.createElement("p");
    newPara.innerText = "This is achieved by using DOM and this thing is beautiful";
    document.getElementById("firstSection").append(newPara);
}, 1500);

// Making image changer
const imgSrc = ["../assets/readme-images/blog-page.webp","../assets/readme-images/gallery-page.webp", "../assets/readme-images/landing-page.webp", "../assets/gallery images/1.sm.webp", "../assets/gallery images/2.sm.webp", "../assets/gallery images/3.sm.webp", "../assets/gallery images/4.sm.webp", "../assets/gallery images/bmw-ce-02-by-mini-3840x2160-22113.webp", "../assets/gallery images/royal-challengers-bangalore-indian-premier-league-ipl-ipl-3840x2160-4937.webp", "../assets/gallery images/windows-11-abstract-3840x2160-20727.webp"];

let imgBox = document.getElementById("someImg");

let index = 0;
const imgChanger = setInterval(()=>{
    imgBox.style.height = "500px";
    imgBox.setAttribute("alt", "some random img");

    imgBox.src = imgSrc[index];
    index++;
    if(index == imgSrc.length) index = 0;
}, 2000)

// if(index == imgSrc.length){
//     clearInterval(imgChanger);
// }