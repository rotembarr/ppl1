import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countLetters: (s: string) => {} = R.pipe(
    (s: string) => stringToArray(s),
    (letters: string[]) => R.filter(s => s !== " ", letters),
    (letters: string[]) => R.countBy(R.toLower)(letters)
);


const popParen: (stack: string[], openParen: string, closeParen: string) => string[] = 
    (stack: string[], openParen: string, closeParen: string) => 
        R.isEmpty(stack) ? [closeParen] : 
            R.head(stack) === openParen ? R.tail(stack) : R.prepend(closeParen, stack);
    
const manageStack: (stack: string[], c: string) => string[] = 
    (stack: string[], c: string) => 
        c==="(" || c==="{" || c==="["   ? R.prepend(c, stack) :
        c===")"                         ? popParen(stack, "(", c) :
        c==="}"                         ? popParen(stack, "{", c) :
        c==="]"                         ? popParen(stack, "[", c) :
        stack
        
/* Question 2 */
export const isPaired: (s: string) => boolean = R.pipe(
    (s: string) => stringToArray(s),
    (letters: string[]) => R.filter(s => s==="(" || s===")" || s==="[" || s==="]" || s==="{" || s==="}", letters),
    (parentheses: string[]) => R.reduce((acc: string[], elem: string) => manageStack(acc, elem), [], parentheses),
    (stack: string[]) => R.isEmpty(stack)
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
// console.log(isPaired("{]}"))
// console.log(treeToSentence(t1))
