| Array Used | doublerAppend time | doublerInsert  time |
| ---------- | ------------------ | ------------------- |
| tinyArray  | 108.639 μs         | 55.28 μs            |
| smallArray | 113.774 μs         | 49.876 μs           |
| mediumArray| 195.529 μs         | 157.744 μs          |
| largeArray | 728.648 μs         | 6.753235 ms         |
| extraLargeArray | 3.894142 ms   | 996.507091 ms       |


In the table we can see that as the array get smaller and smaller the time will get  faster for the append. This is because it uses a O(n) time complexity. The Insert function uses an unshift method with would result in an o(n^2). Therefore in this situation the append function would scale much better than the insert function.