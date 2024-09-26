print("... importing list of words")

all_words = []

fin = open("words.txt", "r")
for line in fin:
    word = line.strip()
    all_words.append(word)

print("... finished import")

three_letters = []

for i in range(3):
    three_letters.append(input(f"Enter letter #{i+1}: "))

words_with_letters = []

for word in all_words:
    if word.count(three_letters[0]) >= 1:
        if word.count(three_letters[1]) >= 1:
            if word.count(three_letters[2]) >= 1:
                words_with_letters.append(word)

print(f"The letters you entered are: {three_letters}")
print(f"The following words contain your supplied characters in (non-consecutive) order: {words_with_letters}")