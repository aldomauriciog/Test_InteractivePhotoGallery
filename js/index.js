jsonData = JSON.parse(imagenes);

/* Galería */

let span = document.getElementById("insertImg");

for(let i=1; i<=17; i++){

    let nuevoarticulo = document.createElement("article");
    nroImagenes = jsonData.forEach(function(img){
        if(img.nroImagen == i-1){
            nuevoarticulo.setAttribute("data-category", img.categoria);
        }
    });
    nuevoarticulo.setAttribute("id", "contenedor");
    nuevoarticulo.setAttribute("class", "content__article");

    span.appendChild(nuevoarticulo);

    let contenedor = document.querySelectorAll("article");
    let ultimoArticleIndex = contenedor.length - 1;
    let ultimoArticle = contenedor[ultimoArticleIndex];

    let nuevaImagen = document.createElement("img");
    nuevaImagen.setAttribute("loading", "lazy");
    nuevaImagen.setAttribute("src", "./img/img"+i+".webp");
    nuevaImagen.setAttribute("class", "content__image");
    nuevaImagen.setAttribute("alt", "Imagen "+i)

    ultimoArticle.appendChild(nuevaImagen);
}

/* Modal */

const gallery = document.querySelectorAll("#insertImg #contenedor")
previewBox = document.querySelector(".previewBox"),
previewImg = previewBox.querySelector("img"),
closeIcon = document.querySelector(".display__icon"),
currentImg = document.querySelector(".display__currentImg"),
totalImg = document.querySelector(".display__totalImg"),
shadow = document.querySelector(".shadow"),
details = document.querySelector(".details"),
previewInfo = document.querySelector(".descBox__name"),
titleInfo = document.querySelector(".display__title"),
//SelectInfo = document.querySelector(".nav-stick .logo a"),
//Icon = document.querySelector(".nav-stick .open i"),
// CIcono = document.querySelector(".nav-stick .open"),
// NavBody = document.querySelector(".nav-body");



window.onload = ()=>{

    // let categoria = document.getElementsByClassName("filter__button")[1].textContent;
    // console.log(categoria);

    // if (categoria == "Accesorios"){
    //     gallery.length = 3;
    //     i = 0;
    // } else if(categoria == "Tecnología"){
    //     gallery.length = 9;
    //     i = 4;
    // } else if(categoria == "Hogar"){
    //     gallery.length = 13;
    //     i = 10;
    // } else if(categoria == "Salud"){
    //     gallery.length = 17;
    //     i = 14;
    // } else{
    //     gallery.length = 22;
    //     i = 18;
    // }

    // console.log(gallery.length);
    // console.log(i);

    // nroImagenes = jsonData.forEach(function(img){
    //     console.log(img.categoria);
    //     if(img.categoria == categoria){
    //         gallery.length = 
    //     }
    // });

    //console.log(gallery);

    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let  newIndex = i
        let clickIngIndex;
        gallery[i].onclick = ()=>{

            clickIngIndex = newIndex;
            function preview(){
                currentImg.textContent = newIndex + 1;
                let selectImgUrl;
                let selectImgInfo;

                nroImagenes = jsonData.forEach(function(img){
                    if(img.nroImagen == newIndex){
                        selectImgInfo = img.desc;
                        selectImgUrl = img.url;
                    }
                });

                previewImg.src = selectImgUrl;
                previewInfo.innerHTML = selectImgInfo;
            
            }

            const prevBtn = document.querySelector(".imageBox__slide--prev");
            const NextBtn = document.querySelector(".imageBox__slide--next");

            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1){
                NextBtn.style.display = "none";
            }

            prevBtn.onclick = ()=>{
                newIndex--;
                if(newIndex == 0){
                    preview();
                    prevBtn.style.display = "none";
                }
                else{
                    preview();
                    NextBtn.style.display = "block";    
                }
            }

            NextBtn.onclick = ()=>{
                newIndex++;
                if(newIndex >= gallery.length - 1){
                    preview();
                    NextBtn.style.display = "none";
                }
                else{
                    preview();
                    prevBtn.style.display = "block";
                }
            }

            preview();
            previewBox.classList.add("show");
            shadow.style.display = "block";
            details.style.display = "block";

            closeIcon.onclick = ()=>{
                newIndex = clickIngIndex;
                prevBtn.style.display = "block";
                NextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                details.style.display = "none";
            }
        }
    }
}
