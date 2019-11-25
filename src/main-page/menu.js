import { LitElement, html } from '@polymer/lit-element';
import '../../node_modules/dish-detail/dish-detail-component';
import '../../node_modules/dish-list/dish-list-component';

export class Menu extends LitElement {

    render() {
        return html `
        <!-- verificar el evento creado de dish-list -->
        <dish-list-component><dish-list-component/>
        <dish-detail-component><dish-detail-component/>
        `;
    }
}
customElements.define('menu', Menu);