import pandas as pd
# x=[1,2,3,4]
# # a=pd.Series(x)
# # a=pd.Series(x,index=['a','b','c','d'])  #change indexing number
# a=pd.Series(x,dtype="float")  #change datatype (int--->float)
# print(a)
# print(type(a))           #<class 'pandas.core.series.Series'>
# print(a[2])  #index number


# dic
dic={'name':["python","c","c++","java"],'por':[12,13,14,15],'rank':[1,4,2,3]}
a1=pd.Series(dic)
print(type(a1))
print(a1)