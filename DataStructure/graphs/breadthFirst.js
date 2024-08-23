//BFS is an algorithm for searching a tree or graph data structure.
//It begins at the root node then explore all nodes from left to right,level by level.
//folows FIFO principle, can be implemented by Queues
//Breadth First Traversal- Connecting all connected nodes - Queues

//Algorithm
//1-start from root element
//2-push root in the queue
//3-add the root to visited to start from root
//4-start shifting[removing the first element] from queue unless queue is empty
//5-Start checking the neighbours if not visited add it to the visited and queue
//6-go to line 4

//Difference in DFS and BFS IS that
//IN DFS we check whether the node is visited or not to go to the depth
//but in BFS we search all the neighbours first

const graph = {
    a:['b','c'],
    b:['a','c','d'],
    c:['a','b','d'],
    d:['b','c'],
    e:['f'],
    f:['e']
}

function breadthFSIterative(graph,start){
        const queue = [start];
        const visited = new Set();
        visited.add(start);
        while(queue.length){
           const node = queue.shift();
           for(const neighbour of graph[node]){
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                queue.push(neighbour);
            }
           }
        }
        return Array.from(visited);
}
console.log(breadthFSIterative(graph,'a'));