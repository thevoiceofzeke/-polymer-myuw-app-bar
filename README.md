# \<myuw-app-bar\>

![top bar image](https://image.ibb.co/fzGPSo/Screen_Shot_2018_06_08_at_12_51_10_PM.png)

Top app bar based on Material guidelines and the UW-Madison app style guide, developed with [Polymer 3](https://www.polymer-project.org/).

## Development and contribution

### Running locally

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed.

```
$ npm install
$ npm start
```

### Running tests

```
$ polymer test
```

This component is set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester).

## How to use

There are two ways to use this component in your project:
1. As a `<script>` tag in your page's `<head>` **(WIP)**
2. As an npm dependency (for Node projects)

### Using the script tag

This method is a work in progress.

### Using the NPM package

Install the package as a dependency of your project:

```
$ npm i --save @myuw-web-components/myuw-app-bar
```

Use the tag in your HTML:

```HTML
<myuw-app-bar></myuw-app-bar>
```

### Configurable properties

- **themeName (theme-name):** Sets the theme/portal name (defaults to "MyUW")
- **themeUrl (theme-url):** Sets then URL to go to when user clicks the theme name
- **appName (app-name):** Sets the app name (e.g. "Bucky Backup"), empty by default
- **appUrl (app-url):** Sets then URL to go to when user clicks the app name
- **background:** Sets the top bar's background color (defaults to UW-Madison branding -- #c5050c)
- **color:** Sets the top bar's text color (defaults to white)

### Slots for child components

*Note: These slots are meant to be used with components in the "myuw" namespace. The child components listed below are works in progress.*

- **myuw-navigation**: Insert the `<myuw-navigation-drawer>` component
- **myuw-help**: Insert the `<myuw-help-and-feedback>` component
- **myuw-notifications**:  Insert the `<myuw-notifications>` component
- **myuw-profile**: Insert the `<myuw-profile>` component

#### Using slots

To insert a component into the appropriate slot, add a "slot" attribute to your component's HTML tag with the corresponding slot name. For example:

```HTML
<myuw-app-bar>
    <myuw-navigation slot="myuw-navigation"></myuw-navigation>
</myuw-app-bar>
```
