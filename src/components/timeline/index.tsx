import React from 'react'

import Item from './item'

interface ChildComponents {
  Item: typeof Item
}

const Timeline: React.FC & ChildComponents = ({ children }) => {
  return <>{children}</>
}

Timeline.Item = Item

export default Timeline
