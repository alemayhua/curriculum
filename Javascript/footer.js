export const aIcons = (obj) => {
    $("#footer").html(obj.icons.map( x => 
        `<a href="${x.url}" target="_blank" class="fa fa-${x.icon} text-3xl text-icons rounded-2xl leading-[60px] w-[60px] h-[60px] text-center bg-bgicons shadow-red-500 duration-500 hover:scale-110"></a>`
    ))
}