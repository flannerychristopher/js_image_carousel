const containerElement = document.getElementById('container');
const buttonElements = document.getElementsByTagName('button');

const slider = {
  imgHand: [ 'img/img0.jpg', 'img/img1.jpg' ], // active and inactive images
  imgDeck: [ 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'],

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

    containerElement.addEventListener('mouseover', () => { // pauses
      this.pause();
    });
    containerElement.addEventListener('mouseout', () => { // restarts
      this.start();
    });
  },

  pause: function() {
    clearInterval(interval);
  },

  fadeIn: function() {

    let img = containerElement.firstChild;
    if (img.style.opacity < 1) {
      setTimeout( function() {
        img.style.opacity = img.style.opacity * 1 + .01;
        console.log('increase opacity');
        slider.fadeIn();
      }, 20);
    }
  },

  showPrev: function() {
    this.imgHand.push( this.imgDeck[this.imgDeck.length - 1]);
    this.imgDeck.pop();

    this.imgDeck.unshift( this.imgHand[0] );
    this.imgHand.shift();
    console.log(`HAND: ${this.imgHand} --- DECK: ${this.imgDeck}`);

    let prevElement = document.createElement('img');
    prevElement.setAttribute('src', slider.imgHand[0]);
    containerElement.appendChild(prevElement);

    // this.pause();
    // setTimeout( function() { slider.start(); }, 10000);
  },

  showNext: function() {
    this.imgHand.push( this.imgDeck[0] );
    this.imgDeck.shift();
    containerElement.removeChild(containerElement.firstChild);

    this.imgDeck.push( this.imgHand[0] );
    this.imgHand.shift();

    let nextElement = document.createElement('img');
    nextElement.setAttribute('src', slider.imgHand[0]);
    containerElement.appendChild(nextElement);

    console.log(`HAND: ${this.imgHand} --- DECK: ${this.imgDeck}`);
  }
}


containerElement.firstChild.setAttribute('src', slider.imgHand[0]); // place first imag
// slider.start();

// remove later -----------------------------------------------
containerElement.firstChild.style.opacity = 0;
slider.fadeIn();
