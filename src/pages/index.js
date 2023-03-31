import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import '../pages/index.css';



import { initialCards, formValidationConfig } from '../components/constants.js';
import { profileForm, popupAddForm, popupEditProfileOpen, profileAddImageOpen } from '../components/constants.js';

const popupFormEditValidator = new FormValidator(formValidationConfig, profileForm);
popupFormEditValidator.enableValidation();

const validationAddCard = new FormValidator(formValidationConfig, popupAddForm );
validationAddCard.enableValidation();


const popupImage = new PopupWithImage('.popup_add-image')

function createCard(data, templateSelector, openPopup) {
  const card = new Card(data, templateSelector, openPopup);
  const cardElement = card.generateCard();


  return cardElement
}

export function handleCardClick(name, link) {
  popupImage.open(name, link)
}

const userInfo = new UserInfo({
  selectorName: '.profile__title',
  selectorJob: '.profile__subtitle'
});
 
const popupEditForm = new PopupWithForm({
  handleSubmitForm: (data) => {
    userInfo.setUserInfo({
      name: data.userName,
      job: data.userJob
    });
  }
}, '.popup_edit_profile')


popupEditProfileOpen.addEventListener('click', () => {
  const profileEdit = userInfo.getUserInfo();
  popupEditForm.open();
  popupEditForm.setInputValues(profileEdit);
  popupFormEditValidator.resetValidation();
})


const cardSections = new Section({
  data: initialCards,
  renderer: (item) => {
    cardSections.addItem(createCard(item, '.template', handleCardClick));
  }
}, '.elements')

cardSections.renderItems();

const addCardFormSubmit = new PopupWithForm({
  handleSubmitForm: (item) => {
    cardSections.prependItem((createCard(item, '.template', handleCardClick)));
  }
}, '.popup_add-profile')


profileAddImageOpen.addEventListener('click', function openTypeAddPhotoPopup() {

  validationAddCard.resetValidation();
  addCardFormSubmit.open();
})

popupImage.setEventListeners();
popupEditForm.setEventListeners();
addCardFormSubmit.setEventListeners();






















// const popupImage = new PopupWithImage('.popup_add-image');

//   //создание карточки
//   const createCard = (data) => {
//     const card = new Card(data, '.template', () => {
//         popupImage.open(data);
//     });

//     return card.generateCard();
//   }
// // создание новой секции
//   const cardSection = new Section({
//     renderer: (card) => {
//         cardSection.addItem(createCard(card));
//     },
//   }, '.elements'
//   );
//   cardSection.renderItems(initialCards);

// // кнопки открытия попап
// const profileEditOpen = document.querySelector('.profile__edit-button');
// const profileAddImageOpen = document.querySelector('.profile__add-button');

// // получение формы
// const userInfo = new UserInfo({
//     selectorName: '.profile__title',
//     selectorJob: '.profile__subtitle'
//   })

// // создание попап редактирования
// const popupEditForm = new PopupWithForm('.popup_edit_profile',
// {
//     handleSubmitForm: (name, job) => {
//       userInfo.setUserInfo({ name, job });
//     }
//   });
//   popupEditForm.setEventListeners();

// // открытие попап редактирования
//   profileEditOpen.addEventListener('click', () => {
//     popupEditForm.open();
//   });

// // создание попап добавления карточки
//   const popupAddForm = new PopupWithForm('.popup_add-profile', {
//     handleSubmitForm: ({ name, link }) => {
//       const card = createCard()
//     cardSection.addItem(createCard({
//         name: name,
//         link: link,
//         alt: name
//     }))
//     }
//   })

//   // открытие попап добавления карточки
//   profileAddImageOpen.addEventListener('click', () => {
//     popupAddForm.open();
//   })

// popupImage.setEventListeners();

// popupAddForm.setEventListeners();




// const popupFormEditValidator = new FormValidator(formValidationConfig, popupEditForm);
// popupFormEditValidator.enableValidation();

// const popupFormAddValidator = new FormValidator(formValidationConfig, popupAddForm);
// popupFormAddValidator.enableValidation();
