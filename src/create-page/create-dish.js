import { LitElement, html } from '@polymer/lit-element';
import '../../node_modules/dish-form/dish-form-component';
import '../../node_modules/dish-detail/dish-detail-component';

export class CreateDish extends LitElement {

    render() {
        return html `
        <dish-form-component><dish-form-component/>
        <dish-detail-component><dish-detail-component/>
        `;
    }
}
customElements.define('create-dish', CreateDish);