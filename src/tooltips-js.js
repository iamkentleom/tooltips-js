class Tooltip {
    constructor(element, props){
        this.element = element
        this.props = props
        const width = this.props.label.length
        this.props.position = this.props.position ? this.props.position : 'top'
        this.props.color = this.props.color ? this.props.color : '#444'
        const identifier = Math.random().toString(36).substring(2, 6)
        let insert = 
            `<span class = "label-${identifier}">${this.props.label}</span>
            <style>
                .tooltip{
                    position: relative;
                    display: inline-block;
                }
                .tooltip .label-${identifier}{
                    font-family: Arial, Helvetica, sans-serif !important;
                    font-weight: 300;
                    cursor: pointer;
                    visibility: hidden;
                    opacity: 0;
                    text-align: center;
                    font-size: 10pt;
                    width: ${width}ex;
                    position: absolute;
                    background-color: ${this.props.color};
                    color: white;
                    border-radius: 3px;
                    padding: 7px 10px;
                    left: 50%;
                    ${this.props.position == 'top' ? 'bottom' : 'top'}: 170%;
                    margin-left: -${width/2+1}ex;
                    transition: 0.3s;
                    z-index: 1000 !important;
                }
                .tooltip .label-${identifier}::after{
                    content: "";
                    position: absolute;
                    ${this.props.position == 'top' ? 'bottom' : 'top'}: -50%;
                    left: 50%;
                    margin-${this.props.position == 'top' ? 'bottom' : 'top'}: 0px;
                    margin-left: -10px;
                    border-width: 10px;
                    border-style: solid;
                    border-color: ${this.props.position == 'top' ? this.props.color : 'transparent'} transparent ${this.props.position == 'top' ? 'transparent' : this.props.color} transparent;
                }
                .tooltip:hover > .label-${identifier}{
                    visibility: visible;
                    ${this.props.position == 'top' ? 'bottom' : 'top'}: 150%;
                    opacity: 1;
                }
            </style>`
        this.element.insertAdjacentHTML("beforeend", insert)
        this.element.classList.add('tooltip')
    }
} 
    // Usage Example
    // new Tooltip(document.getElementById('hello'), {
    //     label: "Click to copy",
    //     position: "top",
    //     color: "black"
    // })