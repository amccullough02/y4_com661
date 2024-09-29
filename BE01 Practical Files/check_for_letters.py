print("... importing list of words")

all_words = []

fin = open("words.txt", "r")
for line in fin:
    word = line.strip()
    all_words.append(word)
fin.close()

print("... finished import")

three_letters = []

for i in range(3):
    three_letters.append(input(f"Enter letter #{i+1}: "))

correct_content = []

for word in all_words:
    if all(letter in word for letter in three_letters):
        correct_content.append(word)

correct_order = []

for word in correct_content:
    index = 0
    for character in word:
        if character == three_letters[index]:
            index += 1
        if index == len(three_letters):
            correct_order.append(word)
            break

print(f"Words containing your three inputs in order: {correct_order}")

fout = open("letters.txt", "w")
for word in correct_order:
    text_to_write = f"{word}\n"
    fout.write(text_to_write)
fout.close()
