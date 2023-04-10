import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupButtonSave = this._popup.querySelector('.popup__button-save')
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._popupButtonSave.textContent = 'Удаление...';
    } else {
      this._popupButtonSave.textContent = 'Да';
    }
  }

  setConfirm(submitCallback) {
    this._submitCallback = submitCallback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupButtonSave.addEventListener('click', () => {
      this._submitCallback();
    });
  }
  }