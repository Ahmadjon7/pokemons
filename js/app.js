"use strict";

pokemons.forEach(pokemon =>{
    const div = document.createElement('div');
    div.classList.add('card', 'shadow', 'my-2');
    div.innerHTML =
    `<img src = " ${pokemon.img}" width = "157px" height = "180px">
    <hr>
     <div class ="box d-flex justify-content-center w-100 ms-10 pb-4 py-2">
        <p class='d-flex justify-content-between w-100 p-0 m-0 align-items-center'><span><b>${pokemon.id}.</b> ${pokemon.name}</span>  <i class="fa-regular fa-heart child"></i></p>
        <p class='m-0 p-0 '>
            <b>${pokemon.weight}</b>  <b class="ms-3">${pokemon.height}</b>
        </p>
        </div>`

    $('.wrapper').appendChild(div)
})


const findPokemon = (regexp)=>{
    // console.log(regexp)
    return pokemons.filter((pokemon) =>{
        return pokemon.name.match(regexp)
    })
}


$('.input-keys').addEventListener('keyup',()=>{
    $('.wrapper').innerHTML = '<div class="spinner"></div>'

    const serchValue = $('.input-keys').value;

    const regexp = new RegExp(serchValue ,'gi')

    const serchResult = findPokemon(regexp)

    setTimeout(() => {
        if (serchResult.length > 0) {
            serchResultRender(serchResult);
           $(".card-res").classList.remove("d-none");
           console.log(serchResult.length);
           $("#res").innerHTML = `<strong >${serchResult.length}</strong> ta ma'lumot topildi`;
        } else {
           $(".card-res").classList.add("d-none");
           $(".wrapper").innerHTML = `<h1 class="text-center text-danger">MA'LUMOT TOPILMADI</h1>`;
        }
     }, 2000);

    if(serchResult.length > 0){
        serchResultRender(serchResult)
    }else{
    }

})

    function serchResultRender(data=[]){
        $('.wrapper').innerHTML = ""
        data.forEach((el) =>{
            const div = document.createElement('div');
            div.classList.add('card', 'shadow', 'my-2');
            div.innerHTML =
            `<img src = " ${el.img}" width = "157px" height = "180px">
            <hr>
             <div class ="box d-flex justify-content-center w-100 ms-10 pb-4 py-2">
                <p class='d-flex justify-content-between w-100 p-0 m-0 align-items-center'><span><b>${el.id}.</b> ${el.name}</span>  <i class="fa-regular fa-heart child"></i></p>
                <p class='m-0 p-0 '>
                    <b>${el.weight}</b>  <b class="ms-3">${el.height}</b>
                </p>
            </div>

            `
        
            $('.wrapper').appendChild(div)
        })
    }

