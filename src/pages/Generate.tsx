import React, { CSSProperties } from 'react';
import css from 'style-to-object';

export default function Generate() {
  return (
    <div>
      <iframe
        style={css('display: block; position: absolute; width: 100%; height: 100%; border: none; overflow: hidden;') as CSSProperties}
        src='old_generate.html'
        sandbox="allow-scripts allow-same-origin allow-downloads"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
      >
      </iframe>
    </div>
  )
}
