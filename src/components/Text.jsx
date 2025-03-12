import React from 'react';

function Text({ tag: Tag, text, className }) {
  return (
    <Tag className={className}>{text}</Tag>
  );
}

export default Text;