const tree=dsv.create({type:"tree"}),data={name:"1",children:[{name:"2",children:[{name:"3"},{name:"4"},{name:"5",children:[{name:"6",children:[{name:"7"},{name:"8"},{name:"9"}]}]}]},{name:"10",children:[{name:"11"},{name:"12"},{name:"13"}]}]},root=tree.createTree(data),dfs=e=>{if(e&&e.children){e.setVisual("#edafda"),e.children.length>1&&e.reverse();for(let n of e.children)n.children&&0!==n.children.length&&dfs(n)}};dfs(root);