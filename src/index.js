const body = document.body;

let div = document.createElement('div');
div.className = "restaurant-body";

let mainPage = () => {
    
};

let mainPageButton = document.createElement('button');
mainPageButton.onclick = mainPage;
mainPageButton.innerText = "Homepage";

body.append(mainPageButton);

mainPageButton.click();