export type GraphData = {
    nodes: GraphNode[],
    name?: string,
    relations?: Relation[],
};

export type GraphNode = {
    id: number,
    parent: number | null,
    label: string,
    relations?: Relation[],
}

export type Relation = {
    id: number,
}
