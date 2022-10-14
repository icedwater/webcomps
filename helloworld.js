class HelloWorld extends HTMLElement {
    constructor() {
        super();

        this.innerText = "Hello World!";
    }
}

customElements.define("hello-world", HelloWorld);
