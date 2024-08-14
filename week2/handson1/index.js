import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58'

const mneumoics = generateMnemonic();
console.log(mneumoics)

const seed = mnemonicToSeedSync(mneumoics);

for(let i = 0; i < 2; ++i){
    const path = `m/44'/501'/${i}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;

    const kp = nacl.sign.keyPair.fromSeed(derivedSeed);
    console.log(`public key generated : ${bs58.encode(kp.publicKey)}`)
}