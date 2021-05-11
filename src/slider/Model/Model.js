import Observer from './../Observer/Observer';
export default class Model extends Observer {

   constructor() {
      super();
      this.config = {
         type: 'single',
         direction: 'horizontal',
         sliderSize: {width: '100%', height: '10px'},
         ThumbSize: {width: '20px', height: '20px'},
      };
   }

   getConfig(){
      return this.config;
   }

}

