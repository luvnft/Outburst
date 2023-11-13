use anchor_lang::prelude::*;

pub mod utils {
    pub mod constant;
    pub mod state;
}

use crate::utils::constant::*;
use crate::utils::state::*;

declare_id!("92TRmey1biFtJMR8oMCMd2oZQmfiAF5CR3zvTQPixLCp");

#[program]
pub mod main {
    use super::*;

    pub fn init_user(ctx : Context<InitUser>, name : String, avatar : String) -> Result<()>{
        let user_account = &mut ctx.accounts.user_account;
        let authority = &mut ctx.accounts.authority;

        user_account.name = name;
        user_account.avatar = avatar;
        user_account.post_count = 0;
        user_account.last_post_id = 0;
        user_account.authority = authority.key();

        Ok(())
    }

    pub fn create_post(){

    }
}

#[derive(Accounts)]
#[instruction()]
pub struct InitUser<'info>{
    #[account(
        init, 
        seeds = [USER_SEED, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 2312 + 8
    )]
    pub user_account: Account<'info, User>,

    #[account(mut)]
    pub authority: Signer<'info>,
    pub systemm_program: Program<'info, System>
}

#[derive(Account)]
#[instruction()]
pub struct CreatePost<'info>{
    #[account(
        init,
        seeds = [
            POST_SEED, authority.key().as_ref(), 
            &[user_account.last_post_id as u8].as_ref()
        ],
        bump,
        payer = authority,
        space = 2376 + 8
    )]
    pub post_account: Account<'info, Post>,
    
    #[account(
        mut,
        seeds = [USER_SEED, authority.key().as_ref()],
        bump,
        has_one = authority
    )]
    pub user_account : Account<'info, User>,

    #[account(mut)]
    pub authority : Signer<'info>,
    pub system_program : Program<'info, System>
}