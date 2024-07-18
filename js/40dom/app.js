// using getElementByClassName:
let smallImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++){
    console.dir(smallImages[i]);
    console.dir(`old src of images: ${smallImages[i].src}`);
    smallImages[i].src="assets/spiderman_img.png"; // chages all the images of that classname
    smallImages[1].src="assets/creation_3.jpeg";//change that index image of that classname
    console.dir(`new updated src of images: ${smallImages[i].src}`);
}

// using getElementByTagName :
console.dir(document.getElementsByTagName("p"));
console.dir(document.getElementsByTagName("a"));

// querry selectors

let firstP = document.querySelector("p");
console.dir(firstP);

// let allImages = document.querySelectorAll("img");
// console.dir(allImages);

let PARA =(document.querySelector("p"));
console.dir(PARA);
// console.dir(PARA.innerText="<h1>hii mu</h1> ");

console.dir(document.querySelectorAll("a"));

console.dir(document.querySelectorAll(".oldImg"));

console.dir(document.querySelectorAll("#myId"));

console.dir(document.querySelectorAll("#discription"));

console.dir(document.querySelectorAll("p, a"));

console.dir(document.querySelectorAll("div a"));
console.dir(document.querySelector("a"));



// INNERhtml USING 
console.dir(PARA.innerHTML);

// innertext using

console.dir(PARA.innerText);

// textcontent using

console.dir(PARA.textContent);


let links=document.querySelectorAll(".box a");
// for(let i=0; i<links.length; i++){
    // links[i].style.color="green";
 //  }

for(link of links){
   link.style.color="green";
}

