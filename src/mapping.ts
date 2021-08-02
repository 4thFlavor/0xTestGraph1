import { BigInt } from '@graphprotocol/graph-ts'
import { Mint, Burn } from '../generated/UniswapV2Router02/UniswapV2Router02'
import { SLPSupplyUpdate } from '../generated/schema'

export function handleMint(event: Mint): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    let ts = new SLPSupplyUpdate(id)
    ts.sender = event.params.sender
    ts.amount0 = event.params.amount0
    ts.amount1 = event.params.amount1
    ts.updateType = "Mint"
    ts.atBlock = event.block.number
    ts.atTransaction = event.transaction.hash
    ts.save()
}

export function handleBurn(event: Burn): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    let ts = new SLPSupplyUpdate(id)
    ts.sender = event.params.sender
    ts.amount0 = event.params.amount0
    ts.amount1 = event.params.amount1
    ts.to = event.params.to
    ts.updateType = "Burn"
    ts.atBlock = event.block.number
    ts.atTransaction = event.transaction.hash
    ts.save()
}
