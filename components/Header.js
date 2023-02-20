import React from 'react'
import { MdAdd } from 'react-icons/md'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = () => {
    const router = useRouter()
    return (
        <div className="width-full bg-white/10 flex justify-between text-lg bg-gradient-to-r from-green-300/75 via-blue-500/75 to-purple-600/75">
            <Link href="/" >
                <a className="tracking-wide uppercase py-3 font-bold flex h-full items-center justify-center px-6 border-r border-white/30 transition-all hover:bg-white/30 focus:bg-white/30">Cryptstarter</a>
            </Link>
            <div className="flex h-full">
                { router.pathname !== '/' && 
                    <Link href="/">
                        <a className="py-3 flex h-full items-center justify-center px-6 border-l border-white/30 transition-all hover:bg-white/30 focus:bg-white/30">
                            Campaigns
                        </a>
                    </Link>
                }
                { router.pathname !== '/campaigns/new' && 
                    <Link 
                        href='/campaigns/new'
                    >
                        <a className="py-3 cursor-pointer flex h-full items-center px-6 transition-all hover:bg-white/30 focus:bg-white/30 border-l border-white/30">
                            <MdAdd color="white" />
                        </a>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Header;