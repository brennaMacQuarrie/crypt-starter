import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { MdAdd } from "react-icons/md";
import Layout from '../components/Layout';
import Link from 'next/link';

class CampaignIndex extends Component {
    // nextjs does not execute componentDidMount on the server
    // so to get this on the server, it needs to be getInitialProps (not traditional React)
    
    // does not render yet! only returns data
    // static is a CLASS function, it's not assigned to CampaignIndex
    // Next wants to get this data separately from any rendering actions
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns }
    }

    renderCampaigns() {
        return this.props.campaigns.map((c) => (
            <div key={c} className="pt-3 pb-5 px-5 rounded-lg bg-white/10 max-w-22 min-w-16 relative">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-b-lg"></span>
                <h4 className="font-bold truncate">
                    {c}
                </h4>
                <Link href={`campaigns/${c}`}>
                    <a className="transition-all duration-200 text-green-300 hover:text-green-500 focus:text-green-500">View campaign</a>
                </Link>
            </div>
        ));
    }
    
    render() {
        return <Layout>
        <div className="flex flex-col gap-10 items-center sm:items-start w-full">
            <h2 className="font-montserrat tracking-wide text-2xl">Open Campaigns</h2>
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start md:justify-between w-full">
                <div className="flex flex-col gap-6">
                    {this.props.campaigns.length
                        ? this.renderCampaigns() 
                        : <div className="font-thin text-green-300">No campaigns have been created</div>
                    }
                </div>
                <Link href="campaigns/new">
                    <a className="transition-all duration-200 hover:bg-white/20 focus:bg-white/30 py-3 px-5 flex gap-3 items-center h-fit w-fit border-[1px] border-white bg-white/10 rounded-lg whitespace-nowrap">
                        <MdAdd color="white" /> Create campaign
                    </a>
                </Link>
            </div>
        </div>
    </Layout>
    }
}

export default CampaignIndex