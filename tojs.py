
def main():
    puzzles = []
    answers= []
    with open("../wordle/words_and_scores.txt") as f:
        for row in f:
            puzzle, pattern, answer = row.strip().split(" ")
            puzzles.append(puzzle)
            answers.append(answer)
    with open("src/constants/startwords.ts", "w") as f:
        f.write("export const STARTWORDS = ")
        f.write(repr(puzzles))
    with open("src/constants/wordlist.ts", "w") as f:
        f.write("export const WORDS = ")
        f.write(repr(answers))
main()
