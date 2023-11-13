use anchor_lang::prelude::*;

declare_id!("92TRmey1biFtJMR8oMCMd2oZQmfiAF5CR3zvTQPixLCp");

#[program]
pub mod backend {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
