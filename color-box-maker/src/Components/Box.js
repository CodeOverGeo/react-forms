import React from 'react';
import './Box.css';

const Box = ({
  id,
  handleRemove,
  width = 100,
  height = 100,
  backgroundColor = 'navy',
}) => {
  const remove = () => handleRemove(id);

  return (
    <div>
      <div
        className="Box"
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor,
        }}
      />
      <button onClick={remove}>Remove Box</button>
    </div>
  );
};

export default Box;
