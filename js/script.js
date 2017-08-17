const imgElement = document.getElementById('img');
const buttonElements = document.getElementsByTagName('button');
const imgNames = [ 'img/img0.jpg', 'img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg']

imgElement.setAttribute('src', imgNames[0]);

buttonElements[0].onclick = () => {
  let prev = imgNames.indexOf( imgElement.getAttribute('src') ) - 1;
  if (prev === -1) {
    prev = imgNames.length - 1;
  }
  imgElement.setAttribute('src', imgNames[prev]);
}

buttonElements[1].onclick = () => {
  let next = imgNames.indexOf( imgElement.getAttribute('src') ) + 1;
  if (next === imgNames.length) {
    next = 0;
  }
  imgElement.setAttribute('src', imgNames[next]);
}
