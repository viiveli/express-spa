import View from "./view.js";

export default class extends View {
    constructor(params) {
        super(params);
        this.setTitle("index");
    }

    async getHtml() {
        return `
            <h1>index</h1>
            <p>Asdasdasdasd, asd. Chicken.</p>
        `;
    }
}