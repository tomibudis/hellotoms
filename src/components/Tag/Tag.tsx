import React from 'react';

interface TagProps {
  name: string;
}

const Tag: React.FC<TagProps> = (props): JSX.Element => {
  return (
    <div className='bg-gray-200 shadow-lightGreen shadow-md  text-darkBlue rounded-sm px-3 text-xs font-mono whitespace-nowrap'>{props.name}</div>
  )
}

export default Tag;
