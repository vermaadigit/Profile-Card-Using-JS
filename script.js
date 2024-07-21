const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//Modal Opening Function

const openModal = () => {
    console.log('Modal is Open');
    modal.classList.add("active");  
    overlay.classList.add("overlayactive");    
}

//Modal Closing Function

const closeModal = () => {
    modal.classList.remove("active");
    modal.classList.remove("overlayactive");
}