import Track from './Track';
import Thumb from './Thumb';

export default class View {

   constructor(parent) {
      this.slider = document.createElement('div');
      this.slider.classList.add('inRange');
      this.initView();
      parent.append(this.slider);
   }

   initView() {
      this.track = new Track(this.slider);
      this.thumb = new Thumb(this.slider);
   }
}




