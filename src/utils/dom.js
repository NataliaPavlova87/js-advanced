class Dom {
    constructor(selector) {
        this.el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector;
    }

    create(tagName, className) {
        const el = document.createElement(tagName);

        if (className) {
            el.classList.add(className);
        }

        return $(el);
    }

    html(html) {
        if (typeof html === 'string') {
            this.el.innerHTML = html;
        }

        return this.el.innerHTML.trim();
    }

    clear() {
        this.html('');
    }

    append(node) {
        if (Element.prototype.append) {
            this.el.append(node);
        } else {
            this.el.appendChild(node);
        }
    }
}

export function $(selector) {
    return new Dom(selector);
}
