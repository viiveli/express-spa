import View from "./view.js";

export default class extends View {
    constructor(params) {
        super(params);
        this.setTitle("Items");
    }


    async getHtml() {
        return `
            <h1>Items</h1>
            
            <p>
                <a href="/items/itemId" data-link>View item</a>.
            </p>
        `;
    }
}