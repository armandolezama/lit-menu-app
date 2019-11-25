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

    }

    static get properties() {
        return {

        };
    }

    render() {
        return html ``;
    }
}
customElements.define('menu-app', MenuApp);