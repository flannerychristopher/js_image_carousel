const buttonElements = document.getElementsByTagName('button');

const slider = {
  imgDeck: [ 'img/img0.jpg', 'img/img1.jpg', 'img/img2.jpg',  // not active
              'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'],

  imgHand: []

  imgElement: document.getElementById('img'),

  start: function() {
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
    this.imgElement.style.opacity += .1;

  },

  showPrev: function() {
    let prev = this.imgDeck.indexOf( this.imgElement.getAttribute('src') ) - 1;
    if (prev === -1) {
      prev = this.imgDeck.length - 1;
    }
    this.imgElement.setAttribute('src', this.imgDeck[prev]);
  },

  showNext: function() {
    let next = this.imgDeck.indexOf( this.imgElement.getAttribute('src') ) + 1;
    if (next === this.imgDeck.length) {
      next = 0;
    }
    this.imgElement.setAttribute('src', this.imgDeck[next]);
  }
}


slider.imgElement.setAttribute('src', slider.imgDeck[0]); // place first image
slider.start(); // start the slider
