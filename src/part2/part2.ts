import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countLetters: (s: string) => {} = R.pipe(
    (s: string) => stringToArray(s),
    (letters: string[]) => R.filter(s => s !== " ", letters),
    (letters: string[]) => R.countBy(R.toLower)(letters)
);


/* Question 2 */
export const isPaired: (s: string) => boolean = R.pipe(
    (s: string) => stringToArray(s),
    (letters: string[]) => R.filter(s => s==="(" || s===")" || s==="[" || s==="]" || s==="{" || s==="}", letters),
    (parentheses: string[]) => (parentheses.length % 2 == 1) ? false : R.equals(R.slice(0,parentheses.length/2),R.slice(parentheses.length/2 + 1, parentheses.length))
);

/* Question 3 */
interface WordTree {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => t.children == [] ? t.root + ' ' : t.root + ' ' + R.join('')(R.map(e => treeToSentence(e), t.children));


const t1: WordTree = {
    root: "Hello",
    children: [
        {
            root: "students",
            children: [
                {
                    root: "how",
                    children: [
                        {
                            root: "how",
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            root: "are",
            children: []
        },
        {
            root: "you?",
            children: []
        }
    ]
}


// console.log(countLetters("RotEm and MOR are the beSSt"))
// console.log(isPaired("[a]"))
console.log(treeToSentence(t1))
