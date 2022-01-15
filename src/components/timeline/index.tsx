import React from 'react'

import Item from './item'

interface ChildComponents {
  Item: typeof Item
}

interface Props {}

const Timeline: React.FC<Props> & ChildComponents = ({ children }) => {
  return <div>{children}</div>
}

Timeline.Item = Item

export default Timeline
