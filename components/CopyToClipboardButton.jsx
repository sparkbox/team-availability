import React, {useState} from 'react'

// Button that copies given text `content` to the users clipboard.
// `label` and `labelCopied` are the text to display before/after click.
const CopyToClipboardButton = ({ content, label, labelCopied }) => {
  const [copied, setCopied] = useState(false)

  const copyContent = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <button onClick={copyContent}>
      {copied ? labelCopied : label}
    </button>
  )
}

CopyToClipboardButton.defaultProps = {
  content: '',
  label: 'Copy Text',
  labelCopied: 'Copied!'
}

export default CopyToClipboardButton
