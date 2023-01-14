import React, { useEffect, useState, useCallback } from 'react';
// import ReactCrop from 'react-image-crop'
import ReactCrop from './ReactCrop'
import RectanglePanel from './RectanglePanel';
import './MainSection.css';
import 'react-image-crop/dist/ReactCrop.css'


function getCroppedImg(image, crop, fileName="1.jpg") {
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  const ctx = canvas.getContext("2d");

  const pixelRatio = window.devicePixelRatio || 1;

  canvas.width = crop.width * pixelRatio;
  canvas.height = crop.height * pixelRatio;

  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.imageSmoothingQuality = "high";

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise(resolve => {
    canvas.toBlob(blob => {
        resolve(blob);
      },
      "image/jpeg",
      1
    );
  });
}

const ScreenCapture = ({ onChange, editType }) => {
  const [image, setImage] = useState(null)
  const [crop, setCrop] = useState({
    unit: '%',
    width: 50,
    height: 50,
    x: 25,
    y: 25,
    aspect: 16 / 9
  })
  const [zoom, setZoom] = useState(1)
  const [rectangles, setRectangles] = useState([])
  
  useEffect(() => {
    chrome.tabs.captureVisibleTab({format: 'png', quality: 100}, function(image) {
      if(image) {
        setImage(image)
      }
    });

    chrome.storage.local.get(['state'], async (result) => {
      const img = JSON.parse(result.state).image
      setImage(img)
    });
  }, [])

  const onCropComplete = useCallback(async (croppedArea, croppedAreaPixels) => {
    const croppedImg  = await getCroppedImg(
      document.getElementsByTagName('img')[0],
      croppedArea,
      "newFile.jpeg"
    );
    onChange(croppedImg)
  }, [])

  const initScreenshot = useCallback(async () => {
    const image = document.getElementsByTagName('img')[0];
    const croppedImg  = await getCroppedImg(
      image,
      { x: 0, y: 0, width: image.width, height: image.height },
      "newFile.jpeg"
    );
    onChange(croppedImg)
  })

  return (
    <section className="screenCapture">
      {image && <ReactCrop
        crop={editType === 'crop' && crop}
        onChange={c => setCrop(c)}
        zoom={zoom}
        aspect={16 / 9}
        onComplete={onCropComplete}
        style={{ width: '100%', height: '100%' }}
      >
        <img src={image} draggable="false" style={{ width: '100%'}} onLoad={initScreenshot}/>
      </ReactCrop>}
      {image && editType === 'draw' && (
        <RectanglePanel
          editType={editType}
          rectangles={rectangles}
          onChange={onChange}
        />
      )}
    </section>
  )
}

export default ScreenCapture