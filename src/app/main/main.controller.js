export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http; /*we are using the Angular HTTP service in order to post our data to the following URL. 
                        So we will need reference to HTTP. Let's inject the HTTP into our constructor and pass its reference to a class property we create. 
                        And we'll do that with this.$http and we'll send it to the reference we just passed in.
                        And so now if we copy this, we can replace HTTP with this.$http*/

  }

  postMessage(){
    console.log("==postMessage");
    //communicating with server
    // this.message refers to ng-model="message" in main.html
    this.$http.post('http://localhost:5000/api/message', {msg: this.message});
  }

}
