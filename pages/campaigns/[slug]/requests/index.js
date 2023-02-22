import React, { Component } from "react"
import Link from "next/link"
import Router, { useRouter } from "next/router"
import web3 from '../../../../ethereum/web3'
import { MdAdd, MdArrowBack, MdAddTask, MdPriceCheck } from "react-icons/md"
import Layout from "../../../../components/Layout"
import getCampaign from "../../../../ethereum/campaign"

const RequestsIndex = ({ requests, approversCount, requestCount }) => {
    const router = useRouter();

    return <Layout>
        <Link href={`/campaigns/${router.query.slug}`}>
            <a className="mb-4 flex items-center gap-1 transition-all duration-200 text-green-300 hover:text-green-500 focus:text-green-500">
                <MdArrowBack /> <span className="text-sm font-thin">Back to campaign details</span>
            </a>
        </Link>
        <div className="flex flex-col sm:flex-row gap-6 justify-between items-center">
            <div>
                <h2 className="text-2xl">All requests</h2>
                <h3 className="text-green-300 font-thin truncate">For campaign at {router.query.slug}</h3>
            </div>
            <Link href={`/campaigns/${router.query.slug}/requests/new`}>
                <a className="flex items-center gap-1 w-full sm:w-fit transition-all hover:bg-white/20 py-2 px-5 h-fit border-[1px] border-white bg-white/10 rounded"><MdAdd /> Create a new request</a>
            </Link>
        </div>
        <div className="order-last sm:order-first grid grid-cols-1 sm:grid-cols-2 last:self-center gap-4 w-full my-6">
            {
                requests.map((r, index) => {
                    return <RequestDetails
                        key={index}  
                        id={index} 
                        request={r}
                        campaignAddress={router.query.slug}
                        approversCount={approversCount}
                    />
                })
            }              
        </div>
        <p>Found {requestCount} requests.</p>
    </Layout>
}

function RequestDetails ({ id, campaignAddress, request, approversCount}) {
    const onApprove = async () => {
        const accounts = await web3.eth.getAccounts();
        const campaign = getCampaign(campaignAddress);
        await campaign.methods.approveRequest(id).send({
            from: accounts[0]
        });
        Router.replace(`/campaigns/${campaignAddress}/requests`);
    }

    const onFinalize = async () => {
        const accounts = await web3.eth.getAccounts();
        const campaign = getCampaign(campaignAddress);
        await campaign.methods.finalizeRequest(id).send({
            from: accounts[0]
        });
        Router.replace(`/campaigns/${campaignAddress}/requests`);
    }

    const readyToFinalize = request.approvalCount > (approversCount / 2)
    const containerClasses = request.complete ? 'bg-white/20' : ''

    return ( 
    <div className="flex flex-col gap-1 border border-1 border-white rounded-b-lg">
        <div className="flex justify-center text-black px-5 py-2 bg-white">
            <h5>{ request.description }</h5>           
        </div>  
        <div className="px-5 py-4 flex flex-col gap-4">
            {
                request.complete 
                    ? <p className="text-green-300">Complete</p>
                    : <p className="text-gray-400">Pending finalization</p>
            }
           
            <span className="text-sm flex flex-col gap-1">
                <p className="truncate">Amount requested <span className="text-green-300 font-thin">(ETH)</span>: &nbsp;
                    <span className="font-thin truncate">
                        { request.value }
                    </span>
                </p>
                <p>Approval count: <span className="font-thin">{ request.approvalCount ?? 0 } / {approversCount}</span></p>
                <p className="truncate">Recipient: <span className="font-thin">{ request.recipient }</span></p>
            </span>
        </div>
        <div className="flex w-full divide-x border-t border-t-white bg-white/20">
            <button onClick={onApprove} disabled={request.approved} className="py-3 w-1/2">
                {
                    request.hasApproved 
                        ? <p className="flex justify-center gap-2">Approve <MdAddTask className="h-6 w-6" /></p>
                        : <p className="flex justify-center gap-2">Approved <MdAddTask className="h-6 w-6 text-green-500" /></p>
                } 
            </button>
            <button onClick={onFinalize} disabled={readyToFinalize} className="flex justify-center gap-2 py-3 w-1/2">
                {
                    request.complete
                        ? <p className="flex justify-center gap-2">Finalize <MdPriceCheck className="h-6 w-6" /></p>
                        : <p className="flex justify-center gap-2">Finalized <MdPriceCheck className="h-6 w-6 text-green-500" /></p>
                }
            </button>
        </div>
    </div>         
    );
}
  

RequestsIndex.getInitialProps = async (props) => {
    const accounts = await web3.eth.getAccounts()
    const currentAccount = accounts[0]
    
    const campaign = await getCampaign(props.query.slug)
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();

    const requests = await Promise.all(
        Array(parseInt(requestCount)).fill().map(async (el, index) => {
            const hasApproved = await campaign.methods.hasApproved(index).call({
                from: accounts[0]
            });
            const details = await campaign.methods.requests(index).call();
            details.hasApproved = hasApproved
            details.value = web3.utils.fromWei(details.value, 'ether')
            return details
        })
    )
    return { requests, requestCount, approversCount, currentAccount }
}


export default RequestsIndex