//Graph - Nodes and Edges
//Depth First Traversal - Travel depth first - in 1 direction- Stacks
//Breadth First Traversal- Connecting all connected nodes - Queues

//Depth first uses Stacks
const graph = {
    a:['b','c'],
    b:['a','c','d'],
    c:['a','b','d'],
    d:['b','c'],
    e:['f'],
    f:['e']
}

function defthFSIterative(graph,start){
    const stack = [start]
    const visited = new Set()
    while(stack.length>0){
        // console.log(stack);
      const node = stack.pop()
      if(!visited.has(node)){
        visited.add(node);
        // console.log('visited-------',visited);
        for(const neighbour of graph[node]){
            // console.log('neighbour-------',neighbour);
            if(!visited.has(neighbour)){
                stack.push(neighbour)
            }
        }
      }     
    }
    return Array.from(visited);
}

function recursiveDepthFS(graph,start,visited=new Set()){
  if(!visited.has(start)){
    visited.add(start);
    //console.log('visited',visited);
    for(const neighbour of graph[start]){
        recursiveDepthFS(graph,neighbour,visited);
    }
  }
  return Array.from(visited);
}


console.log(defthFSIterative(graph,'a'));
console.log(recursiveDepthFS(graph,'a'));