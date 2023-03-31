export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector); //селектор попап картинки
        this._handleEscClose = this._handleEscClose.bind(this);
        this._popupButtonClose = this._popup.querySelector('.popup__button-close');
        
    }
//открытие попап
open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
};

//закрытие попап
close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
};

//закрыте Esc
_handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
        this.close();
    }
}

_handleOverlayClose = (evt) => {
    if (evt.target === evt.currentTarget) {
        this.close();
    };
}

//закрытие попап 
setEventListeners() {
    this._popupButtonClose.addEventListener('click', () => {
    this.close();
    });

    //вне картинки
    this._popup.addEventListener('mousedown', this._handleOverlayClose)
  }
}