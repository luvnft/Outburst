use anchor_lang::prelude::*;

#[account]
#[derive(Default)]
pub struct User {
    pub name : String,
    pub avatar: String,
    pub authority: Pubkey,
    pub last_post_id : u8,
    pub post_count : u8
}