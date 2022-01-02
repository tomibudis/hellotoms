import React from 'react';

interface OccupationProps {
  title: string;
  company?: string;
  start: string;
  end: string; 
}

const OccupationTitle: React.FC<OccupationProps> = (props): JSX.Element => {
  return (
    <div className="flex flex-col">
      <h4 className="flex font-sans font-bold">
        {props.title}
        <span className='text-lightGreen pl-1'>{props.company}</span>
      </h4>
      <p className='font-mono text-sm mt-1'>{props.start} - {props.end}</p>
    </div>
  )
}

export default OccupationTitle;
