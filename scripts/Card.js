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



      generateCard = () => {
        //карточка
        this._element = this._getTemplate();
      
        // Добавим данные
        this._link = this._element.querySelector('.element__image').src;
        this._name = this._element.querySelector('.element__image').alt;
        this._name = this._element.querySelector('.element__title').textContent;

        this._like = this._element.querySelector('.element__button');
        this._trash = this._element.querySelector('.element__trash-button');

        //обработчик
        this._setEventListeners();

        // Вернём элемент наружу
        return this._element;
      }

      _setEventListeners = () => {
        this._like.addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__button_type_active');
        });

        this._trash.addEventListener('click', () => {
            this._element.remove();
        });

        this._name.addEventListener('click', () => { this._handleCardClick(this._name, this._link)
        })
    }

}

      