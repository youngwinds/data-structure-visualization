# Quick Sort

Quicksort is a divide and conquer algorithm.

It selects an element as the "base pivot" and partitions the given array around the chosen "base pivot".

There are many different versions of quicksort that choose the "base pivot" in different ways.

1. Select the first element as the "base pivot".
2. Select the last element as the "base pivot".
3. Select an intermediate element as the "datum pivot".
4. Choose a random element as the "base pivot".

The key process in quicksort is partitioning.

The goal of partitioning is to, after selecting an element x as a "datum pivot", do the following

1. Put x in the correct position in the sorted array
2. Put all elements less than x before x
3. Put all elements greater than x after x.

After a series of operations above, we can get two smaller arrays. Then we do the following:

1. Repeat the partitioning for all elements less than x
2. Repeat the partitioning for all elements greater than x

We can get four smaller arrays and repeat these steps......

Until the final array's length <= 1 terminating. We can get the sorted array.
