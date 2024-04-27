from random import *
def event(elist,nlest):
    num = 0
    for i in range(nlest):
        num += nlest[i]
    a = randint(1,num)
    num = nlest[0]
    for i in range(nlest):
        if a<=num and a>=num-nlest[i]:
            return elist[i]
        num += nlest[i]
