use anchor_lang::prelude::*;

declare_id!("5s3PtT8kLYCv1WEp6dSh3T7EuF35Z6jSu5Cvx4hWG79H");
#[program]

pub mod voting{
  use super::*;
  
  pub fn initialize_poll(ctx: Context<Initialize_poll>,poll_id:u64,description:String,poll_start:u64,poll_end:u64)-> Result<()>{
    let poll = &mut ctx.accounts.poll;
    poll.poll_id= poll_id;
    poll.description=description;
    poll.poll_start=poll_start;
    poll.poll_end=poll_end;
    poll.candidate_amount=0;
    Ok(())
  }
}
#[derive(Accounts)]
#[instruction(poll_id:u64)]

pub struct Initialize_poll<'info>{
  #[account(mut)]
  pub signer : Signer <'info>,
  #[account(
    init,
    payer= signer,
    space= 8+ Poll::INIT_SPACE,
    seeds= [poll_id.to_le_bytes().as_ref()],
    bump
  )]
  #[account()]
  pub poll: Account<'info,Poll>,
  pub system_program: Program<'info,System>,
}

#[account]
#[derive(InitSpace)]

pub struct Poll{
  pub poll_id: u64,
  #[max_len(32)]
  pub description : String,
  pub poll_start:u64,
  pub poll_end: u64,
  pub candidate_amount : u64 
}