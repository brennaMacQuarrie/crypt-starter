import Link from "next/link";
import Router, { useRouter } from "next/router"
import { useState } from "react";
import { MdAdd, MdArrowBack } from "react-icons/md";
import Layout from "../../../../components/Layout"
import Spinner from "../../../../components/Spinner"
import getCampaign from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";

const NewRequest = () => {
    // TODO manage multi state?
    const [description, setDescription] = useState();
    const [amount, setAmount] = useState();
    const [receivingAddress, setReceivingAddress] = useState();
    const [processing, setProcessing] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const router = useRouter();
    // TODO get 'amount available'
    const handleCreate = async (e) => {
        e.preventDefault()
        setProcessing(true)

        const campaign = getCampaign(router.query.slug)

        try {
            const accounts = await web3.eth.getAccounts()
            await campaign.methods.createRequest(description, web3.utils.toWei(amount, 'ether'), receivingAddress)
                .send({ from: accounts[0] })

            setAmount('')
            setDescription('')
            setReceivingAddress('')
            router.push(`/campaigns/${router.query.slug}/requests`)
        } catch (err) {
            setErrorMessage(err.message)
        }

        setProcessing(false)

    }

    return <Layout>
        <Link href={`/campaigns/${router.query.slug}/requests`}>
            <a className="flex items-center gap-1 mb-4 transition-all duration-200 text-green-300 hover:text-green-500 focus:text-green-500">
                <MdArrowBack /> <span className="text-sm font-thin">Back to requests</span>
            </a>
        </Link>
        <h2 className="text-2xl">Create a new request</h2>
        <h3 className="text-green-300 font-thin truncate">For campaign at {router.query.slug}</h3>
        <form onSubmit={handleCreate} className="flex flex-col gap-3 w-2/3 my-6">
            <label htmlFor="description" className="font-light">Request description</label>
            <input 
                value={description}
                onChange={event => setDescription(event.target.value)}
                id="description" 
                name="description" 
                type="text" 
                required 
                className="text-black rounded py-1 px-2"
            />
            <label htmlFor="amount" className="font-light">Amount requested in <span className="text-green-300">ETH</span></label>
            <input 
                value={amount}
                onChange={event => setAmount(event.target.value)}
                id="amount" 
                name="amount" 
                type="text" 
                required 
                className="text-black rounded py-1 px-2"
            />
            <label htmlFor="receivingAddress" className="font-light">Recipient</label>
            <input 
                value={receivingAddress}
                onChange={event => setReceivingAddress(event.target.value)}
                id="receivingAddress" 
                name="receivingAddress" 
                type="text" 
                required 
                className="text-black rounded py-1 px-2"
            />
            <div className="flex gap-6 items-center">
                <button type="submit" disabled={processing} className="flex items-center gap-1 w-full sm:w-fit transition-all hover:bg-white/20 py-2 px-5 h-fit border-[1px] border-white bg-white/10 rounded">
                    <MdAdd /> Create request              
                </button>
                { processing && <Spinner /> }
            </div>
            <p className="text-purple-300 font-thin">{errorMessage}</p>
        </form>
    </Layout>
}



export default NewRequest