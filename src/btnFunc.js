import makeHome from "./home";

const body = document.body;
const container = document.querySelector('#container');
let btns = document.querySelectorAll('tab-btn');

let home_button = (restaurantBody) => {
    btns.forEach((e) => {
        if (e.classList.contains('active')) {
            e.classList.remove('active');
        }
    });

    let home = document.querySelector('header-home-button');
    home.classList.add('active');
    makeHome(restaurantBody);
    container.append(restaurantBody)
}

export default home_button;