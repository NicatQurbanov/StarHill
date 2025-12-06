import { servicesArr } from './data.js';
import { servicePar } from './data.js';

let text = '';
for ( let service of servicesArr) {
    text += `
    <li class="service-item">
    <img src="${service.url}">
    <h3>${service.header}</h3>
    <p>${servicePar}</p>
    </li>
    ` }
document.getElementById('third-wrapper').innerHTML = text;