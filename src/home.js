let makeHome = (body) => {
    let banner = document.createElement('div');
    banner.className = "banner";
    let bannerText = document.createElement('h1');
    bannerText.className = "banner-text"
    bannerText.innerText = "Meridian - the place for that special night!";
    banner.appendChild(bannerText);

    let restaurantBrief = document.createElement('div');
    restaurantBrief.className = "restrau-brief";
    let restrauText = document.createElement('div');
    restrauText.className = "restrau-brief-text";
    restrauText.innerText = `Welcome to Meridian, where elegance meets culinary excellence. Our restaurant is the quintessential destination for an unforgettable dinner date experience. Our menu is a testament to our commitment to quality and indulgence. Savor the finest non-vegetarian platters and seafood dishes meticulously crafted by our world-class chefs. Indulge in the finer things in life at Meridian, where every visit is an ode to opulence. Book your table today and embark on a culinary journey that's nothing short of extraordinary."`;

    restaurantBrief.appendChild(restrauText);

    let restrauSpeciality = document.createElement('div');
    restrauSpeciality.className = "restrau-special";

    let specialImage = document.createElement('div');
    specialImage.className = "restrau-special-image";
    let img = document.createElement('img');
    img.src = "";
    specialImage.appendChild(img);

    let dishTitle = document.createElement('div');
    dishTitle.className = "restrau-special-title";
    let dishTitleText = document.createElement('p');
    dishTitleText.innerText = "Châteaubriand Steak";
    dishTitle.appendChild(dishTitleText);

    let dishDescription = document.createElement('div');
    dishDescription.className = "restrau-special-description";
    let dishDescText = document.createElement('p');
    dishDescText.innerText = `Indulge in the romantic atmosphere of Meridian with our specialty, the Châteaubriand steak for two. This magnificent dish features a succulent center-cut beef tenderloin, perfectly roasted and carved tableside. Served with a rich Béarnaise sauce, roasted seasonal vegetables, and truffle-infused mashed potatoes, it's a dish designed to be shared, making it the perfect choice for a romantic dinner date, where you and your partner can savor the flavors together.`;
    dishDescription.appendChild(dishDescText);

    restrauSpeciality.appendChild(specialImage, dishTitle, dishDescription);

    let workingDaysAndTime = document.createElement('div');
    workingDaysAndTime.classList = "working-days";
    let workData = document.createElement('p');
    workData.innerText = "We are open on Monday to Friday from 4 PM to 2 AM";
    workingDaysAndTime.appendChild(workData);

    body.append(banner, restaurantBrief, restrauSpeciality, workingDaysAndTime);
};

export default makeHome;