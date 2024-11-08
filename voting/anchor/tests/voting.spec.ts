import * as anchor from '@coral-xyz/anchor'
import {Program} from '@coral-xyz/anchor'
import {Keypair, PublicKey} from '@solana/web3.js'
import {Voting} from '../target/types/voting'
import { BankrunProvider, startAnchor } from 'anchor-bankrun'

const IDL= require("../target/idl/voting.json")
const voting_address=new PublicKey("5s3PtT8kLYCv1WEp6dSh3T7EuF35Z6jSu5Cvx4hWG79H")

describe('voting', () => {
  it("Initialize_poll",async()=>{
    const context= await startAnchor("",[{name:"Voting",programId:voting_address}],[]);
    const provider= new BankrunProvider(context);
    
    const votingProgram = new Program<Voting>(
      IDL,
      provider
    )
    await votingProgram.methods.initializePoll(
      new anchor.BN(1),
      "what is your fav type of chocolate",
      new anchor.BN(0),
      new anchor.BN(182126480),
    ).rpc()
  })
})
