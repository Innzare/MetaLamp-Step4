export default class Thumb {

	constructor(slider) {
		this.slider = slider;
		this.init();
	}
 
	init() {
		this.thumb = document.createElement('div');
		this.thumb.className = `slider__thumb`;
		this.slider.append(this.thumb);


   }
 }