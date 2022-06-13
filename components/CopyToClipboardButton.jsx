import React, { useState } from 'react';

// Button that copies given text `content` to the users clipboard.
// `label` and `labelCopied` are the text to display before/after click.
export default function CopyToClipboardButton({
  content = '',
  label = 'Copy Text',
  labelCopied = 'Copied!',
}) {
  const [copied, setCopied] = useState(false);

  const copyContent = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <button
      type="button"
      onClick={copyContent}
      className="cmp-button cmp-button--link cmp-copy-to-clipboard-button"
    >
      {copied ? labelCopied : label}
    </button>
  );
}
