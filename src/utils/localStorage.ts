export const getItem = (key: string) => {
    try {
        const serializedState = localStorage.getItem(key);

        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        console.log('Could not load local storage state', err);

        return undefined;
    }
};

export const writeItem = (key: string, value: any) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (err) {
        console.log('Could not write to local storage', err);
    }
};
