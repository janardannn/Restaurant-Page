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

let home, menu, visit;

let makeHeader = () => {
    let brandBanner = document.createElement('h1');
    brandBanner.className = "header-brand-banner";
    brandBanner.innerText = "Meridian";

    let navBar = document.createElement('div');
    navBar.className = "header-nav-bar";

    home = document.createElement('button');
    home.className = "header-home-button";
    home.classList.add('tab-btn');
    home.innerText = "Home";

    menu = document.createElement('button');
    menu.className = "header-menu-button";
    menu.classList.add('tab-btn');
    menu.innerText = "Menu"

    visit = document.createElement('button');
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
    icon.src = "./resources/github.png";
    github.href = "https://github.com/janardannn/";
    github.target = "_blank";
    github.appendChild(icon);

    copyrightIcon.className = "footer-icon";
    copyrightIcon.appendChild(github)
    footerContainer.innerHTML = '';
    footerContainer.append(copyrightText, copyrightIcon);

    container.appendChild(footerContainer);
}

// let initializeWebsite = () => {
//     makeHeader();
//     makeHome(restaurantBody);
//     container.appendChild(restaurantBody);
//     makeFooter();
// }

// initializeWebsite();

makeHeader();

home.addEventListener('click', () => {
    let btns = document.querySelectorAll('.tab-btn');
    btns.forEach((e) => {
        if (e.classList.contains('active')) {
            e.classList.remove('active');
        }
    });
    home.classList.add('active');
    restaurantBody.innerHTML = '';
    makeHome(restaurantBody);
    container.appendChild(restaurantBody);
    makeFooter();
})

menu.addEventListener('click', () => {
    let btns = document.querySelectorAll('.tab-btn');
    btns.forEach((e) => {
        if (e.classList.contains('active')) {
            e.classList.remove('active');
        }
    });
    menu.classList.add('active');
    restaurantBody.innerHTML = '';
    makeMenu(restaurantBody);
    container.appendChild(restaurantBody);
    makeFooter();
})

visit.addEventListener('click', () => {
    let btns = document.querySelectorAll('.tab-btn');
    btns.forEach((e) => {
        if (e.classList.contains('active')) {
            e.classList.remove('active');
        }
    });
    visit.classList.add('active');
    restaurantBody.innerHTML = '';
    makeVisit(restaurantBody);
    container.appendChild(restaurantBody);
    makeFooter();
})

home.click();