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
    restrauText.innerText = `Welcome to Meridian, where elegance meets culinary excellence. Our restaurant is the quintessential destination for an unforgettable dinner date experience. Savor the finest non-vegetarian platters and seafood dishes meticulously crafted by our world-class chefs. Book your table today and embark on a culinary journey that's nothing short of extraordinary."`;

    restaurantBrief.appendChild(restrauText);

    return restaurantBrief;
}

let makeSpeciality = () => {
    let restrauSpeciality = document.createElement('div');
    restrauSpeciality.className = "restrau-special";

    let specialImage = document.createElement('img');
    specialImage.className = "restrau-special-image";
    specialImage.src = "./resources/special_dish.jpg";

    let specialText = document.createElement('div');
    specialText.classList.add('restrau-special-text');

    let dishTitle = document.createElement('h3');
    dishTitle.className = "restrau-special-title";
    dishTitle.innerText = "Châteaubriand Steak";

    let dishDescription = document.createElement('div');
    dishDescription.className = "restrau-special-description";
    let dishDescText = document.createElement('p');
    dishDescText.innerText = `Indulge in the romantic atmosphere of Meridian with our specialty, the Châteaubriand steak for two. This magnificent dish features a succulent center-cut beef tenderloin, perfectly roasted and carved tableside. Served with a rich Béarnaise sauce, roasted seasonal vegetables, and truffle-infused mashed potatoes, it's a dish designed to be shared, making it the perfect choice for a romantic dinner date, where you and your partner can savor the flavors together.`;
    dishDescription.appendChild(dishDescText);

    specialText.append(dishTitle, dishDescription)

    restrauSpeciality.appendChild(specialImage);
    restrauSpeciality.appendChild(specialText);

    return restrauSpeciality;

}

let makeWorkingData = () => {
    let workingDaysAndTime = document.createElement('div');
    workingDaysAndTime.classList = "working-days";
    let workData = document.createElement('p');
    workData.innerText = "We are open from Monday to Friday from 4 PM to 2 AM";
    workingDaysAndTime.appendChild(workData);
    return workingDaysAndTime;
}
let makeHome = (component) => {
    let banner = makeBanner();
    let restaurantBrief = makeBreif();
    let restrauSpeciality = makeSpeciality();
    let workingData = makeWorkingData();

    component.append(banner, restaurantBrief, restrauSpeciality, workingData);
};

export default makeHome;