import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({ handleSubmitForm }, popupSelector) {

        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popupForm.querySelectorAll('.popup__item');
        this._submitButon = this._popupForm.querySelector('.popup__button-save');

        // +
        this._submitButonText = this._submitButon.textContent;

        this._handleSubmitForm = handleSubmitForm;
    };
    
    // Метод сбора данных инпутов формы
    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });

        return this._inputValues;
    }

    setInputValues(data) {
        this._inputList.forEach((input) => {
          input.value = data[input.name];
        });
      }

      // Метод закрытия попапа со сбросом формы
      close() {
        this._popupForm.reset();
        super.close();
      }
      
      renderLoading(isLoading) {
        if(isLoading) {
          this._submitButon.textContent = 'Сохранение...';
        } else {
          this._submitButon.textContent = this._submitButonText;
        }
      }

      // Метод установки слушателей 
      setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            this.close()
        })
    }
}