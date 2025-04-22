const renderContact = function(){
    const container = document.querySelector('.content');
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    const addressHeader = document.createElement('h2');
    addressHeader.textContent = "Address";
    const address = document.createElement('p');
    address.textContent = "Fort Beach, Kochi, Kerala"
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = "Contact us at"
    const contact = document.createElement('div');
    contact.innerHTML = "<p>8838820173</p> <p>5637392031</p> <p>SoupnSmokeKochi@gmail.com</p>";
    container.appendChild(addressHeader);
    container.appendChild(address);
    container.appendChild(contactHeader);
    container.appendChild(contact);
}

export {renderContact};