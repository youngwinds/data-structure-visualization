const tree=dsv.create({type:"tree"}),Root=tree.createNode({name:"Root",value:1}),A=tree.createNode({name:"A",value:1});Root.setData({name:"R",value:10}),Root.append(A),A.swap(Root);