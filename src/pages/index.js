import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
// import PopupWithSubmit from '../components/PopupWithSubmit.js';
import '../pages/index.css';

import { formValidationConfig } from '../utils/elements.js';
import { profileForm, popupAddForm, popupEditProfileOpen, profileAddImageOpen } from '../utils/constants.js';

// Экземпляр поапа картинки
const popupImage = new PopupWithImage('.popup_add-image')

export function handleCardClick(name, link) {
  popupImage.open(name, link)
}

const popupFormEditValidator = new FormValidator(formValidationConfig, profileForm);
const validationAddCard = new FormValidator(formValidationConfig, popupAddForm );

popupFormEditValidator.enableValidation();
validationAddCard.enableValidation();

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: '086b5009-a20c-4a53-9a96-989f60c0bcfe',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({
  selectorName: '.profile__title',
  selectorJob: '.profile__subtitle',
  selectorAvatar: '.profile__image'
});

// Рендер данных с сервера
Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([data, cards]) => {
  userId = data._id;
  userInfo.setUserInfo(data);
  cardSections.renderItems(cards)
})
.catch((err) => console.log(err))

let userId;

//+ Функция создания экземпляра карточки
function createCard(data, templateSelector, openPopup, userId) {
  const card = new Card(data, templateSelector, openPopup,
    () => {
      api.deleteCard(data._id)
      .then(() =>{
        card.deleteCard()
      }).catch((err) => console.log(err))
    },
    () => { 
      if (!card.isLiked()) {
      api.likeCard(data._id)
      .then((data) => {
        card.updateLikeState(data)
        card.updateLengthLikes()
      })
      .catch((err) => console.log(err))
    } else {
      api.deleteLike(data._id)
      .then((data) => {
        card.updateLikeState(data)
        card.updateLengthLikes()
      })
      .catch((err) => console.log(err))
    }},
    userId);
    
  const cardElement = card.generateCard();

  return cardElement
}

// const popupEditForm = new PopupWithForm({
//   handleSubmitForm: (data) => {
//     userInfo.setUserInfo({
//       name: data.profilename,
//       job: data.profilejob
//     });
//   }
// }, '.popup_edit_profile')

//+ // Экземпляр попапа добавления картинки
const popupEditForm = new PopupWithForm({
  handleSubmitForm: (data) => {
    //  popupEditForm.renderLoading(true)
    api.setUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupEditForm.close();
    })
    .catch((err) => console.log(err))
    // .finally(() => popupEditForm.renderLoading(false));
  }
}, '.popup_edit_profile')

popupEditProfileOpen.addEventListener('click', () => {
  const profileEdit = userInfo.getUserInfo();
  popupEditForm.open();
  popupEditForm.setInputValues(profileEdit);
  popupFormEditValidator.resetValidation();
})

// Создание экземпляра секции
const cardSections = new Section({
  renderer: (item) => {
    cardSections.addItem(createCard(item, '.template', handleCardClick, userId));
  }
}, '.elements')


// const addCardFormSubmit = new PopupWithForm({
//   handleSubmitForm: (item) => {
//     api.cardSections.prependItem((createCard(item, '.template', handleCardClick)));
//   }
// }, '.popup_add-profile')

// +
const addCardFormSubmit = new PopupWithForm({
  handleSubmitForm: (item) => {
    // addCardFormSubmit.renderLoading(true)
    api.addNewCard(item)
      .then((item) => {
        cardSections.prependItem((createCard(item, '.template', handleCardClick, userId)));
        addCardFormSubmit.close();
      })
      .catch((err) => console.log(err))
      // .finally(() => addCardFormSubmit.renderLoading(false));
  }
}, '.popup_add-profile')




profileAddImageOpen.addEventListener('click', function openTypeAddPhotoPopup() {

  validationAddCard.resetValidation();
  addCardFormSubmit.open();
})

popupImage.setEventListeners();
popupEditForm.setEventListeners();
addCardFormSubmit.setEventListeners();