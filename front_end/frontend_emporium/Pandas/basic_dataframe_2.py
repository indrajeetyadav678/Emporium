import pandas as pd
# l=[1,2,2,3,4,5,6]    #list
# var=pd.DataFrame(l)
# print(type(var))
# print(var)

# dic={"a":[1,2,3,4,5],"b":[1,2,3,4,5]}     #dictionary
# # var1=pd.DataFrame(dic)
# var1=pd.DataFrame(dic,columns=["a"])  #checking column
# print(type(var1))
# print(var1["a"][3])



# lis=[[1,2,3,4,5],[11,12,13,14,15]]
# var2=pd.DataFrame(lis)
# print(type(var2))
# print(var2)
# ...................................................................
# merging two series in dataframe
sr={"s":pd.Series([1,2,3,4]),"r":pd.Series([11,12,13,14])}
var2=pd.DataFrame(sr)
print(type(var2))
print(var2)
# ..........................................................................