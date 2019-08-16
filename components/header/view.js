import styles from './css/styles.css';

let count = window.oc.cart.count;

window.oc.events.on('cartChange', () => {
  count = window.oc.cart.count;
  document.getElementById('count').innerText = count;
});

export default ({ name, staticPath }) =>
  `<div class=${styles.container}>
    <div>
      Header
    </div>
    <div>
      <span id="count">0</span> dogs in cart
    </div>
  </div>`;
