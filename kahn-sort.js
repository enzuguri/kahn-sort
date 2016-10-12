function reduceToEdges(edges, cursor) {
    var parent = cursor[0];
    var child = cursor[1];
    var parentEdges = edges[parent];
    if (parentEdges === undefined) {
        edges[parent] = {
            incoming: [child],
            outgoing: []
        };
    } else {
        parentEdges.incoming.push(child);
    }
    var childEdges = edges[child];
    if(childEdges === undefined) {
        edges[child] = {
            incoming: [],
            outgoing: [parent]
        };
    } else {
        childEdges.outgoing.push(parent);
    }
    return edges;
}

function filterLooseEdges(edgeName) {
    var edges = this;
    return edges[edgeName].incoming.length === 0;
}

module.exports = function(input, invert) {
    var edges = input.reduce(reduceToEdges, {});
    var remaining = Object.keys(edges).filter(filterLooseEdges, edges);
    var sorted = [];

    if (remaining.length === 0) {
        throw new Error('Cyclic graph detected');
    }

    while(remaining.length) {
        var child = remaining.pop();
        sorted.push(child);
        var edge = edges[child];
        edge.outgoing.forEach(function(parent) {
            var childEdges = edges[parent].incoming;
            var idx = childEdges.indexOf(child);
            childEdges.splice(idx, 1);
            if (childEdges.length == 0) {
                remaining.push(parent);
            }
        });
    }

    return invert === true ? sorted : sorted.reverse();
};
