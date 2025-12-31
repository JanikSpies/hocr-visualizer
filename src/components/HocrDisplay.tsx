import React, { useMemo } from 'react'
import { parseHocr } from '../utils/hocr'
import HocrBox from './HocrBox'

interface Props {
  hocrString: string
}

const HocrDisplay: React.FC<Props> = ({ hocrString }) => {
  const { elements, pageSize } = useMemo(() => parseHocr(hocrString), [hocrString])

  if (!elements.length) {
    return (
      <div className="p-4 rounded-2xl border border-slate-300 w-full h-full flex items-center justify-center text-slate-400">
        No HOCR data found
      </div>
    )
  }

  return (
    <div className="p-4 rounded-2xl border border-slate-300 w-full h-full overflow-auto bg-slate-50 text-black">
      <div
        className="relative bg-white shadow-sm mx-auto"
        style={{
          aspectRatio: `${pageSize.width} / ${pageSize.height}`,
          width: '100%',
          maxWidth: '100%',
        }}
      >
        {elements.map((el) => (
          <HocrBox key={el.id} el={el} pageSize={pageSize} />
        ))}
      </div>
    </div>
  )
}

export default HocrDisplay