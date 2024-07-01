---
section_title: Spatialx
---
## HIHi 
Searching:  
This is from spatial data
Given query window $W$, find the objects that are intersecting/inside/containing $W$.  
**Filter-refine** paradigm is used. Filter is the main discussion.  
$x + y = z$

Recursive algo
```python 
dfs_r(Node n, MBR w):
    if n is non-leaf:
        for each entry e in n:
            if e intersects w:
                dfs_r(e, w)
    if n is leaf:
        for each entry e in n:
            if e.MBR intersects w && e.ptr really intersects w:
                push e.ptr to ans

```
Cost for n objects  

| Case    | Cost       |
|---------|------------|
| best    | $O(n)$     |
| worst   | $O(\log n)$|
| average | tricky     |

Buildingy:

## Another section about search