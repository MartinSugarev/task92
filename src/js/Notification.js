import { formatCurrency }from './utils.js'
import classNames from 'classnames'
//import formatCurrency from './utils'

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.notification = document.querySelector(".notifications");
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");

  }

  render({type, price}) {
    let isTrue = false
    if(type === 'hawaiian'){
        isTrue = true
    }
    let el = classNames('notification', `type-${type}`, {'is-danger': isTrue})
    const template = `
<div class="${el}">
  <button class="delete"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
    this.notification.appendChild(this.container)

    this.container.addEventListener('click', () => {
      this.container.innerHTML = ''
       // let a = document.querySelector(".notification-container")
     // let el = classNames('notification', `type-${type}`, {'is-danger': isTrue})
     // console.log(a);
     console.log(type);
     
         
         
    })

  }
  empty(){

  }
}
