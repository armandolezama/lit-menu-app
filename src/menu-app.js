import { LitElement, html } from '@polymer/lit-element';
import '../node_modules/@polymer/app-layout/app-drawer/app-drawer';
import '../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout';
import '../node_modules/@polymer/app-layout/app-header/app-header';
import '../node_modules/@polymer/app-layout/app-header-layout/app-header-layout';
import '../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects';
import '../node_modules/@polymer/app-layout/app-toolbar/app-toolbar';

import '../node_modules/@polymer/app-route/app-route';
import '../node_modules/@polymer/app-route/app-location';

import '../node_modules/@polymer/iron-pages/iron-pages';
import '../node_modules/@polymer/iron-selector/iron-selector';
import '../node_modules/@polymer/paper-icon-button/paper-icon-button';

import '../src/create-page/create-dish';
import '../src/main-page/menu';
import '../src/modify-page/edit-dish';

export class MenuApp extends LitElement {
    constructor() {
        super();
        this.route = {};
        this.pageData = {};
    }

    static get properties() {
        return {
            route: { type: Object },
            pageData: { type: Object }
        };
    }

    __createDish(event) {
        this.dishes = [...this.dishes, event.detail];
    }

    __updateDish(event) {
        const dish = event.model.dish;
        dish.rate = 4;
        this.set('pageData.page', 'update');
        this.set('selectedDish', dish);
    }

    __deleteDish(event) {
        this._mutateDishesById(event.model.dish.id);
    }

    __dishUpdated(event) {
        this._mutateDishesById(event.detail.id, event.detail);
    }

    _mutateDishesById(id, newDish) {
        const index = this.dishes.findIndex(dish => id === dish.id);
        if (newDish)
            this.dishes.splice(index, 1, newDish);
        else
            this.dishes.splice(index, 1);
        this.dishes = [...this.dishes];
    }

    render() {
        return html `
        <app-route route="${this.route}" data="${this.pageData}" pattern="/:page"></app-route>
        <app-location route="${this.route}"></app-location>

        <app-drawer-layout responsive-width="1280px">
            <app-drawer id="drawer" swipe-open slot="drawer">
                <app-header-layout has-scrolling-region>
                    <app-header fixed slot="header">
                        <div class="avatar-container">
                            <div class="image"></div>
                        </div>
                        <div class="contact-info">
                            <div class="name">Tamales de la aldea oculta entre los grafos uwu</div>
                            <div class="email">uwu@tamales.com</div>
                        </div>
                    </app-header>
                    <paper-listbox selected="${pageData.page}" attr-for-selected="view">
                        <paper-item view="menu">
                            <a href="menu">Menu</a>
                        </paper-item>
                        <paper-item view="create">
                            <a href="create">Crear nuevo platillo</a>
                        </paper-item>
                    </paper-listbox>
                </app-header-layout>
            </app-drawer>
            <iron-pages selected="${pageData.page}" attr-for-selected="view">
                <menu view="menu"></menu>
                <create-dish view="create"><create-dish/>
                <edit-dish view="update"><edit-dish/>
            </iron-pages>
        </app-drawer-layout>
        `;
    }
}
customElements.define('menu-app', MenuApp);