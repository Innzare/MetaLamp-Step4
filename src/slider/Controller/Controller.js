export default class Controller {

  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.render(this.model.getConfig());
  }

}
