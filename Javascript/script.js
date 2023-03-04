import { getPersonalData } from "./getPersonalData.js";
import { sectionPersonalData } from "./sectionPersonalData.js";
import { sectionInformation } from "./sectionInformation.js";
import { aIcons } from "./footer.js";

const buildPage = async () => {
    let obj = await getPersonalData();
    $(function () {
        sectionPersonalData(obj);
        sectionInformation(obj);
        aIcons(obj);
    })
}

buildPage();
