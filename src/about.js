const renderAboutPage = function(){
    const container = document.querySelector('.content');
    const heading = document.createElement('h1');
    heading.textContent = "Soup 'n smoke";
    heading.setAttribute("class", "heading");
    const about = document.createElement('p');
    about.textContent = `Right off the beach and full of flavor—that’s Soup ‘n Smoke. We’re your go-to chill spot for hearty soups, smoky BBQ, and fully loaded jacket potatoes. Whether you're sandy from the surf or just soaking in the sea breeze, swing by for good eats and laid-back vibes. No dress code, no rush—just comfort food done right by the coast.`;
    about.setAttribute("class", "about");
    container.appendChild(heading);
    container.appendChild(about);
}

export {renderAboutPage};