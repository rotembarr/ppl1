import { countLetters, isPaired, treeToSentence, WordTree } from "../../src/part2/part2";

describe("Assignment 1 Part 2", () => {
    describe("countLetters", () => {
        it("counts letters", () => {
            expect(countLetters("aaabbbb")).toEqual({"a": 3, "b":4});
            expect(countLetters("AaaBbbb")).toEqual({"a": 3, "b":4});
            expect(countLetters("ABbbaab")).toEqual({"a": 3, "b":4});
            expect(countLetters("I am robot")).toEqual({"i": 1, "a": 1, "m": 1, "r":1, "o":2, "b":1, "t":1});
            expect(countLetters("I am !!!^^")).toEqual({"i": 1, "a": 1, "m": 1, "!":3, "^":2});
        });
    });

    describe("isPaired", () => {
        it("returns true for a string with paired parens", () => {
            expect(isPaired("([{}])")).toBe(true);
            expect(isPaired("This is ([some]) {text}.")).toBe(true);
            expect(isPaired("No parens, no problems.")).toBe(true);
            expect(isPaired("")).toBe(true);
            expect(isPaired("{(){}}")).toBe(true);
            expect(isPaired("{}{}{}{}{}{}{}")).toBe(true);
        });
        
        it("returns false when the parens are not paired", () => {
            expect(isPaired("(]")).toBe(false);
            expect(isPaired("This is ]some[ }text{")).toBe(false);
            expect(isPaired("(")).toBe(false);
            expect(isPaired("}")).toBe(false);
            expect(isPaired(")(")).toBe(false);
            expect(isPaired("{[}]")).toBe(false);
            expect(isPaired("{}}")).toBe(false);
            expect(isPaired("{]")).toBe(false);
            expect(isPaired("]{}")).toBe(false);
            expect(isPaired("({)")).toBe(false);
            expect(isPaired("}(){")).toBe(false);
        });
    });

    describe("treeToSentence", () => {
        const t1: WordTree = {root:"hello", children:[{root: "world", children:[]}]}
        const t2: WordTree = {root:"hello", children:[{root: "there", children:[]}, {root:"!", children:[]}]}
        const t3: WordTree = {root:"hello", children:[{root: "there", children:[{root:"!", children:[]}]}]}
        const t4: WordTree = {
            root: "Hello",
            children: [
                {
                    root: "students",
                    children: [
                        {
                            root: "how",
                            children: [
                                {
                                    root: "how2",
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
        
        it("Represents a tree as a sentence", () => {
            expect(treeToSentence(t1)).toBe("hello world");
            expect(treeToSentence(t2)).toBe("hello there !");
            expect(treeToSentence(t3)).toBe("hello there !");
            expect(treeToSentence(t4)).toBe("Hello students how how2 are you?");

        });
    });
});

