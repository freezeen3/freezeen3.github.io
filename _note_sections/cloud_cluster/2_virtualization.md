---
section_title: Virtualization
---

Virtualization abstracts the actual resources such as CPU and memory.  
Often times apps and even OS's are tricked to see much more resource than there actually is. 

## Containers
Containers are processes running as if they each are having their own machine. They have their own resources like cpu, file system (mount points).

They are typically controlled by two mechanisms cgroup and namespace. Both try to separate the resources manipulated by a container and make sure the processes in different containers don't interfere with one another. There are however some differences -- **cgroups manage what you use, namespaces manage what you see**

### Namespace
Namespaces determines what a process can see which are resources including cpu, memory

### Cgroup
Each cgroup consists of a set of controllers acting on the usage of cpu, memory. 
Processes belong to one and only one cgroup
A cgroup also has a subtree of cgroups that inherit the scope of the parent.
 

## VMM

## CPU Virtualization

## Memory Virtualization

## I/O Virtualization