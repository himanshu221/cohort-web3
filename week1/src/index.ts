import crypto from 'crypto'

const input = "himanshu";

let nounce = 0;
const mine = (input: string): {
    nounce: number,
    hash: string
} | undefined => {
    while(1){
        const hash = crypto.createHash('SHA256').update(input + nounce).digest('hex');
        if(hash.startsWith("00000")){
            return {
                nounce,
                hash
            }
        }
        nounce++;
    }
    

}
const out = mine("harkirat => Raman | Rs 100 and Ram => Ankit | Rs 10");
console.log(out);