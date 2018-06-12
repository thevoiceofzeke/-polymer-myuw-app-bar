import '@polymer/polymer';
import './fonts';

const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<custom-style>
  <style is="myuw-custom-style">
    html, app-header {
        --myuw-app-bar-font: {
            font-family: 'Montserrat', 'Roboto', Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
        }
        --myuw-app-bar-title: {
            font-weight: 400;
        }
    }
    </style>
  </custom-style>`;
  
  document.head.appendChild($_documentContainer);