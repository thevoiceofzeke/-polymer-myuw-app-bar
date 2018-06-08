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
 * @demo demo/index.html
 */
class MyuwAppBar extends PolymerElement {
  static get template() {
    return html`  
      <style>
        app-header {
          font-family: 'Roboto', 'Noto', sans-serif;
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
        app-header .theme-name,
        app-header .app-name {
          font-weight: 300
        }
      </style>

      <app-header-layout>
        <app-header slot="header" fixed effects="waterfall" style="background:[[background]]; color:[[color]]">
          <app-toolbar>
            <div class="region__navigation">
              <slot name="myuw-navigation"/>
            </div>
            <div main-title class="theme-name">
              [[themeName]]&nbsp;[[appName]]
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
      appName: {
        type: String,
        value: 'Bucky Backup',
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
