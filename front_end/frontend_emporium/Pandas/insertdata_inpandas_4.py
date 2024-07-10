import pandas as pd

var=pd.DataFrame({"a":[1,2,3,4],"b":[9,8,7,6],"c":[11,12,13,14]})

#insert-->insert(index,name,data)  3 parameter
# var.insert(3,"sum",var["a"]+var["b"])
# var.insert(3,"slicing",var["a"][:2]) #jitna data var a se chahiye uthna enter kr rhe h 
# print(var)



# delete-->
var1=var.pop("c")
print(var1)
print(var)

del var["b"]
print(var)