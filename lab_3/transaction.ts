import {Connection, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction} from "@solana/web3.js"
import "dotenv/config"
import {getKeypairFromEnvironment} from "@solana-developers/helpers"


const supplied_key=process.argv[2] || null;

if (!supplied_key){
    console.log("Please provide a public key to send to");
    process.exit(1)
}

const senderkey_pair= getKeypairFromEnvironment("SECRET_KEY"); // secret key 

const toPubkey=new PublicKey(supplied_key); // where you want to send to

const connection= new Connection("https://api.devnet.solana.com","confirmed");

console.log("✅ Loaded you own key pair ( secret one ), the destination public key and connected to Solana");

const transaction = new Transaction();

const lamports_to_send=5000;

const sendSol=SystemProgram.transfer({
    fromPubkey:senderkey_pair.publicKey,
    toPubkey,
    lamports:lamports_to_send
})

transaction.add(sendSol);

const signature= await sendAndConfirmTransaction(connection,transaction,[senderkey_pair,])

console.log(`Finsished sent ${lamports_to_send} to the address ${signature}`);

console.log(`Verify the transaction here: -> ${signature}`);