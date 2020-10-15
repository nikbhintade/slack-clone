import React from 'react'

import './Sidebar.css'
import EditIcon from '@material-ui/icons/Edit';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CommentIcon from '@material-ui/icons/Comment';
import SidebarOption from './SidebarOption'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Nikhil Bhintade</h2>
                    <h3>
                        <FiberManualRecordIcon />
                    Nikhil Bhintade
                </h3>
                </div>
                <EditIcon />
            </div>
            <SidebarOption Icon={CommentIcon} title="comment" />
            <SidebarOption title="Hello" />
        </div>
    )
}

export default Sidebar
