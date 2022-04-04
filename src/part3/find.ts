import * as R from "ramda";
import { Result, makeFailure, makeOk, bind, either } from "../lib/result";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

export const findResult = <T>(pred: (x: T) => boolean, a: T[]): Result<T> => {
    const aFilt: T[] = R.filter(pred, a);
    return R.isEmpty(aFilt) ? makeFailure<T>("No element found.") : makeOk<T>(aFilt[0]);
};

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2 = (a: number[]): Result<number> => {    
    return bind(findResult(x => x % 2 === 0, a), (x: number) => makeOk<number>(x*x) );
};

export const returnSquaredIfFoundEven_v3 = (a: number[]): number => {    
    return either(findResult(x => x % 2 === 0, a), 
        (x: number) => x*x, 
        (message: string) => (-1)
    );
};