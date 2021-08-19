import React from 'react'
import Map from '../Map/Map'
import CurrentCallsTable from "../CurrentCallsTable/CurrentCallsTable"
import "./Dashboard.css"


function Dashboard() {
    return (
        <div>
            <Map></Map>
            <CurrentCallsTable></CurrentCallsTable>
        </div>
    )
}

export default Dashboard
