import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { getID } from '../utils/ID';

type props = {
  cols?: number,
  rows?: number,
  positions?: {
    colStart: number;
    colEnd: number;
    rowStart: number;
    rowEnd: number;
  }[]
  children: Element[],
  sx: React.CSSProperties
}

export const CustomGrid = ({ children, cols = 0, rows = 0, positions = [], sx = { width: '100%' } }: props) => {

  const CSS_HANDLES = ['container', 'grid_item_']
  const css = useCssHandles(CSS_HANDLES);

  return (
    <div className={css.container} style={Object.assign({ display: 'grid', gridTemplateColumns: `repeat(${cols === 0 ? 'auto' : cols}, 1fr)`, gridTemplateRows: `repeat(${rows === 0 ? 'auto' : rows}, 1fr)` }, sx)}>
      {
        children.map((e, i) => (
          <>
            <div className={`${css}${i}`} key={getID(8)} style={{ gridColumnStart: positions[i]?.colStart, gridColumnEnd: positions[i]?.colEnd, gridRowStart: positions[i]?.rowStart, gridRowEnd: positions[i]?.rowEnd }} >
              {
                e
              }
            </div>
          </>
        ))
      }
    </div>
  )
}
