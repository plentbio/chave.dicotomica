#This parser creates a file named "parsed_results.js" that contains a structured JSON based on the provided .txt file
#Please rename parser_results.js and the object key that is inside to their proper names
import io
from os import listdir

files_input = listdir("parser_input")
print(files_input)

def parseFile(file_read):
    i = 1
    lines = []

    varName = file_read.replace(".txt", "")
    lines.append('const {} = `['.format(varName)) 
    lines.append('{')
    lines.append('"index": 0,')
    lines.append('"propA": "Prop 0A",')
    lines.append('"pathA": 1,')
    lines.append('"propB": "Prop 0B",')
    lines.append('"pathB": 1')
    lines.append('},')

    with io.open("".join(["parser_input/", file_read]), 'r', encoding='utf-8') as f:
        for line in f.readlines():
            line = line.rstrip()
            if i % 6 == 1:
                new_line = '"index": ' + line + ','
                lines.append('{')
                lines.append(new_line)
            if i % 6 == 2:
                new_line = '"propA": "' + line + '",'
                lines.append(new_line)
            if i % 6 == 3:
                try:
                    int(line)
                    new_line = '"pathA": ' + line + ','
                except:
                    new_line = '"pathA": "' + line + '",'
                lines.append(new_line)
            if i % 6 == 4:
                new_line = '"propB": "' + line + '",'
                lines.append(new_line)
            if i % 6 == 5:
                try:
                    int(line)
                    new_line = '"pathB": ' + line
                except:
                    new_line = '"pathB": "' + line + '"'
                lines.append(new_line)
            if i % 6 == 0:
                new_line = "}" + ','
                lines.append(new_line)
            i += 1
    lines.append('}')
    lines.append(']`;')

    file_write = file_read.replace('.txt', '.js')
    final_dir = "".join(["parser_output/", file_write])
    with io.open(final_dir, 'w', encoding='utf-8') as w:
        for line in lines:
            w.write(line)
            w.write('\n')

    print("".join([file_write, " created."]))

for f in files_input:
    parseFile(f)