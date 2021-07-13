import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'
import { Transaction } from './Transaction'

export const TranscationList = () => {
    const {transactions }=useContext(GlobalContext)
    return (
        <div>
            <h3>History</h3>
            {transactions.map(transaction=>(
                <Transaction key={transaction.id} transaction={transaction} />
            ))}
        </div>
    )
}
