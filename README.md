# TooltipsJS
TooltipsJS is a javascript library for adding tooltips in your website. It is lightweight and easy to use.
## Add as a npm module
```shell
npm install tooltips-js --save
```
## Basic Usage 
Add to HTML file
```html
<script src="./path/to/tooltips-js.min.js"></script>
```
Create tooltip
```html
<button id='example'>Hover to display tooltip</button>
<script>
	new Tooltip(document.getElementById('example'), {
		label: "Tooltip example", // Label *required
		position: "top", // (top or bottom) *default: top
		color: "green" // (color names, hex, rgb(), rgba()) *default: #444
	})
</script>
```
## License
MIT License