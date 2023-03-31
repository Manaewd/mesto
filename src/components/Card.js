export class Card {

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
    };


    generateCard() {
      this._cardElement = this._getTemplate();
      
      this._cardImage = this._cardElement.querySelector('.element__image');
      this._cardTitle = this._cardElement.querySelector('.element__title');
      this._buttonLike = this._cardElement.querySelector('.element__button');
      this._buttonTrash = this._cardElement.querySelector('.element__trash-button');

      this._cardTitle.textContent = this._name;
      this._cardImage.alt = this._name;
      this._cardImage.src = this._link;

      this._setEventListener();

      // Вернём элемент наружу
      return this._cardElement;
    };

    _setEventListener() {
      this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
      });

      this._buttonTrash.addEventListener('click', () => {
        this._handleButtonTrash()
      });
      
      this._buttonLike.addEventListener('click', () => {
        this._handleButtonLike()
      })
    };

    _handleButtonTrash() {
      this._cardElement.remove();
      this._cardElement = null;
    };
    
    _handleButtonLike() {
      this._buttonLike.classList.toggle('element__button_type_active');
    };


  }