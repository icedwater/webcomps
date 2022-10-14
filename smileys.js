class SmileyEmoji extends HTMLElement {
    constructor() {
        super();
        this.innerText = "😊";
    }
}

class AddSmiley extends HTMLParagraphElement {
    constructor() {
        super();
        this.innerText += "🧽";
    }
}

customElements.define("smiley-emoji", SmileyEmoji);
customElements.define("add-smiley", AddSmiley, { extends: "p" });
