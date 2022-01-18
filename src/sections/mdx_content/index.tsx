import React from 'react'
import dynamic from 'next/dynamic'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface Props extends MDXRemoteSerializeResult {}

const Sections: Record<string, React.ReactNode> = {
  Showcase: dynamic(() => import('@/sections/content_showcase')),
  ShowcaseSingle: dynamic(() => import('@/sections/content_showcase_single')),
  Column: dynamic(() => import('@/sections/content_column')),
  Featured: dynamic(() => import('@/sections/content_featured')),
  Metrics: dynamic(() => import('@/sections/content_metrics')),
}

const MDXContent: React.FC<Props> = ({ compiledSource, scope }) => {
  return (
    <MDXRemote
      compiledSource={compiledSource}
      scope={scope}
      components={Sections}
    />
  )
}

/**
 * HOW IT WORKS:
 * ==============
 * I'm basically just relaying the sections for content
 * to the renderer. This allows me to dynamically choose
 * which sections to use for each case-study. Since the
 * sections are imported dynamically, the runtime cost of
 * doing it like this is very marginal.
 */
//* Done
export default MDXContent
