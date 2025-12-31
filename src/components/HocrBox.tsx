import {HocrElement, PageSize} from '../models/hocr'


const HocrBox: React.FC<{ el: HocrElement; pageSize: PageSize }> = ({ el, pageSize }) => {
  const left = `${(el.x / pageSize.width) * 100}%`;
  const top = `${(el.y / pageSize.height) * 100}%`;
  const width = `${(el.width / pageSize.width) * 100}%`;
  const height = `${(el.height / pageSize.height) * 100}%`;
  
  const fontSize = `max(10px, ${((el.height / pageSize.height) * 100) * 0.8}cqh)`;

  return (
    <div
      title={el.text}
      className="absolute border border-transparent hover:border-blue-500 hover:bg-blue-50/50 cursor-text flex items-center justify-center leading-none select-text whitespace-nowrap overflow-hidden group"
      style={{
        left,
        top,
        width,
        height,
        fontSize,
        containerType: 'size',
      }}
    >
      <span style={{ fontSize: 'clamp(8px, 90%, 100%)' }}>
        {el.text}
      </span>
    </div>
  );
};

export default HocrBox;