const tree=dsv.create({type:"tree",transition:{duration:100}}),n=7;function threeStepsProblem(e,t){let r=null;return e?e&&(r=tree.createNode({name:String(t)}),e.append(r)):r=tree.createNode({name:t.toString()}),1===t?1:2===t?2:3===t?4:threeStepsProblem(r,t-1)+threeStepsProblem(r,t-2)+threeStepsProblem(r,t-3)}const result=threeStepsProblem(void 0,n);console.log(result);