import styles from './css/styles.css';

let image = window.oc.product.image;

window.oc.events.on('productChange', () => {
  image = window.oc.product.image;
  document.getElementById('product-image').src = image;
});

export default ({ staticPath }) =>
  `<div class=${styles.hero}>
    <img src=${image} style="max-height: 400px;" id="product-image" />
  </div>`;
