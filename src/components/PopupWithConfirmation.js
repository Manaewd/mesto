import Popup from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupButton = this._popup.querySelector('.popup__button-save')
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._popupButton.textContent = 'Удаление...';
    } else {
      this._popupButton.textContent = 'Да';
    }
  }

  setConfirm(submitCallback) {
    this._submitCallback = submitCallback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupButton.addEventListener('click', () => {
      this._submitCallback();
    })
  }
  }