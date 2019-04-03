# TooltipsJS
TooltipJS is a javascript library for adding tooltips in your website. It is lightweight and easy to use.
## Add as npm module
```shell
npm install tooltipsjs --save
```
## Basic Usage: 
Add to HTML file
```html
<script src="./path/to/tooltipsjs.min.js"></script>
```
Create tooltip
```html
<button id='example'>Hover to display tooltip</button>
<script>
	new Tooltip(document.getElementById('example'), {
		label: "Tooltip example", // Tooltip label
		position: "top" //position (top or bottom)
	})
</script>
```