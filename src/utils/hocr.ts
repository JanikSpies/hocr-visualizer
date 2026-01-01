import {ParsedHocrData, HocrElement} from '../models/hocr'


const parseBBox = (title: string | null): [number, number, number, number] | null => {
  if (!title) return null
  const match = title.match(/bbox (\d+) (\d+) (\d+) (\d+)/)
  if (!match) return null
  return [
    parseInt(match[1], 10), // x0
    parseInt(match[2], 10), // y0
    parseInt(match[3], 10), // x1
    parseInt(match[4], 10), // y1
  ]
}

export const parseHocr = (hocrString: string): ParsedHocrData => {
  if (typeof document === 'undefined') {
    return { elements: [], pageSize: { width: 0, height: 0 } }
  }

  const parser = new DOMParser()
  const doc = parser.parseFromString(hocrString, 'text/html')

  const pageNode = doc.querySelector('.ocr_page')
  let pageWidth = 0
  let pageHeight = 0

  const pageBBox = parseBBox(pageNode?.getAttribute('title') || null)
  if (pageBBox) {
    [, , pageWidth, pageHeight] = pageBBox
  }

  const nodes = Array.from(doc.querySelectorAll('.ocrx_word, .ocr_line'))
  const elements: HocrElement[] = []

  nodes.forEach((node, index) => {
    const text = node.textContent?.trim()
    const bbox = parseBBox(node.getAttribute('title'))

    if (text && bbox) {
      const [x0, y0, x1, y1] = bbox
      const w = x1 - x0
      const h = y1 - y0

      if (x1 > pageWidth) pageWidth = x1
      if (y1 > pageHeight) pageHeight = y1

      elements.push({
        id: `word-${index}`,
        text,
        x: x0,
        y: y0,
        width: w,
        height: h,
      })
    }
  })

  return { elements, pageSize: { width: pageWidth, height: pageHeight } }
}