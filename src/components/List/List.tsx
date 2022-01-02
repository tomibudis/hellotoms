import React from 'react';

import { Navigation2 } from 'react-feather';
import cx from 'classnames';

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

const List: React.FC<ListProps> = (props): JSX.Element => {
  return (
    <p className={cx("flex items-start font-sans text-white/70", props.className)}>
      <div style={{ marginTop: '0.40rem' }}>
        <Navigation2
          size={14}
          className="rotate-90 text-lightGreen mr-2"
        />
      </div>
      {props.children}
    </p>
  )
}

export default List;