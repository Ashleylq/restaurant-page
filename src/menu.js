const renderMenu = function(){
    const container = document.querySelector('.content');
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu')
    const potatoes = document.createElement('div');
    potatoes.setAttribute('class', 'potatoes');
    potatoes.innerHTML = "<h2>Jacket Potatoes</h2> <ul><li>The Classic - Cheddar cheese & chives</li> <li>Beach BBQ Spud - Pulled pork, BBQ sauce, crispy onions</li> <li>Smoky Chili Spud - Beef chili, sour cream, jalapenos</li> <li>Veggie Loaded - Roasted veggies, feta, pesto drizzle</li> <li>Tuna Melt - Tuna mayo, melted cheddar</li></ul>"
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