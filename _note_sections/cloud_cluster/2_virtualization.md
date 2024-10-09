---
section_title: Virtualization
---

Virtualization abstracts the actual resources such as CPU and memory.  
Often times apps and even OS's are tricked to see much more resource than there actually is. 

## Containerization
Containers are processes running as if they each are having their own machine. They have their own resources like cpu, file system (mount points).

They are typically controlled by two mechanisms cgroup and namespace. Both try to separate the resources manipulated by a container and make sure the processes in different containers don't interfere with one another. There are however some differences -- **cgroups manage what you use, namespaces manage what you see**

### Namespace
Namespaces determines what a process can see which are resources including cpu, memory.

#### How resource isolation works

User app process makes system call &rarr; Kernel (critical resource manager) checks process namespace context via `nsproxy` structure to see its visibility and accessibility &rarr; kernel executes instructions

#### Namespace types

| Namespace | What it isolates | Explanation |
| --- | --- | --- |
| cgroup    | cgroup root dir  |             |
| IPC       | interprocess commmunications (System V IPC), <br> POSIX message queues | Restricts two different processes from different namespaces to communicate |
| mount     | mount points     | 
| network   | network devices, ports, stacks | Own routing table, connection tracking table, firewall rules. Each namespace (container) new IP with full range of ports &rarr; multiple containers listening on same port no problem |  
| PID       | processes        | Processes in diff namespaces can have same PID |
| UTS       | hostname and NIS domain name | Let same system appear to have diff host and domain names to diff processes &rarr; good for containerized environments |
| user      | users and groups | Diff set of permissions than host system |
| time      | boot and monotonic clocks |


### Cgroup
Each cgroup consists of a set of controllers acting on the usage of cpu, memory. 
Processes belong to one and only one cgroup.
A cgroup also has a subtree of cgroups that inherit the scope of the parent.
 

## VMM

## CPU Virtualization

## Memory Virtualization

## I/O Virtualization