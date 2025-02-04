import pandas as pd

#Gets the data from the csv files
df1 = pd.read_csv("maxandmin.csv",sep=",",index_col="Day of week")
df2 = pd.read_csv("precip.csv",sep=",",index_col="Day of week")

#Prints statis stuff
print("Statistical Data:")
print(df1.describe())

#Merges and prints
df = pd.merge(df1, df2, on="Day of week")
print("\nMerged DataFrame:")
print(df)

#Changes to celcius
df["Max Temp"] = (df["Max Temp"] - 32) * 5/9
df["Min Temp"] = (df["Min Temp"] - 32) * 5/9

#Rounds to 2 decimals points
df["Max Temp"] = df["Max Temp"].round(2)
df["Min Temp"] = df["Min Temp"].round(2)

#makes average temp colum
df["Ave Temp"] = ((df["Max Temp"] + df["Min Temp"]) / 2).round(2)

#Puts colums in correct order
colums = ["Max Temp", "Min Temp", "Ave Temp", "Precip", "New Snow"]
df = df[colums]

print("\nFinal DataFrame:")
print(df)
