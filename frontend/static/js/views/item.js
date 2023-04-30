import View from "./view.js";

export default class extends View {
    constructor(params) {
        super(params);
        this.setTitle(`Item ${this.params.id}`);
    }


    async getHtml() {
        return `
            <h1>${this.params.id}</h1>
            <p>${JSON.stringify(this.params)}</p>
        `;
    }
}