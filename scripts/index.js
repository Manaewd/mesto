//попапы
const popupEditProfile = document.querySelector('.popup_edit_profile');
const popupAddProfile = document.querySelector('.popup_add-profile');
//btn открыть
const popupOpnBtnElement = document.querySelector('.profile__edit-button');
const popupAddButton = document.querySelector('.profile__add-button');
//btn закрыть
const popupCloseButton = document.querySelectorAll('.popup__close');
//form
const popupEditForm = document.querySelector('.popup__content');
const popupAddForm = document.querySelector('.popup__add-card');
//редактировать профиль
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupTitle = document.querySelector('.popup__item_type_name');
const popupSubtitle = document.querySelector('.popup__item_type_job');
//добавить element
const popupAddName = document.querySelector('.popup__item_add_name');
const popupAddUrl = document.querySelector('.popup__item_add_url');
const popupAddImage = document.querySelector('.popup_add-image');
const popupImage = document.querySelector('.popup__image');
const popupImageName = document.querySelector('popup__image-name');

function openPopup(popup) {
    popup.classList.add('popup_opened');
};
popupOpnBtnElement.addEventListener('click', function openEditPopup() {
    openPopup(popupEditProfile);
    popupTitle.value = profileTitle.textContent;
    popupSubtitle.value = profileSubtitle.textContent;
});
popupAddButton.addEventListener('click', function() {
    openPopup(popupAddProfile);
});

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};
popupCloseButton.forEach(function(button) {
    const popup = button.closest('.popup');
    button.addEventListener('click', function() {
        closePopup(popup)
    });
});
popupEditForm.addEventListener('submit', function submit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupTitle.value;
    profileSubtitle.textContent = popupSubtitle.value;
    closePopup(popupEditProfile)
});
const initialCards = [{
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
const mestoElements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#template').content;

function mestoElement(name, link) {
    const mestoElement = elementTemplate.cloneNode(true);
    mestoElement.querySelector('.element__title').textContent = name;
    mestoElement.querySelector('.element__image').alt = name;
    mestoElement.querySelector('.element__image').src = link;
    const trashButton = mestoElement.querySelector('.element__trash-button');
    trashButton.addEventListener('click', function(evt) {
        evt.target.closest('.element').remove();
    })
    const elementButton = mestoElement.querySelector('.element__button');
    elementButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__button_type_active');
    })
    const elementImage = mestoElement.querySelector('.element__image');
    elementImage.addEventListener('click', function() {
        openPopup(popupAddImage);
        popupImage.src = link;
        popupImageName.textContent = name;
    })
    return mestoElement;
}
initialCards.forEach(function(ele) {
    mestoElements.append(mestoElement(ele.name, ele.link));
});
popupAddForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    mestoElements.prepend(mestoElement(popupAddName.value, popupAddUrl.value));
    evt.target.reset();
    closePopup(popupAddProfile);
})