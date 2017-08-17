const buttonElements = document.getElementsByTagName('button');

const slider = {
  imgHand: [ 'img/img0.jpg' ], // active and inactive images
  imgDeck: [ 'img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'],

  imgElement: document.getElementById('img'),

  start: function() {
    console.log(`HAND: ${this.imgHand} --- DECK: ${this.imgDeck}`);

    interval = setInterval( function() { // begins movement
      slider.showNext();
    }, 5000);

    buttonElements[0].onclick = () => {
      slider.showPrev();
    }

    buttonElements[1].onclick = () => {
      slider.showNext();
    }

    this.imgElement.addEventListener('mouseover', () => { // pauses
      this.pause();
    });
    this.imgElement.addEventListener('mouseout', () => { // restarts
      this.start();
    });
  },

  pause: function() {
    clearInterval(interval);
  },

  fadeIn: function() {
    // this.imgElement.style.opacity += .1;

  },

  showPrev: function() {


    this.imgHand.push( this.imgDeck[this.imgDeck.length - 1]);
    this.imgDeck.pop();

    this.imgDeck.unshift( this.imgHand[0] );
    this.imgHand.shift();
    console.log(`HAND: ${this.imgHand} --- DECK: ${this.imgDeck}`);
  },

  showNext: function() {
    this.imgHand.push( this.imgDeck[0] );
    this.imgDeck.shift();

    this.imgDeck.push( this.imgHand[0] );
    this.imgHand.shift();
    console.log(`HAND: ${this.imgHand} --- DECK: ${this.imgDeck}`);
  }
}


slider.imgElement.setAttribute('src', slider.imgHand[0]); // place first imag
slider.start(); // start the slider
