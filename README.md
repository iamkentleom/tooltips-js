# TooltipsJS
TooltipsJS is a javascript library for adding tooltips in your website. It is lightweight and easy to use.
## Installation
Using npm
```shell
npm install tooltips-js --save
```
```html
<script src="./path/to/tooltips-js.min.js"></script>
```
Using cdn
```html
<script src="https://cdn.jsdelivr.net/npm/tooltips-js@1.0.6/src/tooltips-js.min.js"></script>
```
## Basic Usage 
Create a tooltip
```html
<button id='example'>Hover to display tooltip</button>
<script>
	new Tooltip(document.getElementById('example'), {
		label: "Tooltip example", // Label *required
		position: "top", // (top or bottom) *default: top
		color: "green" // (color names, hex, rgb()) *default: #444
	})
</script>
```
## License
MIT License
