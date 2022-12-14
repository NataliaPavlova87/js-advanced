class Dom {
    constructor(selector) {
        this.el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector;
    }

    create(tagName, className) {
        const el = document.createElement(tagName);

        if (className && className.length > 0) {
            className.forEach((item) => el.classList.add(item));
        }

        return $(el);
    }

    html(html) {
        if (typeof html === 'string') {
            this.el.innerHTML = html;
            return this;
        }

        return this.el.innerHTML.trim();
    }

    clear() {
        this.html('');
        return this;
    }

    on(eventType, callback) {
        this.el.addEventListener(eventType, callback);
    }

    removeEvents(eventType, callback) {
        this.el.removeEventListener(eventType, callback);
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.el;
        }
        if (Element.prototype.append) {
            this.el.append(node);
        } else {
            this.el.appendChild(node);
        }

        return this;
    }
}

export function $(selector) {
    return new Dom(selector);
}
