const ulAbilities = (obj) => {
    $("#abilities").append($("<ul class='w-max text-xl text-textabilities font-bold list-disc'></ul>").html(obj.abilities.map(x =>
        (x.list.length === 0)
            ?
            `<li id="ab${x.id}"><span>${x.name}</span></li>`
            :
            `<li id="ab${x.id}"><span class="cursor-pointer">${x.name} ▼</span></li>`
    )));
}

const subUlAbilities = (obj) => {
    obj.abilities.forEach((x, i) => {
        if (x.list.length === 0) return;
        $(`#ab${i}`).append($("<ul class='bg-bgsubabilities text-textsubabilities p-[10px] hidden'></ul>").html(x.list.map((y, index) => {
            if (y.sublist.length === 0) {
                return `<li id="li${index}" class="before:content-['■_']"><span>${y.subname}</span></li>`
            } else {
                const sublist = y.sublist.map(e => `<li class="before:content-['¤_']">${e}</li>`)
                return `<li id="li${index}"><span class="cursor-pointer before:content-['■_']" >${y.subname} ▼</span>
                <ul class="bg-bgsubsubabilities text-textsubsubabilities w-max p-[10px] ml-[20px] hidden">
                ${sublist.join("")}
                </ul>
                </li>`
            }
        })))
    });
}


const setToggle = (tagClick, ulToggle, name) => {
    $(tagClick).click(function () {
        $(ulToggle).slideToggle(500, () => {
            if ($(ulToggle).is(":hidden")) {
                $(tagClick).text(`${name} ▼`)
            }
        })
        if ($(ulToggle).is(":visible")) {
            $(tagClick).text(`${name} -`)
        }
    })
}

const toggleUl = (obj) => {
    obj.abilities.forEach((x, i) => {
        if (x.list.length > 0) {
            setToggle(`#ab${i} > span`, `#ab${i} > ul`, obj.abilities[i].name);
        } else {
            return;
        }
    });
}

const subToggleUl = (obj) => {
    obj.abilities.forEach((x, i) => {
        x.list.forEach((e, index) => {
            if (e.sublist.length > 0) {
                setToggle(`#ab${i} > ul > #li${index} > span`, `#ab${i} > ul > #li${index} > ul`, e.subname)
            } else {
                return;
            }
        })
    });
}

const divAbilities = (obj) => {
    $("#abilities").html(`<h3 class='text-3xl text-texttitleabilities font-bold text-center m-[20px]'>${obj.informationtitles[0]}</h3>`);
    ulAbilities(obj);
    subUlAbilities(obj);
    toggleUl(obj);
    subToggleUl(obj);
}

const divProfile = (obj) => {
    $("#profile").html(`<h3 class='text-3xl text-texttitleprofile font-bold text-center m-[20px]'>${obj.informationtitles[1]}</h3>`);
    $("#profile").append($("<p class='text-textprofiletext'></p>").html(obj.profile));
}

const divEducation = (obj) => {
    $("#education").html(`<h3 class='text-3xl text-texttitleeducation font-bold text-center m-[20px]'>${obj.informationtitles[2]}</h3>`);
    $("#education").append(obj.education.map(x =>
        $(`<div id="edu${x.id}" class="text-center"></div>`).append(`<h3 class="text-center text-texteducationtitles font-bold text-xl mt-[15px]">${x.name}</h3>
        <h5 class="text-lg text-texteducationlocation my-[5px] italic">${x.location}</h5>
        <h6 class="text-texteducationstatus mb-[50px]">${x.status}</h6>`
        )));
}

const divExperience = (obj) => {
    $("#experience").html(`<h3 class='text-3xl text-texttitleexperience font-bold text-center m-[20px]'>${obj.informationtitles[3]}</h3>`);
    $("#experience").append(obj.experience.map(x =>
        $(`<div id="exp${x.id}" class="text-center"></div>`).append(`<h3 class="text-textexperiencetitles font-bold text-xl mt-[15px]">${x.job}</h3>
        <h5 class="text-lg text-textexperiencecompany my-[5px] italic">${x.company}</h5>
        <h6 class="text-textexperiencedate mb-[50px]">${x.date}</h6>`
        )));
}

const divOthers = (obj) => {
    if (obj.othersdatas.length > 0) {
        $("#others").html(`<h3 class='text-3xl text-texttitleothers font-bold text-center m-[20px]'>${obj.informationtitles[4]}</h3>`);
        $("#others").append(obj.othersdatas.map(x =>
            $(`<div id="others${x.id}" class="text-center"></div>`).append(`<h3 class="text-textothersdatatitle font-bold text-xl mt-[15px]">${x.label}</h3>
        <h5 class="text-lg text-textothersdatainput mb-[50px] italic">${x.input}</h5>`
            )));
    }
}


export const sectionInformation = (obj) => {
    divAbilities(obj);
    divProfile(obj);
    divEducation(obj);
    divExperience(obj);
    divOthers(obj);
}
