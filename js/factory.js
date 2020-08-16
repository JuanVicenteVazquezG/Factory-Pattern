
// Variables
// Storage the elements
const webElements = [];


// Functions
function SiteConstructor() {
    this.elementCreator = function (text, type) {
        let html;

        if (type === 'input') {
            html = new InputHTML(text);
        }
        else if (type === 'img') {
            html = new ImageHTML(text);
        }
        else if (type === 'h1') {
            html = new HeadingHTML(text);
        }
        else if (type === 'p') {
            html = new ParagraphtHTML(text);
        }

        html.type = type;

        html.show = function () {
            const element = document.createElement(this.type);
            switch (type) {
                case 'input':
                    element.setAttribute('placeholder', this.text);
                    break;
                case 'img':
                    element.setAttribute('src', this.text);
                    break;
                case 'p':
                    element.appendChild(document.createTextNode(this.text));
                    break;
                case 'h1':
                    element.appendChild(document.createTextNode(this.text));
                    break;

            }
            document.querySelector('#app').appendChild(element);
        };

        return html;
    };
}

const HeadingHTML = function (text) {
    this.text = text;
};

const InputHTML = function (text) {
    this.text = text;
};


const ImageHTML = function (text) {
    this.text = text;
};


const ParagraphtHTML = function (text) {
    this.text = text;
};


const webSite = new SiteConstructor();

webElements.push(webSite.elementCreator('Wellcome', 'h1'));
webElements.push(webSite.elementCreator('Wellcome to my new Web Site', 'p'));
webElements.push(webSite.elementCreator('logo.svg', 'img'));
webElements.push(webSite.elementCreator('Know more about us', 'h1'));
webElements.push(webSite.elementCreator('Contact', 'input'));
webElements.push(webSite.elementCreator('Contact us in the form', 'h1'));
webElements.forEach(webElement => {
    webElement.show();
});

console.log(webElements);