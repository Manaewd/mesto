export default class FormValidator {
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







// export default class FormValidator {
//     constructor(config, form) {
//         this._config = config;
//         this._form = form;
//     }



// //метод вкл валидации
// enableValidation() {
//     //находим массив форм
//     this._formList = Array.from(document.querySelectorAll(this._config.formSelector));
//     //перебираем каждую
//     this._formList.forEach((form) => {

//         this._form.addEventListener('submit', preventDefault);
//         this._form.addEventListener('input', () => {
//             this._toggleButton(form, config);
//         });

//         this._addInputListners(form, config);
//         this._toggleButton(form, config);

//         this._form.addEventListener('reset', () => {
//             setTimeout(() => {
//                 this._toggleButton(form, vonfig);
//             }, 0);
//         })
//     });
// }

// _preventDefault(evt) { 
//     evt.preventDefault(); 
// }

// //метод обработки ввода в input
// _handleFormInput(evt, config) {
//     this._input = evt.target;
//     this._inputId = this._input.id;
//     this._errorElement = document.querySelector(`#${this._inputId}-error`);
    
//     if (this._input.validity.valid) {
//         this._input.classList.remove(this._config.errorClass)
//         this._errorElement.textContent = '';
//     } else {
//         this._input.classList.add(this._config.errorClass);
//         this._errorElement.textContent = this._input.validationMessage;
//     }
// }
// //метод блокирует/разблокирует submit
// _toggleButton() {
//     this._buttonSubmit = this._form.querySelector(this._config.submitButtonSelector);
//     this._isValidForm = this._form.checkValidity();
//     this._buttonSubmit.disabled = !this._isValidForm;
//     this._buttonSubmit.classList.toggle(this._config.inactiveButtonClass, !this._isValidForm);
// }

// _addInputListners() {
//     this._form.querySelectorAll(this._config.inputSelector).forEach( (item) => {
//         item.addEventListener('input', (evt) => {
//             this._handleFormInput(item);
//         });
//     });
// }
// }