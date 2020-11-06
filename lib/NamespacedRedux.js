const createNamespacedActionTypes = namespace => {
    return ActionTypes => {
        const namespacedActionTypes = {};
        Object.entries(ActionTypes).forEach(([key, value]) => {
            namespacedActionTypes[key] = `@${namespace}/${value}`;
        });
        return namespacedActionTypes;
    }
}

export { createNamespacedActionTypes } ;