export const formValidationConfig = {
    // formSelector: '.popup__form',
    inputSelector: '.popup__item',
    errorClass: 'popup__item_type_error',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-disabled',
};

export const profileForm = document.querySelector('.popup__form-edit');
export const popupAddForm = document.querySelector('#form-add-card');
export const popupEditProfileOpen = document.querySelector('.profile__edit-button');
export const profileAddImageOpen = document.querySelector('.profile__add-button');


export const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];