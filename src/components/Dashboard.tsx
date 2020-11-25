import React from 'react'

interface Props {
    children: React.ReactNode
}

const Dashboard = (props: Props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Dashboard
