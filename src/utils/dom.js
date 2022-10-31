export const appendDom = (tagName, classList) => {
    const el = document.createElement(tagName);

    if (classList) {
        el.classList.add(classList);
    }

    return el;
};
