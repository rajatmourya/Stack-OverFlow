import React from 'react'
import './RightSidebar.css'
import Widget from './Widget'
import WidgetTag from './WidgetTag'

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widget />
      <WidgetTag />
    </aside>
  )
}

export default RightSidebar
