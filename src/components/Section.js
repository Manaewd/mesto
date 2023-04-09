export class Section {
constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
};
    // Отрисовка контента
    renderItems(element) {
      element.forEach((item) => {
          this._renderer(item);
        });
      };

      // Метод добавления контента на странице в конец
      addItem(item) {
        this._container.append(item);
      }
    
      // Метод добавления контента на странице в начало
      prependItem(element) {
        this._container.prepend(element);
      }
};