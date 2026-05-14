var sidenav=document.querySelector('.side-navbar')

function showNavbar(){
    sidenav.style.left="0"

}

function closenavbar(){
    sidenav.style.left="-60%"

}

const search = document.getElementById("search");

const products = document.querySelectorAll(".product");

search.addEventListener("keyup", () => {

  let value = search.value.toLowerCase();

  products.forEach(product => {

    let name = product.dataset.name.toLowerCase();

    if(name.includes(value)){
      product.style.display = "block";
    }
    else{
      product.style.display = "none";
    }

  });

});