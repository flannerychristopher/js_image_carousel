
const buttonElements = document.getElementsByTagName('button');

const slider = {
  imgNames: [ 'img/img0.jpg', 'img/img1.jpg', 'img/img2.jpg',
              'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'],

  imgElement: document.getElementById('img'),

  start: function() {
    interval = setInterval( function() { // begins movement
      slider.showNext();
    }, 5000);

    this.imgElement.addEventListener('mouseover', () => { // pauses
      this.pause();
    });
    this.imgElement.addEventListener('mouseout', () => {
      this.start();
    });
  },

  pause: function() {
    clearInterval(interval);
  },

  showPrev: function() {
    let prev = this.imgNames.indexOf( this.imgElement.getAttribute('src') ) - 1;
    if (prev === -1) {
      prev = this.imgNames.length - 1;
    }
    this.imgElement.setAttribute('src', this.imgNames[prev]);
  },

  showNext: function() {
    let next = this.imgNames.indexOf( this.imgElement.getAttribute('src') ) + 1;
    if (next === this.imgNames.length) {
      next = 0;
    }
    this.imgElement.setAttribute('src', this.imgNames[next]);
  }
}


slider.imgElement.setAttribute('src', slider.imgNames[0]); // place first image
slider.start(); // start the slider


buttonElements[0].onclick = () => {
  slider.showPrev();
}

buttonElements[1].onclick = () => {
  slider.showNext();
}
