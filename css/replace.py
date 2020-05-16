my_file=open("./stars.css","r")
lines = my_file.readlines()
counter = 0
new_lines = []

for line in lines:
    while 'px' in line:
        if counter % 2 == 0:
            line = line.replace('px', 'vw', 1)
        else:
            line = line.replace('px', 'vh', 1)
        counter += 1
    new_lines.append(line)

lines = new_lines
print(new_lines)
new_lines2 = []
x = 0


import re
for line in new_lines:
    res = []
    idx = 0
    for word in re.findall('(\d+(vw|vh)+)',line):
        res.extend(re.findall('\d+', word[0]))
    for r in res:
        x += 1
        line = line[:idx] + line[idx:].replace(r, str(int(r)/10), 1)
        idx = line.index(str(int(r)/10)) + len(str(int(r)/10))

    new_lines2.append(line)


outF = open("./stars_new.css", "w")
outF.writelines(new_lines2)
outF.close()
my_file.close()
