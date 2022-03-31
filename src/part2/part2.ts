import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countLetters: (s: string) => {} = R.pipe(
    (s: string) => stringToArray(s),
    (letters: string[]) => R.filter(s => s !== " ", letters),
    (letters: string[]) => R.countBy(R.toLower)(letters)
);


const popParen: (stack: string[], exp: string, ins: string) => string[] = 
    (stack: string[], exp: string, ins: string) => 
        R.isEmpty(stack) ? [ins] : 
            R.head(stack) === exp ? R.tail(stack) : R.prepend(ins, stack);
    
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
export interface WordTree {
    root: string;
    children: WordTree[];
}

export const treeToSentenceRec = (t: WordTree): string => t.children == [] ? t.root + ' ' : t.root + ' ' + R.join('')(R.map(e => treeToSentenceRec(e), t.children));
export const treeToSentence = (t: WordTree): string => (treeToSentenceRec(t)).slice(0,-1);
