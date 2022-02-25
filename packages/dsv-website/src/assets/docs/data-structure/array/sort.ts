export default {
  code: `const data = [50,100,200,50,150,200,110,99,33,150].map((d, i) => {
  return {
    key: i.toString(),
    name: d.toString(),
    value: d,
  };
});

const array = new DsArray(document.querySelector('#container'), {
  type: 'tree',
  data: data,
  layout: {
    padding: {
      top: 50,
      bottom: 50,
      left: 50,
      right: 50,
    },
  },
});

setTimeout(()=>{
  array.sort((a,b)=>a-b)
},1000)
 `,
};