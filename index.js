let navbarContainer = document.getElementById("navbar");
fetch("navbar.html").then(res => res.text()).then((data)=>navbarContainer.innerHTML = data);

//add new photo
let addPhotoBtn = document.getElementById("addPhotoBtn");
let gallery = document.getElementById("gallery");
addPhotoBtn.addEventListener("click", (event)=>{
    event.preventDefault();

    let newLink = document.getElementById("newPhotoLink");

    let newImg = document.createElement("img");
    newImg.setAttribute("src", newLink.value);

    gallery.append(newImg);

    newLink.value = "";
    alert("Your photo is added 😊");

});