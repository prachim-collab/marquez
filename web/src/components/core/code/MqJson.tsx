// SPDX-License-Identifier: Apache-2.0

import { THEME_EXTRA, theme } from '../../../helpers/theme'
import { alpha } from '@material-ui/core/styles'
import { ocean } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

interface OwnProps {
  code: object
  showLineNumbers?: boolean
  wrapLongLines?: boolean
}

const MqJson: React.FC<OwnProps> = ({ code, wrapLongLines = false, showLineNumbers = false }) => {
  return (
    <SyntaxHighlighter
      language='json'
      style={ocean}
      wrapLongLines={wrapLongLines}
      showLineNumbers={showLineNumbers}
      customStyle={{
        backgroundColor: alpha(theme.palette.common.white, 0.1),
        borderLeft: `2px dashed ${THEME_EXTRA.typography.subdued}`,
        padding: theme.spacing(2)
      }}
    >
      {JSON.stringify(code, null, '  ')}
    </SyntaxHighlighter>
  )
}

export default MqJson
