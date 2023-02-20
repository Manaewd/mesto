//попапы
const profilePopup = document.querySelector('.popup_edit_profile');
const cardPopup = document.querySelector('.popup_add-profile');
const popups = document.querySelectorAll('.popup');
//bbuttons
const profileEditOpen = document.querySelector('.profile__edit-button');
const submitButtonSelector = document.querySelector('.popup__button-save')
const closeButtons = document.querySelectorAll('.popup__button-close');
const profileAddImageOpen = document.querySelector('.profile__add-button');
//form
const popupEditForm = document.querySelector('.popup__form-edit');
const popupAddForm = document.querySelector('.popup__form-add');
//редактировать профиль
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupTitle = document.querySelector('.popup__item_type_name');
const popupSubtitle = document.querySelector('.popup__item_type_job');
//добавить element
const popupAddName = document.querySelector('.popup__item_add_name');
const popupAddUrl = document.querySelector('.popup__item_add_url');
const popupAddImage = document.querySelector('.popup_add-image');
const popupFullScreenImage = document.querySelector('.popup__image');
const popupDescription = document.querySelector('.popup__image-name');

function closeWithEscape(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    };
}
popups.forEach((popups) => {
    popups.addEventListener('click', (evt) => {
        if (evt.currentTarget === evt.target) {
            closePopup(evt.currentTarget);
        }
    });
});

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeWithEscape);
};
profileEditOpen.addEventListener('click', function openEditPopup() {
    openPopup(profilePopup);
    popupTitle.value = profileTitle.textContent;
    popupSubtitle.value = profileSubtitle.textContent;
});
profileAddImageOpen.addEventListener('click', function() {
    openPopup(cardPopup);
});
profileAddImageOpen.addEventListener('click', function addFormSubmit() {
    openPopup(cardPopup);
    const submitButtonSelector = cardPopup.querySelector('.popup__button-save')
    submitButtonSelector.setAttribute('disabled', true);
    submitButtonSelector.classList.add('popup__button-disabled');
})

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeWithEscape)
};
closeButtons.forEach(function(button) {
    const popup = button.closest('.popup');
    button.addEventListener('click', function() {
        closePopup(popup)
    });
});
popupEditForm.addEventListener('submit', function submit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupTitle.value;
    profileSubtitle.textContent = popupSubtitle.value;
    closePopup(profilePopup)
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
    mestoElement.querySelector('.element__image').src = link;
    mestoElement.querySelector('.element__image').setAttribute('alt', 'Фотография ' + name);
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
        popupFullScreenImage.src = link;
        popupDescription.textContent = name;
        popupFullScreenImage.setAttribute('alt', 'Фотография ' + name);
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
    closePopup(cardPopup);
})