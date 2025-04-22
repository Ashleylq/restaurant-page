const renderMenu = function(){
    const container = document.querySelector('.content');
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    const menu = document.createElement('div');
    const potatoes = document.createElement('div');
    potatoes.setAttribute('class', 'potatoes');
    potatoes.innerHTML = "<h2>Jacket Potatoes</h2> <ul><li>The Classic - <span>Cheddar cheese & chives</span></li> <li>Beach BBQ Spud - <span>Pulled pork, BBQ sauce, crispy onions</span></li> <li>Smoky Chili Spud - <span>Beef chili, sour cream, jalapenos</span></li> <li>Veggie Loaded - <span>Roasted veggies, feta, pesto drizzle</span></li> <li>Tuna Melt - <span>Tuna mayo, melted cheddar</span></li></ul>"
    const soups = document.createElement('div');
    soups.innerHTML = "<h2>Soups</h2> <ul><li>Creamy Tomato Basil</li> <li>Loaded Potato & Bacon</li> <li>Coastal Corn Chowder</li> <li>Spicy BBQ Bean</li></ul>";
    const BBQ = document.createElement('div');
    BBQ.innerHTML = "<h2>BBQ</h2> <ul><li>Pulled Pork Sandwich</li> <li>Smoked Brisket Plate</li> <li>BBQ Chicken Wings</li> <li>Jackfruit BBQ</li> <li>Ribs & Spuds Combo</li></ul>"
    container.appendChild(menu);
    menu.appendChild(potatoes);
    menu.appendChild(soups);
    menu.appendChild(BBQ);
}

export {renderMenu};