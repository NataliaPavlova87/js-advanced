export function getMethodListenerName(string) {
    if (typeof string !== 'string') {
        return '';
    }

    return `on${string}`;
}
