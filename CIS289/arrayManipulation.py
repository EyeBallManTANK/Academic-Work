"""
* Name         : arrayManipulation.py
* Author       : Tate Lawson
* Created      : 01/30.2025
* Module       : 3
* Topic        : 4
* Description  : Does different stuff with arrays and prints the outputs
*
* Academic Honesty: I attest that this is my original work.
* I have not used unauthorized source code, either modified or
* unmodified.       
"""
import numpy as np

#Does different stuff with arrays
array1 = np.array([[1, 2, 5], [8, 0, -7], [7, 3, 9]])
print("Original array:")
print(array1)

array1 = array1.T
print("\nTransposed array:")
print(array1)

array1 = np.swapaxes(array1, 0, 1)
print("\nSwapped axes array:")
print(array1) 

array1 = np.flipud(array1)
print("\nHorizontally flipped array:")
print(array1)

new_row = np.array([[3, 4, 5]]) 
array1 = np.vstack((array1, new_row))
print("\nArray with added row:")
print(array1)

new_column = np.array([[7], [8], [9], [0]]) 
array1 = np.hstack((array1, new_column))
print("\nArray with added column:")
print(array1)

print("\nProper Array:")
arrayProper = np.array([[5,2,1,7],[-7,0,8,8],[9,3,7,9],[3,4,5,0]])
print(arrayProper)


array1 = array1[:, :-1]
print("\nArray after removing the last column:")
print(array1)

array1 = array1.reshape(6, 2)
print("\nReshaped array (2 columns, 6 rows):")
print(array1)

split_arrays = np.split(array1, 3)
middle_array = split_arrays[1]
print("\nMiddle 2x2 array:")
print(middle_array)

flattened_third_array = split_arrays[2].flatten()
print("\nFlattened third array:")
print(flattened_third_array)