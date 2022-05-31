n=int(input())
array=list(map(int,input().split()))
array.sort()

result = 0

for i in range(1,n):
    array[i] += array[i-1]

result = sum(array)

print(result)