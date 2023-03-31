export class FormValidator {
    constructor(data, formElement) {
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._errorClass = data.errorClass;
        this._inactiveButtonClass = data.inactiveButtonClass;

        this._formElement = formElement;
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    }


_setEventListeners() {
    
    this._inputList.forEach((item) => {
      item.addEventListener('input', () => {
        this._checkInputValidity(item)
        this._toggleButtonState();
      });
    });
  }

  _checkInputValidity(input) {
    const inputId = input.id;
    this._errorElement = this._formElement.querySelector(`#${inputId}-error`);


    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  }

  _toggleButtonState() {
    const isFormvalid = this._formElement.checkValidity();


    this._buttonElement.disabled = !isFormvalid;
    this._buttonElement.classList.toggle(this._inactiveButtonClass, !isFormvalid);
  }

  _showInputError(input) {
    input.classList.add(this._errorClass);
    this._errorElement.textContent = input.validationMessage;
  }

  _hideInputError(input) {
    input.classList.remove(this._errorClass);
    this._errorElement.textContent = '';
  }

  resetValidation() {
    this._toggleButtonState(); 

    this._inputList.forEach((inputElement) => {
      this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      this._hideInputError(inputElement) 
    });
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleButtonState();
  }
}