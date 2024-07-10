import pandas as pd
# var=pd.DataFrame({"A":[1,2,3,4],"B":[5,6,7,8]})
# var["C"]= var["A"]+var["B"]  #addition in pandas
# var["D"]= var["A"]-var["B"]
# var["E"]= var["A"]*var["B"]
# print(var)


var1=pd.DataFrame({"A":[10,20,30,40],"B":[15,16,17,18]})

# var1["check"] =var1["A" ] <=20  #here we are checking if var1 is lessthan or equalto 20 or not and stored true and false in check column
# print(var1)


var1["checkgreater"]= var1["B"] >=16
print(var1)