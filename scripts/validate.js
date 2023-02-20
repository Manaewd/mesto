const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    errorClass: 'popup__item_type_error',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-disabled',
}

function disableSubmit(evt) {
    evt.preventDefault();
}

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) => {
        form.addEventListener('submit', disableSubmit);
        form.addEventListener('input', () => {
            toggleButton(form, config);
        });
        addInputListners(form, config);
        toggleButton(form, config);
    });
}

function handleFormInput(evt, config) {
    const input = evt.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);
    if (input.validity.valid) {
        input.classList.remove(config.errorClass)
        errorElement.textContent = '';
    } else {
        input.classList.add(config.errorClass);
        errorElement.textContent = input.validationMessage;
    }
}

function toggleButton(form, config) {
    const buttonSubmit = form.querySelector(config.submitButtonSelector);
    const isValidForm = form.checkValidity();
    buttonSubmit.disabled = !isValidForm;
    buttonSubmit.classList.toggle(config.inactiveButtonClass, !isValidForm);
}

function addInputListners(form, config) {
    const inputList = form.querySelectorAll(config.inputSelector);
    inputList.forEach(function(item) {
        item.addEventListener('input', (evt) => {
            handleFormInput(evt, config)
        });
    });
}
enableValidation(formValidationConfig);