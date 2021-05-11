import Track from './Track';
import Thumb from './Thumb';
import Observer from './../Observer/Observer';
export default class View extends Observer {

   constructor(parent) {
      super();
      this.slider = document.createElement('div');
      this.slider.classList.add('inRange');
      parent.append(this.slider);
   }

   render(config) {
      this.config = config;

      this.track = new Track(this.slider);
      this.thumb = new Thumb(this.slider);
   }
}




