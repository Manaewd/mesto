export class Card {

    constructor(data, templateSelector, 
      handleCardClick, handleDeleteLike, handleLikeCard, 
      userId) {
        this._name = data.name;
        this._link = data.link;

        this._likes = data.likes;
        this._owner = data.owner._id;

        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteLike = handleDeleteLike;
        this._handleLikeCard = handleLikeCard;

        this._userId = userId;
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

    deleteCard() {
      this._cardElement.remove();
      this._cardElement = null;
    };

    _setEventListener() {
      this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
      });

      this._buttonTrash.addEventListener('click', () => {
        this._handleDeleteLike()
      });
      
      this._buttonLike.addEventListener('click', () => {
        this._handleLikeCard()
      })
    };

    updateLikeState(data) {
    this._likes = data.likes;
  }

  isLiked() {
    return this._likes.some((item) => item._id === this._userId);
  }

  updateLengthLikes() {
    this._likeMeter.textContent = this._likes.length;
    if (this.isLiked()) {
      this._buttonLike.classList.add('.element__button_type_active');
    } else {
      this._buttonLike.classList.remove('.element__button_type_active');
    }
  }

    generateCard() {
      this._cardElement = this._getTemplate();
      
      this._cardImage = this._cardElement.querySelector('.element__image');
      this._cardTitle = this._cardElement.querySelector('.element__title');
      this._buttonLike = this._cardElement.querySelector('.element__button');
      this._buttonTrash = this._cardElement.querySelector('.element__trash-button');

      this._cardTitle.textContent = this._name;
      this._cardImage.alt = this._name;
      this._cardImage.src = this._link;
      
      this._likeMeter = this._cardElement.querySelector('.element__like-meter');

      if (this.isLiked()) {
        this._buttonLike.classList.add('element__button_type_active');
      }
  
      if (this._owner === this._userId) {
        this._buttonTrash.classList.add('element__trash-button_active')
      }
  
      this.updateLengthLikes()

      this._setEventListener();

      // Вернём элемент наружу
      return this._cardElement;
    };
  }