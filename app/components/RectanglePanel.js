import React, { useEffect, useState } from 'react'

import './RectanglePanel.css'

const RectanglePanel = ({ editType, onChange }) => {
  // const editType === 'draw' = true
  let rectangles = []
  let $screenshot;
  let $draw;
  let $marquee;
  let $boxes;

  // Temp variables
  let startX = 0;
  let startY = 0;
  const marqueeRect = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const pixelRatio = window.devicePixelRatio || 1;

  useEffect(() => {
    if (document && window) {
      const $ = document.querySelector.bind(document);
    
      // DOM elements
      $screenshot = document.getElementsByTagName('img')[0];
      $draw = $('#draw');
      $marquee = $('#marquee');
      $boxes = $('#boxes');
    
      $marquee.classList.add('hide');
      $screenshot.addEventListener('pointerdown', startDrag);

      canvas.width = $screenshot.width;
      canvas.height = $screenshot.height;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.imageSmoothingQuality = "high";

      ctx.drawImage(
        $screenshot,
        0,
        0,
        $screenshot.width,
        $screenshot.height
      );
    }
  }, [editType])

  const startDrag = (ev) => {
    if (editType === 'draw') {
      // middle button delete rect
      if (ev.button === 1) {
        const rect = hitTest(ev.layerX, ev.layerY);
        if (rect) {
          const newRectangles = Object.assign([], rectangles)
          newRectangles.splice(newRectangles.indexOf(rect), 1);
          // setRectangles(newRectangles)
          rectangles = newRectangles
          redraw(newRectangles);
        }
        return;
      }
      window.addEventListener('pointerup', stopDrag);
      $screenshot.addEventListener('pointermove', moveDrag);
      $marquee.classList.remove('hide');
      startX = ev.layerX;
      startY = ev.layerY;
      drawRect($marquee, startX, startY, 0, 0);
    }
  }

  const stopDrag = (ev) => {
    if (editType === 'draw') {
      $marquee.classList.add('hide');
      window.removeEventListener('pointerup', stopDrag);
      $screenshot.removeEventListener('pointermove', moveDrag);
      if (ev.target === $screenshot && marqueeRect.width && marqueeRect.height) {
        const newRectangles = Object.assign([], rectangles)
        newRectangles.push(Object.assign({}, marqueeRect));
        // setRectangles(newRectangles);
        rectangles = newRectangles
        redraw(newRectangles);
      }
    }
  }

  const moveDrag = (ev) => {
    if (editType === 'draw') {
      let x = ev.layerX;
      let y = ev.layerY;
      let width = startX - x;
      let height = startY - y;
      if (width < 0) {
        width *= -1;
        x -= width;
      }
      if (height < 0) {
        height *= -1;
        y -= height;
      }
      Object.assign(marqueeRect, { x, y, width, height });
      drawRect($marquee, marqueeRect);
    }
  }

  const hitTest = (x, y) => {
    return rectangles.find(rect => (
      x >= rect.x &&
      y >= rect.y && 
      x <= rect.x + rect.width &&
      y <= rect.y + rect.height
    ));
  }

  const redraw = async (rects) => {
    boxes.innerHTML = '';
    rects.forEach((data) => {
      ctx.beginPath();
      ctx.lineWidth = "3";
      ctx.strokeStyle = "red";
      ctx.rect(data.x, data.y, data.width, data.height)
      ctx.stroke();
      boxes.appendChild(drawRect(
        document.createElementNS("http://www.w3.org/2000/svg", 'rect'), data
      ));

      canvas.toBlob(function(blob) {
        onChange(blob)
      });
    });
  }

  const drawRect = (rect, data) => {
    const { x, y, width, height } = data;
    if (rect) {
      rect.setAttributeNS(null, 'width', width);
      rect.setAttributeNS(null, 'height', height);
      rect.setAttributeNS(null, 'x', x);
      rect.setAttributeNS(null, 'y', y);
    }
    
    return rect;
  }

  return (
    <React.Fragment>
      <svg width="100%" height="100%" id="draw" xmlns="http://www.w3.org/2000/svg" style={{ left: 0, right: 0}}>
        <rect id="marquee" x="450" y="420" width="150" height="150" />
        <g id="boxes"></g>
      </svg>
    </React.Fragment>
  )
}

export default RectanglePanel;
