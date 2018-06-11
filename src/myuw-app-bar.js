import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-styles/default-theme.js';
import '@polymer/paper-styles/typography.js';

/**
 * `myuw-app-bar`
 * Top app bar based on Material guidelines and the UW-Madison app style guide
 *
 * @customElement
 * @polymer
 * @demo index.html
 */
class MyuwAppBar extends PolymerElement {
  static get template() {
    return html`  
      <style>
        app-header {
          font-family: 'Montserrat', sans-serif;
        }
        app-header .region__navigation {
          margin-right: 16px;
        }
        app-header .region__profile {
          margin-left: 6px;
        }
        app-header .region__notifications,
        app-header .region__help {
          margin: 0 6px;
        }
        app-header .title {
          height: 100%;
          font-weight: 300;
          display: flex;
          flex: auto;
          align-items: center;
        }
        app-header .title a {
          text-decoration: none;
          color: inherit;
        }
        app-header .title a:hover {
          text-decoration: none;
          cursor: pointer;
        }
        app-header .title a:visited {
          color: inherit;
        }
      </style>
      <app-header-layout>
        <app-header slot="header" fixed effects="waterfall" style="background:[[background]]; color:[[color]]">
          <app-toolbar>
            <div class="region__navigation">
              <slot name="myuw-navigation"/>
            </div>
            <div class="title">
              <template is="dom-if" if="{{themeUrl}}">
                <a href=[[themeUrl]] target="_self">[[themeName]]</a>
              </template>
              <template is="dom-if" if="{{!themeUrl}}">
                <span>[[themeName]]</span>
              </template>
              &nbsp;
              <template is="dom-if" if="{{appUrl}}">
                <a href=[[appUrl]] target="_self">[[appName]]</a>
              </template>
              <template is="dom-if" if="{{!appUrl}}">
                <span>[[appName]]</span>
              </template>
            </div>
            <div class="region__help">
              <slot name="myuw-help"/>
            </div>
            <div class="region__notifications">
              <slot name="myuw-notifications"/>
            </div>
            <div class="region__profile">
              <slot name="myuw-profile"/>
            </div>
          </app-toolbar>
        </app-header>
      </app-header-layout>
    `;
  }
  static get properties() {
    return {
      themeName: {
        type: String,
        value: 'MyUW',
      },
      themeUrl: {
        type: String,
        value: '',
      },
      appName: {
        type: String,
        value: '',
      },
      appUrl: {
        type: String,
        value: '',
      },
      background: {
        type: String,
        value: '#c5050c',
      },
      color: {
        type: String,
        value: '#fff',
      },
    };
  }
}

window.customElements.define('myuw-app-bar', MyuwAppBar);
