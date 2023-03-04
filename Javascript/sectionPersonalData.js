const divNameimg = (obj) => {
    $("#nameimg").html(`<img class="w-60 h-60 rounded-full max-w-full" src="${obj.urlimg}" alt="Foto de Perfil"></img>`);
    $("#nameimg").append(`<h1 class="text-textname text-3xl text-center">${obj.name}</h1>`);
    $("#nameimg").append(`<h3 class="text-textsubtitle text-2xl font-bold">${obj.subtitle}</h3>`);
}

const divData = (obj) => {
    $("#data").append($("<ul class='text-data'></ul>").html(obj.data.map( (x) => {
        if(x.url === ""){
            return `<li>${x.label}: ${x.input}</li>`
        }else{
            return `<li>${x.label}: <a class="text-textlinksdata hover:text-texthoverlinksdata" href=${x.url}>${x.input}</a></li>`
        }
    })))
}

export const sectionPersonalData = (obj) => {
    divNameimg(obj);
    divData(obj);
}