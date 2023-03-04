export const getPersonalData = async () => {
    try {
        const resObj = await fetch('Json/personaldata.json');
        const obj = await resObj.json();
        return obj;
    } catch (error) {
        console.log(error);
    }
}