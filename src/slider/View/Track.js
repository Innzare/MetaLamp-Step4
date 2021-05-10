export default class Track {
 
   constructor(slider) {
     this.init(slider);
   }
 
   init(slider) {
     this.track = document.createElement('div');
     this.track.className = 'slider__track';
     slider.append(this.track);
   }
 }