import * as $ from 'jquery';
import Model from './Model/Model';
import View from './View/View';
import Presenter from './Controller/Controller';

export default (() => {

   $.fn.inrange = function (options) {


      const model = new Model();
      const view = new View(this);

      new Controller(model, view);

      return this;

   };
})();