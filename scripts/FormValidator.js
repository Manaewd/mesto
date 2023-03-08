export default class FormValidator {

    constructor(config, form) {
        this._config = config;
        this._form = form;
    }


//метод вкл валидации
enableValidation() {
    //находим массив форм
    this._formList = Array.from(document.querySelectorAll(this._config.formSelector));
    //перебираем каждую
    this._formList.forEach((form) => {

        this._form.addEventListener('submit', preventDefault);
        this._form.addEventListener('input', () => {
            this._toggleButton(form, config);
        });

        this._addInputListners(form, config);
        this._toggleButton(form, config);
    });
}

_preventDefault(evt) {
    evt.preventDefault();
}

//метод обработки ввода в input
_handleFormInput(evt) {
    this._input = evt.target;
    this._inputId = this._input.id;
    this._errorElement = document.querySelector(`#${this._inputId}-error`);
    
    if (this._input.validity.valid) {
        this._input.classList.remove(this._config.errorClass)
        this._errorElement.textContent = '';
    } else {
        this._input.classList.add(this._config.errorClass);
        this._errorElement.textContent = this._input.validationMessage;
    }
}
//метод блокирует/разблокирует submit
_toggleButton() {
    this._buttonSubmit = this._form.querySelector(this._config.submitButtonSelector);
    this._isValidForm = this._form.checkValidity();
    this._buttonSubmit.disabled = !this._isValidForm;
    this._buttonSubmit.classList.toggle(this._config.inactiveButtonClass, !this._isValidForm);
}

_addInputListners() {
    this._inputList = this._form.querySelectorAll(this._config.inputSelector);
    this._inputList.forEach(function(item) {
        item.addEventListener('input', (evt) => {
            this._handleFormInput(evt, this._config)
        });
    });
}
}