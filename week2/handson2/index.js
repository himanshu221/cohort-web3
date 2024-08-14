import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { HDNodeWallet } from 'ethers'

const mneumoics = generateMnemonic();
console.log(mneumoics);
const seed = mnemonicToSeedSync(mneumoics);
const hdnode = HDNodeWallet.fromSeed(seed);

for(let i =0 ;i < 2; ++i){
    const path = `m/44'/60'/${i}'/0'`;
    const child = hdnode.derivePath(path);
    console.log(child.address)
}
