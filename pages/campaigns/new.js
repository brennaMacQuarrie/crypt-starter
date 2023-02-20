import { useState } from 'react'
import { MdAdd } from 'react-icons/md';
import Layout from '../../components/Layout'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import { useRouter } from 'next/router';
import Spinner from '../../components/Spinner';

const CampaignNew = () => {
    const [minimum, setMinimum] = useState('');
    const [campaignTitle, setCampaignTitle] = useState('')

    const [errorMessage, setErrorMessage] = useState('');
    const [processing, setProcessing] = useState(false);
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)

        try {
            const accounts = await web3.eth.getAccounts()
            const campaign = await factory.methods.createCampaign(minimum, campaignTitle).send({
                from: accounts[0]
            })
            const address = campaign.blockhash
            // TODO
            router.push({
                href: `/campaigns/${address}`,
                query: { slug: address },
              })
        } catch (err) {
            setErrorMessage(err.message)
        }
        setProcessing(false)
    };

    return <Layout>
        <h2 className="text-2xl mb-5">Create a new campaign</h2>
        <div>
            <form onSubmit={onSubmit} className="flex flex-col gap-8 mb-3">

                <p>Enter the minimum contribution required to become a backer, <br />
                and click the <span className="text-green-300 font-light inline">Create campaign</span> button to begin your new campaign</p>

                <div className="w-full flex gap-6 justify-start items-end">
                    <div className="w-1/2 flex flex-col gap-4">
                        <label htmlFor="minimum" className="font-light">Minimum contribution <span className="text-green-300">[in Wei]</span>:</label>
                        <input 
                            value={minimum}
                            onChange={event => setMinimum(event.target.value)}
                            id="minimum" 
                            name="minimum" 
                            type="text" 
                            required 
                            className="mb-4 text-black rounded py-1 px-2"
                        />
                        <label htmlFor="campaignTitle" className="font-light">The name of your campaign:</label>
                        <input 
                            value={campaignTitle}
                            onChange={event => setCampaignTitle(event.target.value)}
                            id="campaignTitle" 
                            name="campaignTitle" 
                            type="text" 
                            required 
                            className="text-black rounded py-1 px-2"
                        />
                        {/* TODO add conversion */}
                    </div>
                    
                    <button type="submit" className="transition-all hover:bg-white/20 py-1 px-5 h-fit w-fit border-[1px] border-white bg-white/10 rounded">
                        <div className="flex gap-3 items-center">
                            <MdAdd color="white" /> Create campaign
                        </div>
                    </button>

                    { processing && <Spinner /> }
                </div>
            </form>
            
            { errorMessage ?? <p className="text-purple-300 font-thin">{errorMessage}</p>}
        </div>
    </Layout>
}

export default CampaignNew;