
const buttonElements = document.getElementsByTagName('button');

const slider = {
  imgNames: [ 'img/img0.jpg', 'img/img1.jpg', 'img/img2.jpg',
              'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'],

  imgElement: document.getElementById('img'),

  start: function() {
    setInterval( function() {
      slider.showNext();
    }, 5000);
  },

  showPrev: function() {
    let prev = this.imgnames.indexOf( this.imgElement.getAttribute('src') ) - 1;
    if (prev === -1) {
      prev = this.imgnames.length - 1;
    }
    this.imgElement.setAttribute('src', this.imgnames[prev]);
  },

  showNext: function() {
    let next = this.imgnames.indexOf( this.imgElement.getAttribute('src') ) + 1;
    if (next === this.imgnames.length) {
      next = 0;
    }
    this.imgElement.setAttribute('src', this.imgnames[next]);
  }
}


slider.imgElement.setAttribute('src', slider.imgNames[0]); // place first image

let interval = setInterval( function() {
  slider.showNext();
}, 5000);

buttonElements[0].onclick = () => {
  slider.showPrev();
  clearInterval(interval);
  slider.start();
}

buttonElements[1].onclick = () => {
  slider.showNext();
  clearInterval(interval);
  slider.start();
}
