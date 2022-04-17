# DsArray.splice(start[, deleteCount[, item1[, item2[, ...]]]])

## Introduce

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

## Parameters

- start
  The index at which to start changing the array.

If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many elements as items provided.

If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If start is negative infinity, it will begin from index 0.

- deleteCount Optional
  An integer indicating the number of elements in the array to remove from start.

If deleteCount is omitted, or if its value is equal to or larger than array.length - start (that is, if it is equal to or greater than the number of elements left in the array, starting at start), then all the elements from start to the end of the array will be deleted. However, it must not be omitted if there is any item1 parameter.

If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

- item1, item2, ... (Optional)
  The elements to add to the array, beginning from start.

If you do not specify any elements, splice() will only remove elements from the array.

## Return Value

An array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.
