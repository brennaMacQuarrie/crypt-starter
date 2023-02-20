import React from 'react';

const Spinner = props => {
    return (
        <div className="animate-spin flex items-center justify-center rounded-full w-8 h-8 bg-gradient-to-tr from-[#1b232f] via-blue-300/75 to-purple-600/75">
            <div className="h-7 w-7 rounded-full bg-[#1b232f]"></div>
        </div>
    )
}

export default Spinner