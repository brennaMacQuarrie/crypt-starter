import Spinner from './Spinner';
import React, { useState } from 'react';
import getCampaign from '../ethereum/campaign';
import web3 from '../ethereum/web3'
import { Router, useRouter } from 'next/router';

const ContributorForm = (props) => {
    const [amount, setAmount] = useState('');
    const [processing, setProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const router = useRouter()

    const handleContribute = async (e) => {
        e.preventDefault()
        setProcessing(true)

        try {
            const accounts = await web3.eth.getAccounts()
            const campaign = await getCampaign(props.address)

            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(amount, 'ether')
            })
            router.replace(`/campaigns/${router.query.slug}`)
            setAmount('')
        } catch (err) {
            setErrorMessage(err.message)
        }
        setProcessing(false)
    }
    

    return (
        <form onSubmit={handleContribute} className="flex flex-col gap-3">
            <h2 className="text-purple-300 font-thin">Become a <span className="font-normal">Campaign Contributor</span>!</h2>
            <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="font-light">Amount of <span className="text-green-300 font-normal">ETH</span> to contribute</label>
                <input 
                    value={amount}
                    onChange={event => setAmount(event.target.value)}
                    id="amount" 
                    name="amount" 
                    type="text" 
                    required 
                    className="text-black rounded py-1 px-2 mb-2"
                />
                <div className="flex gap-6">
                    <button type="submit" disabled={processing} className="w-full sm:w-fit transition-all hover:bg-white/20 py-1 px-5 h-fit border-[1px] border-white bg-white/10 rounded">
                        Contribute                
                    </button>
                    { processing && <Spinner /> }
                </div>
            </div>
            <p className="text-purple-300 font-thin">{errorMessage}</p>
        </form>
    )
}

export default ContributorForm