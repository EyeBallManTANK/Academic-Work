"""
* Name         : arrays.py
* Author       : Tate Lawson
* Created      : 01/30.2025
* Module       : 3
* Topic        : 3
* Description  : Does different stuff with arrays and prints the outputs
*
* Academic Honesty: I attest that this is my original work.
* I have not used unauthorized source code, either modified or
* unmodified.       
"""

import numpy as np
array1 = np.array([[10,15,20],[2,3,4],[9,14.5,18]])
array2 = np.array([[1,2,5],[8,0,12],[11,3,22]])

print("This is the first array actions:\n")
#array1 stuff
print(f"This is the first array normally \n{array1}")
print(f"\nThis is the shape of the first array\n {array1.shape}")
array1slice = array1[1:3,1:3]
print("\nThis is what the first array testedd to be even or odd: ")
for line in array1:
    for num in line:
        print(f"{num}: {num % 2 == 0}")

print("\n\nThis is both array actions:\n")
#Both array stuff
print(f"This is what the arrays added up looks like: \n{np.add(array1,array2)}")
print(f"\nThis is what the array multiplied looks like: \n{np.multiply(array1,array2)}")

print("\n\nThis is second array actions:\n")
#Second array
added = 0
multiplied = 1
max = 0
min = 0
for line in array2:
    for num in line:

        if max < num:
            max = num
        
        if min > num:
            min = num

        added += num
        multiplied *= num



print(f"This is all the numbers of the second array added up:\n{added}")
print(f"This is all the numbers of the second array multiplied together: {multiplied}")
print(f"This is the maximum number for the second array: {max}")
print(f"This is the miniumum number for the second array: {min}")

