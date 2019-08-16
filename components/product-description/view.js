import styles from './css/styles.css';

let name = window.oc.product.name;

window.oc.events.on('productChange', () => {
  name = window.oc.product.name;
  document.getElementById('product-name').innerText = name;
});

export default ({ staticPath }) =>
  `<div class=${styles.product}>
    Description for <span id="product-name">${name}</span>
  </div>`;
