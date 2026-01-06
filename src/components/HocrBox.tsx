import React from 'react';
import { HocrElement, PageSize } from '../models/hocr';

const HocrBox: React.FC<{ el: HocrElement; pageSize: PageSize }> = ({ el, pageSize }) => {
  const left = `${(el.x / pageSize.width) * 100}%`;
  const top = `${(el.y / pageSize.height) * 100}%`;
  const width = `${(el.width / pageSize.width) * 100}%`;
  const height = `${(el.height / pageSize.height) * 100}%`;

  // We use cqh (container query height) so the font scales with the box.
  const fontSize = `${((el.height / pageSize.height) * 100) * 0.85}cqh`;

  return (
    <div
      title={el.text}
      className="absolute border border-transparent hover:border-blue-500 hover:bg-blue-50/50 cursor-text flex items-center justify-center select-text group"
      style={{
        left,
        top,
        width,
        height,
        fontSize,
        containerType: 'size',
        lineHeight: 1,
        color: 'black',
      }}
    >
      <span 
        style={{ 
          fontSize: '100%', 
          whiteSpace: 'nowrap',
          letterSpacing: '-0.02em' 
        }}
      >
        {el.text}
      </span>
    </div>
  );
};

export default HocrBox;