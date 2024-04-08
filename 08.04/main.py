import re


def slowa_wk(word):
    k =0
    w=0
    for letter in word:
        if letter == 'k':
            k+=1
        elif letter == 'w':
            w+=1
    if w==k:
        return True

    else:
        return False


def ileslow(word):
    w, a, k, c, j, e = 0,0,0,0,0,0
    for letter in word:
        if letter == 'w':
            w+=1
        elif letter == 'a':
            a+=1
        elif letter == 'k':
            k+=1
        elif letter == 'c':
            c+=1
        elif letter == 'j':
            j+=1
        elif letter == 'e':
            e+=1
    a=a//2
    mini = min([w,a,k,c,j,e])
    return mini

def reg(word):
    pattern = r"wakacje"
    result = re.sub(pattern, "", word)
    return len(result)-1




plik_odczyt = open('slowa.txt', 'rt')
l = 1
# for linia in plik_odczyt:
#     slowa = slowa_wk(linia)
#     print(slowa)
#     l += 1
# for linia in plik_odczyt:
#     slowa = ileslow(linia)
#     print(slowa)
#     l += 1
for linia in plik_odczyt:
    slowa = reg(linia)
    print(slowa)
    l += 1
