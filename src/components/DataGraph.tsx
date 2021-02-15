import * as React from "react";
import { GraphData, GraphNode } from "../types/GraphData";

export const DataGraph = (props: { data: GraphData }) => {
    const parents = props.data.nodes.filter(item => item.parent === null);

    return (
        <div>
            {parents.map(item => <NodeDisplay data={props.data} curr={item} layout={'horizontal'}/>)}
        </div>
    );
};

const NodeDisplay = (props: { data: GraphData, curr: GraphNode, layout?: string }) => {
    const currChildren = props.data.nodes.filter(item => item.parent === props.curr.id);
    const isParent = currChildren.length > 0;

    return (
        <div className={(isParent ? 'block' : '') + ' ' + (props.layout)}>
            <Node label={props.curr.label} isParent={isParent} isBordered={!isParent}/>
            {isParent && (<div className={'children-container layout-horizontal'}>
                {currChildren.map(item => <NodeDisplay data={props.data} curr={item}/>)}
            </div>)}
        </div>
    );
};

const Node = (props: { label: string, isParent: boolean, isBordered?: boolean }) => (
    <span style={{
          }} className={'node ' + (props.isParent ? 'parent' : 'child') + (props.isBordered ? ' bordered' : ' bordered')}>
        {props.label}
    </span>
);

