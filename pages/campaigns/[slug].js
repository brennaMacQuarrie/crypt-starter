import Layout from "../../components/Layout"
import { useRouter } from "next/router";
import getCampaign from "../../ethereum/campaign";
import web3 from '../../ethereum/web3';
import ContributorForm from "../../components/ContributorForm";
import Link from "next/link";

const Campaign = ({ campaignDetails }) => {
    const router = useRouter()

    return <Layout>
        <h2 className="text-2xl">{campaignDetails[0]}</h2>
        <h3 className="text-green-300 font-thin">{router.query.slug}</h3>
        <div className="flex flex-col sm:flex-row gap-6 my-8">
            <div className="order-last sm:order-first grid grid-cols-6 gap-4 w-full sm:w-3/4">
                <div className="col-span-3 flex flex-col gap-1 border border-1 border-green-300 rounded-lg px-5 py-4">
                    <h4>Address of manager</h4>
                    <p className="text-sm truncate">{campaignDetails[5]}</p>
                    <span className="text-sm font-thin">The manager created this campaign and can create requests to withdraw money.</span>
                </div>
                <div className="relative col-span-3 flex flex-col gap-1 border border-1 border-green-300 rounded-lg px-5 py-4">
                    <span className="top-[-6px] right-[-4px] animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-300 opacity-75"></span>
                    <span className="top-[-6px] right-[-4px] absolute inline-flex rounded-full h-4 w-4 bg-green-300"></span>

                    <h4>Minimum Contribution</h4>
                    <p className="text-sm">{campaignDetails[1]}</p>
                    <span className="text-sm font-thin">The amount <span className="text-green-300">in Wei</span> required to become a contributor.</span>
                </div>
                <div className="col-span-3 flex flex-col gap-1 border border-1 border-green-300 rounded-lg px-5 py-4">
                    <h4>Current balance of campaign</h4>
                    <p className="text-sm truncate">{campaignDetails[2]} <span className="text-green-300">Wei</span><br />
                    {web3.utils.fromWei(campaignDetails[2], 'ether')} <span className="text-green-300">ETH</span></p>
                </div>
                <div className="col-span-3 flex flex-col gap-1 border border-1 border-green-300 rounded-lg px-5 py-4">
                    <h4>Contributors</h4>
                    <p className="text-sm">{campaignDetails[4]}</p>
                    <span className="text-sm font-thin">Number of people who have already contributed to this campaign.</span>
                </div>
                <div className="col-span-6 flex flex-col gap-1 border border-1 border-green-300 rounded-lg px-5 py-4">
                    <div className="flex justify-between">
                        <h4>Number of requests made</h4>
                        <Link href={`/campaigns/${router.query.slug}/requests`}>
                            <a className="transition-all duration-200 text-green-300 hover:text-green-500 focus:text-green-500">
                                View requests
                            </a>
                        </Link>
                    </div>
                    <p className="text-sm">{campaignDetails[3]}</p>
                    <span className="text-sm font-thin">Requests are made by the manager in order to spend money from the account. Only the manager can make requests.</span>
                </div>
            </div>

            <ContributorForm address={router.query.slug} />
        </div>
    </Layout>
}

Campaign.getInitialProps = async (props) => {
    const campaign = await getCampaign(props.query.slug)
    const campaignDetails = await campaign.methods.getCampaignDetails().call();
    return { 
        // TODO destructure
        campaignDetails
    };
}

export default Campaign