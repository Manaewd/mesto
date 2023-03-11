export default class Card {

    constructor(data, templateSelector, handleCardClick) {

        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
      // забираем разметку из HTML и клонируем элемент
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        
      // вернём DOM-элемент карточки
        return cardElement;
    }

    _setEventListener() {

      this._cardImage = this._element.querySelector('.element__image');
  
      this._cardImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link)
      });

      this._buttonTrash = this._element
      .querySelector('.element__trash-button');

      this._buttonTrash.addEventListener('click', () => {
        this._handleButtonTrash()
      });

      this._buttonLike = this._element
        .querySelector('.element__button');
  
      this._buttonLike.addEventListener('click', () => {
        this._handleButtonLike()
      })
    }

    _handleButtonTrash() {
      this._element.remove();
      this._element = null;
    }
    _handleButtonLike() {
      this.buttonLike.classList.toggle('element__button_type_active');
    }

    generateCard() {
      this._element = this._getTemplate();
      this._setEventListener();
    
      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__image').alt = this._name;
      this._element.querySelector('.element__image').src = this._link;

      // this._link = this._element.querySelector('.element__image').src;
      // this._name = this._element.querySelector('.element__title').textContent;
      // this._name = this._element.querySelector('.element__title').alt;

      // Вернём элемент наружу
      return this._element;
    }
  }

