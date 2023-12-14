

const canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 576;
// create a context object to modify the canvas
const c = canvas.getContext('2d');

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

//import image
const image = new Image();
image.src = './images/map-zoomed.png';

image.onload = () => {
    c.drawImage(image, -1000, -650);
}
