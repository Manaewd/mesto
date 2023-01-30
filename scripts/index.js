const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// добавление карточек при загрузки
const cardElement = document.querySelector('.elements');
const template = document.querySelector('#template').content;

initialCards.forEach(function (element) {
    const task = template.cloneNode(true);

    task.querySelector('.element__title').textContent = element.name;
    task.querySelector('.element__image').alt = element.name;
    task.querySelector('.element__image').src = element.link;

    cardElement.append(task);
});

// popup_edit_profile + popup_add-profile
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupContent = document.querySelector('.popup__content');
const popupName = popupContent.querySelector('.popup__item_type_name');
const popupJob = popupContent.querySelector('.popup__item_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popupOpenAddProfile = document.querySelector('.profile__add-button');

const openPopup = function() {
    popupElement.classList.add('popup_opened');
    popupName.value = profileTitle.textContent;
    popupJob.value = profileSubtitle.textContent;
}
const closePopup = function() {
    popupElement.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupName.value;
    profileSubtitle.textContent = popupJob.value;
    closePopup();
}
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupContent.addEventListener('submit', handleFormSubmit);
popupOpenAddProfile.addEventListener('click', openPopup);



