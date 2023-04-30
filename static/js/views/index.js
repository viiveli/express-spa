import View from "./view.js";

export default class extends View {
    constructor(params) {
        super(params);
        this.setTitle("Index");
    }

    async getHtml() {
        return `
            <h1>Index</h1>
            <p>Asdasdasdasd, asd. Chicken.</p>
        `;
    }
}