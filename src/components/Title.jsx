import React from 'react';

function Title({ tag: Tag, text, className }) {
  return (
    <Tag className={className}>{text}</Tag>
    
  );
}

export default Title;