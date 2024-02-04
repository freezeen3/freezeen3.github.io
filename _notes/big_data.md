---
title: Big Data Management
layout: note
---

Spatial Data

When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

<details>
  <summary>R tree</summary>


Each object is bound by an MBR, multiple MBRs grouped by a larger MBR, multiple larger MBRs grouped by an even larger MBR. Each node contains multiple MBRs of the same hierachy and is inside one disk block.<br>

Searching:<br>
Given query window $W$, find the objects that are intersecting/inside/containing $W$.
<strong>Filter-refine</strong> paradigm is used. Filter is the main discussion.<br>

Recursive algo
{% highlight python %}
dfs_r(Node n, MBR w):
    if n is non-leaf:
        for each entry e in n:
            if e intersects w:
                dfs_r(e, w)
    if n is leaf:
        for each entry e in n:
            if e.MBR intersects w && e.ptr really intersects w:
                push e.ptr to ans
{% endhighlight %}

Cost for n objects
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">Case</th>
    <th class="tg-0pky">Cost</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">best<br></td>
    <td class="tg-0pky">$O(n)$</td>
  </tr>
  <tr>
    <td class="tg-0lax">worst</td>
    <td class="tg-0lax">$O(\log n)$</td>
  </tr>
  <tr>
    <td class="tg-0lax">average</td>
    <td class="tg-0lax">tricky<br></td>
  </tr>
</tbody>
</table>
Worst: $O(n)$
Best: $O(\log n)$
Average: tricky to find

Building:


</details>

ajdfrdk\

djfkdjk\
**jj**
kk
