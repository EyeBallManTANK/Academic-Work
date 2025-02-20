"""
* Name         : weatherLocations.py
* Author       : Tate Lawson
* Created      : 02/20/2025
* Module       : 6
* Topic        : 4
* Description  : Makes two graphs, one more simple the other more complex
*
* Academic Honesty: I attest that this is my original work.
* I have not used unauthorized source code, either modified or
* unmodified.       
"""

import matplotlib.pyplot as plt
import pandas as pd

#Reads the csv files and makes seperates IA and MD
d1 = pd.read_csv("3935539.csv", sep=",")
d2 = d1[["DATE","NAME","MLY-DUTR-NORMAL", "MLY-TAVG-NORMAL"]]

plt.figure(figsize=(10,6))
plt.bar(d2["DATE"],d2["MLY-DUTR-NORMAL"])

plt.title("Simple Bar Graph")
plt.xlabel("Dates")
plt.ylabel("Min Max Weather Difference")
plt.tight_layout()
#This Visual is simple it shows the amount of precipitation on each day combining both IA and MD
plt.show()

daysToDie = d2["DATE"][:12]

#Creates figuresize and plots lines
plt.figure(figsize=(6,6))
plt.plot(daysToDie, d2["MLY-DUTR-NORMAL"][:12], marker="o",linestyle = "-",color = "pink", label = "IA Difference Min-Max")
plt.plot(daysToDie, d2["MLY-TAVG-NORMAL"][:12], marker="o",linestyle = "-",color = "m", label = "IA Average")
plt.plot(daysToDie, d2["MLY-DUTR-NORMAL"][12:], marker = "o", linestyle = "--", color = "gray", label = "MD Difference Min-Max")
plt.plot(daysToDie, d2["MLY-TAVG-NORMAL"][12:], marker = "o", linestyle = "--", color = "black", label = "MD Average")


#Legend, Dates, and Temperatures
plt.xlabel("Dates")
plt.ylabel("Temperatures")
plt.legend()

#Title and implements grid
plt.title("Fancier Graph")
plt.grid()

#This grid is more complex because you have to plot several lines on the same graph
# making sure that everything lines up correctly and color code everything and label on the lines for the legend adding serval steps
plt.show()
