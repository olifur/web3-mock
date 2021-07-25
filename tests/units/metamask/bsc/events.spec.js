import { ethers } from 'ethers'
import { mock, trigger } from '../../../../src'

describe('mock bsc events', ()=> {

  it('allows to trigger events', async ()=> {
    
    mock('bsc')

    let accounts = ['0xb0252f13850a4823706607524de0b146820F2240', '0xEcA533Ef096f191A35DE76aa4580FA3A722724bE'];
    let accountsChangedTo;

    global.ethereum.on('accountsChanged', (accounts)=>{
      accountsChangedTo = accounts
    })

    trigger('accountsChanged', accounts)

    expect(accountsChangedTo).toEqual(accounts)
  })

});
