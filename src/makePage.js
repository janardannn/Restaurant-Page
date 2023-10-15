import makeHome from "./home";
import makeMenu from "./menu";
import makeVisit from "./visit_us";

const container = document.querySelector('#container');

let headerContainer = document.createElement('div');
headerContainer.className = "header-container";

let restaurantBody = document.createElement('div');
restaurantBody.className = "restaurant-body";

let footerContainer = document.createElement('div');
footerContainer.className = "footer-container";

let makeHeader = () => {
    let brandBanner = document.createElement('h1');
    brandBanner.className = "header-brand-banner";
    brandBanner.innerText = "Meridian";

    let navBar = document.createElement('div');
    navBar.className = "header-nav-bar";

    let home = document.createElement('button');
    home.className = "header-home-button";
    home.classList.add('tab-btn');
    home.innerText = "Home"

    let menu = document.createElement('button');
    menu.className = "header-menu-button";
    menu.classList.add('tab-btn');
    menu.innerText = "Menu"

    let visit = document.createElement('button');
    visit.className = "header-visit-button";
    visit.classList.add('tab-btn');
    visit.innerText = "Visit Us"

    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(visit);

    headerContainer.appendChild(brandBanner);
    headerContainer.appendChild(navBar);

    container.appendChild(headerContainer);

};

let makeFooter = () => {
    let copyrightText = document.createElement('p');
    copyrightText.innerText = "Copyright © 2023 janardannn";
    copyrightText.className = "footer-textbox";

    let copyrightIcon = document.createElement('div');

    let github = document.createElement('a');
    let icon = document.createElement('img');
    icon.src = "../resources/github.png";
    github.href = "https://github.com/janardannn/";
    github.target = "_blank";
    github.appendChild(icon);

    copyrightIcon.className = "footer-icon";
    copyrightIcon.appendChild(github)

    footerContainer.append(copyrightText, copyrightIcon);

    container.appendChild(footerContainer);
}

let initializeWebsite = () => {
    makeHeader();
    makeHome(restaurantBody);
    container.appendChild(restaurantBody);
    makeFooter();
}

export default initializeWebsite;