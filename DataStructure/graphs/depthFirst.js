//Graph - Nodes and Edges
//Depth First Traversal - Travel depth first - in 1 direction- Stacks
// DFS search says that once you have visited a vertex, start exploring its child nodes and sub child nodes
// until there is no node to explore for that vertex and then move to next vertex
//Depth first uses Stacks

//Algorithm
//1-start from the root element
//2-push root in the stack
//3-start poping from stack unless stack is empty
//4-If not visited, add it to visited[to have a check to not visit the same node again],
//then go on checking the neighbours, if not visited push it to stack
//5- go to line 3
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