import React from 'react'
import Header from './Header'

const Layout = (props) => {
    return (
        <div className="h-screen w-screen flex flex-col justify-between">
            <Header />
            <div className="px-16 py-12 h-full">

                {props.children}

            </div>
            {/* <footer className="fixed bottom-0 bg-white py-1 border-t-2 border-green-400 w-full flex justify-center">
                <p className="text-xs text-purple-500">project by brenna</p>
            </footer> */}
        </div>
    )
}

export default Layout;