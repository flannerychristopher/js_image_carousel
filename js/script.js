const containerElement = document.getElementById('container');
const buttonElements = document.getElementsByTagName('button');

const slider = {
  imgHand: [ 'img/img0.jpg' ], // active and inactive images
  imgDeck: [ 'img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'],

  initialize: function() {
    containerElement.childNodes[1].setAttribute('src', slider.imgHand[0]);
    containerElement.childNodes[1].style.opacity = 0;
    setTimeout( function() {
      slider.play();
      slider.fade();
    }, 3000);
  },

  play: function() {
    console.log(`HAND: ${this.imgHand} --- DECK: ${this.imgDeck}`);

    interval = setInterval( function() { // begins movement
      slider.showNext();
    }, 5000);

    buttonElements[0].onclick = () => {
      this.pause();
      this.play();
      this.showNext();
    };

    buttonElements[1].onclick = () => {
      this.pause();

    };

    containerElement.addEventListener('mouseover', () => { // pauses
      this.pause();
    });
    containerElement.addEventListener('mouseout', () => { // replays
      this.play();
    });
  },

  pause: function() {
    clearInterval(interval);
  },

  fade: function() {
    element1 = containerElement.childNodes[1];
    element2 = containerElement.firstChild;
    if (element1.style.opacity < 1) {
      setTimeout( function() {
        element1.style.opacity = element1.style.opacity * 1 + .01;
        element2.style.opacity = element2.style.opacity * 1 - .01;
        slider.fade();
      }, 20);
    }
  },

  showPrev: function() {
    this.imgHand.push( this.imgDeck[this.imgDeck.length - 1]); // add new image to hand
    this.imgDeck.pop();                                  // remove that image from deck

    containerElement.removeChild(containerElement.childNodes[1]); // remove HTML
    let prevElement = document.createElement('img');              // add HTML
    prevElement.setAttribute('src', slider.imgHand[0]);
    prevElement.style.opacity = 0;
    containerElement.appendChild(prevElement);

    this.imgDeck.unshift( this.imgHand[0] );  // place image back in deck
    this.imgHand.shift();                     // remove image from hand
    console.log(`HAND: ${this.imgHand} --- DECK: ${this.imgDeck}`);

    this.fade();
    // this.pause();
    // setTimeout( function() { slider.play(); }, 10000);
  },

  showNext: function() {
    this.imgHand.push( this.imgDeck[0] ); // add new image to hand
    this.imgDeck.shift();                 // remove that image from deck

    containerElement.removeChild(containerElement.firstChild); // remove HTML
    let nextElement = document.createElement('img');      // append new node
    nextElement.setAttribute('src', slider.imgHand[1]);
    nextElement.style.opacity = 0;
    containerElement.appendChild(nextElement);

    console.log(`HAND: ${this.imgHand} --- DECK: ${this.imgDeck}`);

    this.imgDeck.push( this.imgHand[0] ); // place image back in deck
    this.imgHand.shift();                 // remove image from hand

    // this.fadeForward();
    this.fade();
  }
}

slider.initialize();
