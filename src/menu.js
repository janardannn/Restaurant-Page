let makeBanner = () => {
    let banner = document.createElement('div');
    banner.className = "banner";
    let bannerText = document.createElement('h1');
    bannerText.className = "banner-text"
    bannerText.innerText = "Meridian - the place for that special night!";

    banner.appendChild(bannerText);

    return banner;
}

let makeBreif = () => {
    let restaurantBrief = document.createElement('div');
    restaurantBrief.className = "restrau-brief";
    let restrauText = document.createElement('div');
    restrauText.className = "restrau-brief-text";
    restrauText.innerText = `Page under construction. Will be UP soon!"`;

    restaurantBrief.appendChild(restrauText);

    return restaurantBrief;
}

let makeWorkingData = () => {
    let workingDaysAndTime = document.createElement('div');
    workingDaysAndTime.classList = "working-days";
    let workData = document.createElement('p');
    workData.innerText = "We are open from Monday to Friday from 4 PM to 2 AM.";
    workingDaysAndTime.appendChild(workData);
    return workingDaysAndTime;
}
let makeMenu = (component) => {
    let banner = makeBanner();
    let restaurantBrief = makeBreif();
    // let restrauSpeciality = makeSpeciality();
    let workingData = makeWorkingData();

    component.append(banner, restaurantBrief, workingData);
};

export default makeMenu;