import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

export default function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={36}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0.15}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)',
        transition: 'background-color 300ms, transform 0.2s ease-in-out',
      }}
      outerStyle={{
        border: '2px solid var(--cursor-color)',
        backgroundColor: 'transparent',
        transition: 'border-color 300ms, transform 0.2s ease-in-out',
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  );
}

