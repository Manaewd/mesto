import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, formValidationConfig } from './validate.js'

//попапы
const profilePopup = document.querySelector('.popup_edit_profile');
const cardPopup = document.querySelector('.popup_add-profile');
const popups = document.querySelectorAll('.popup');
//buttons edit
const profileEditOpen = document.querySelector('.profile__edit-button');
//save
const submitButtonSelector = document.querySelector('.popup__button-save')
//close
const closeButtons = document.querySelectorAll('.popup__button-close');
//add open
const profileAddImageOpen = document.querySelector('.profile__add-button');
//form
const popupEditForm = document.querySelector('.popup__form-edit');
const popupAddForm = document.querySelector('#form-add-card');
//редактировать профиль add
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
//редактировать профиль edit
const popupTitle = document.querySelector('.popup__item_type_name');
const popupSubtitle = document.querySelector('.popup__item_type_job');
// popup add 
const popupAddName = document.querySelector('.popup__item_add_name');
const popupAddUrl = document.querySelector('.popup__item_add_url');

//FullScreenImage
const popupAddImage = document.querySelector('.popup_add-image');
const popupFullScreenImage = document.querySelector('.popup__image');
const popupDescription = document.querySelector('.popup__image-name');

//закрыть попап по Esc
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

// //открыть попап
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeWithEscape);
};

// //закрыть попап
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

// //открытие profile
profileEditOpen.addEventListener('click', function openEditPopup() {
    openPopup(profilePopup);
    popupTitle.value = profileTitle.textContent;
    popupSubtitle.value = profileSubtitle.textContent;
    popupFormEditValidator.resetValidation();
});

// //открытие add
// profileAddImageOpen.addEventListener('click', function() {
//     openPopup(cardPopup);
// });

profileAddImageOpen.addEventListener('click', function openTypeAddPhotoPopup() {
    popupAddForm.reset();
    popupFormAddValidator.resetValidation();
    openPopup(cardPopup);
  })

popupEditForm.addEventListener('submit', function submit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupTitle.value;
    profileSubtitle.textContent = popupSubtitle.value;
    closePopup(profilePopup)
});
  
  function handleCardClick (name, link) {
    openPopup(popupAddImage);
    popupDescription.textContent = name;
    popupFullScreenImage.src = link;
    popupDescription.textContent = name;
    openPopup(popupFullScreenImage);
  };
  
  const mestoElements = document.querySelector('.elements');
  initialCards.forEach((item) => {
    mestoElements.append(createCard(item, '.template', handleCardClick));
  })
  
  function createCard(data, templateSelector, handleCardClick) {
    const card = new Card(data, templateSelector, handleCardClick);
    const cardElement = card.generateCard();
  
    return cardElement
  }

  popupAddForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const data = {};
  data.link = popupAddUrl.value;
  data.name = popupAddName.value;
  
  mestoElements.prepend(createCard(data, '.template', handleCardClick));
  popupAddForm.reset();

  closePopup(cardPopup);
})

const popupFormEditValidator = new FormValidator(formValidationConfig, popupEditForm);
popupFormEditValidator.enableValidation();

const popupFormAddValidator = new FormValidator(formValidationConfig, popupAddForm);
popupFormAddValidator.enableValidation();