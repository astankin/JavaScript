def bubble_sort(arr, size):
    indicator = True
    i = 0
    temp = 0
    while indicator:
        indicator = False
        for j in range(1, size - i):
            if arr[j - 1] > arr[j]:
                indicator = True
                temp = arr[j - 1]
                arr[j - 1] = arr[j]
                arr[j] = temp
    i += 1
    return arr


print(bubble_sort([5, 13, 4, -2, 1, 10, -6, 8], 8))