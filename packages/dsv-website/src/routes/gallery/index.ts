import { IMenu } from '@dsv-website/typings/IMenu';

export const galleryMenu : IMenu =  [
  {
    "key": "array",
    "children": [
      {
        "path": "/gallery/array_pop",
        "key": "array_pop"
      },
      {
        "path": "/gallery/array_push",
        "key": "array_push"
      },
      {
        "path": "/gallery/array_reverse",
        "key": "array_reverse"
      },
      {
        "path": "/gallery/array_sort",
        "key": "array_sort"
      }
    ]
  },
  {
    "key": "stack",
    "children": [
      {
        "path": "/gallery/stack_pop",
        "key": "stack_pop"
      }
    ]
  },
  {
    "key": "tree",
    "children": [
      {
        "path": "/gallery/tree_pop",
        "key": "tree_pop"
      }
    ]
  }
]