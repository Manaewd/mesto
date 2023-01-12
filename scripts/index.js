const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupContent = document.querySelector('.popup__content');
let popupName = popupContent.querySelector('.popup__item_type_name');
let popupJob = popupContent.querySelector('.popup__item_type_job');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupName.value;
    profileSubtitle.textContent = popupJob.value;
    closePopup();
}
const openPopup = function() {
    popupElement.classList.add('popup_opened');
    popupName.value = profileTitle.textContent;
    popupJob.value = profileSubtitle.textContent;
}
const closePopup = function() {
    popupElement.classList.remove('popup_opened');
}
popupContent.addEventListener('submit', handleFormSubmit);
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);