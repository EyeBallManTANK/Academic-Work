import numpy as np
array36 = np.arange(1,37)
np.random.shuffle(array36)
array36 = np.reshape(array36,[6,6])
arrayPositive = np.eye(6)
arrayPositive = array36 * arrayPositive
arrayNegative = np.eye(6)

i1 = 0
#Makes negative number by reversing np.eye
for line in arrayNegative:
    i2 = 0
    for single in line:
        if single == 1:
            arrayNegative[i1, i2] = 0
        else:
            arrayNegative[i1,i2] = -1
        i2 +=1
    i1 += 1
arrayNegative = array36 * arrayNegative
arrayBoth = arrayNegative + arrayPositive
arrayFinal = [0,0,0,0,0,0]

i1 = 0
i2 = 0
#Makes finalArray combined negative and positive numbers before shaping it
for line in arrayBoth:
    i2 = 0
    combined = 0
    for single in line:
        combined = combined + arrayBoth[i1,i2]
        i2+=1
    arrayFinal[i1] = combined
    i1 += 1

#Reshapes, finds max score and max scorers position and prints
arrayFinal = np.reshape(arrayFinal, [6,1])
maxScore = int(np.max(arrayFinal))
maxPosition = np.argmax(arrayFinal)
print(f"The winner of this round is Player {maxPosition +1} with a score of {maxScore} points")