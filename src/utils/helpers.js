/**
 * Gets the data attribute. the name must be kebab-case.
 */
export const getDataAttribute = (el, name) => el.getAttribute(`data-vv-${name}`);

/**
 * Determines the input field scope.
 */
export const getScope = (el) => {
    let scope = getDataAttribute(el, 'scope');
    if (! scope && el.form) {
        scope = getDataAttribute(el.form, 'scope');
    }

    return scope;
};

/**
 * Debounces a function.
 */
export const debounce = (func, threshold = 100, execAsap = false) => {
    if (! threshold) {
        return func;
    }

    let timeout;

    return function debounced([...args]) {
        const obj = this;

        function delayed() {
            if (!execAsap) {
                func.apply(obj, args);
            }
            timeout = null;
        }

        if (timeout) {
            clearTimeout(timeout);
        } else if (execAsap) {
            func.apply(obj, ...args);
        }

        timeout = setTimeout(delayed, threshold || 100);
    };
};

/**
 * Emits a warning to the console.
 */
export const warn = (message) => {
    if (! console) {
        return;
    }

    console.warn(`[vee-validate]: ${message}`); // eslint-disable-line
};

/**
 * Checks if the value is an object.
 */
 // eslint-disable-next-line
export const isObject = (object) => {
    return object !== null && object && typeof object === 'object' && ! Array.isArray(object);
};
