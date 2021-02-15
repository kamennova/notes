import { GraphData } from "./types/GraphData";

export const DATA: GraphData = {
    name: 'CSS Cheatsheet',
    nodes: [
        { id: 1, label: 'Selectors list', parent: null },

        { id: 2, label: 'Basic', parent: 1 },
        { id: 3, label: 'Class "."', parent: 2 },
        { id: 4, label: 'Id "#"', parent: 2 },

        { id: 5, label: 'Element tag', parent: 1 },

        { id: 9, label: 'Pseudo-classes', parent: 1 },

        { id: 6, label: 'State', parent: 9 },
        { id: 7, label: ':hover', parent: 6 },
        { id: 7, label: ':active', parent: 6 },
        { id: 7, label: ':focus', parent: 6 },
        { id: 7, label: ':visited', parent: 6 },

        { id: 10, label: 'Order', parent: 9 },
        { id: 7, label: ':nth-of-type()', parent: 10 },
        { id: 7, label: ':first-of-type', parent: 10 },
        { id: 7, label: ':last-of-type', parent: 10 },

        {id: 12, label: 'Attribute', parent: 1},
    ]
};

export const BOARDS = [
    { name: 'App ideas', itemsCount: 12 },
    { name: 'CSS Cheatsheet', itemsCount: 10 },
    { name: 'Web-design', itemsCount: 81 }
];
