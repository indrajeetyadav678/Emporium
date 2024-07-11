#csv file:-a simple way to store big data sets is to use CSV file (comma seperated files).
# csv files contains plain text and is a well know format that can be read by everyone including Pandas.

# READ CSV..........................................
import pandas as pd
# csv_1=pd.read_csv("C:\\Users\\Lenovo\Downloads\\day.csv")
# print(csv_1)


# Get number of rows.....................................................
# csv_2=pd.read_csv("C:\\Users\\Lenovo\Downloads\\day.csv",nrows=2)
# print(csv_2)
# print(type(csv_2))

# Get Specific  column by name and indexing.....................................................
#  Numeric  Numeric-2 Numeric-Suffix
# csv_3=pd.read_csv("C:\\Users\\Lenovo\Downloads\\day.csv",usecols=["Numeric","Numeric-2"])
# csv_3=pd.read_csv("C:\\Users\\Lenovo\Downloads\\day.csv",usecols=[2])
# print(csv_3)
# print(type(csv_3))
# skip row..............................................................
# csv_4=pd.read_csv("C:\\Users\\Lenovo\Downloads\\day.csv",skiprows=[2])
# print(csv_4)
# print(type(csv_4))

# change index number...............................................
# csv_5=pd.read_csv("C:\\Users\\Lenovo\Downloads\\day.csv",index_col="Numeric")
# print(csv_5)
# print(type(csv_5))
# change header...............................................
# csv_6=pd.read_csv("C:\\Users\\Lenovo\Downloads\\day.csv",header=2)
# print(csv_6)
# print(type(csv_6))
# change headering (name)...............................................
# csv_7=pd.read_csv("C:\\Users\\Lenovo\Downloads\\day.csv",names=["col"])
# csv_7=pd.read_csv("C:\\Users\\Lenovo\Downloads\\day.csv",names=["col1","col2","col3"])
# print(csv_7)
# print(type(csv_7))

#  change datatype in file
csv_8=pd.read_csv("C:\\Users\\Lenovo\Downloads\\day.csv",dtype={"Numeric-2":"float"})
print(csv_8)
print(type(csv_8))