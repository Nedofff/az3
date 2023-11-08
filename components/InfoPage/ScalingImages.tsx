'use client'

import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Image from 'next/image'
import "yet-another-react-lightbox/styles.css";
import NextJsImage from '../RenderLightzom/RenderLightzom';

export default function ScalingImages({imagesData}:{imagesData:any[]}) {
    const [isOpen, setIsOpen] = useState(false)
    const [index, setIndex] = useState(0)

    const openImg = (index:number) => {
        setIndex(index)
        setIsOpen(true)
    }
  return (
    <>
    {imagesData.map((img) => (
        <button key={img.key} className={`w-1/4 h-autocursor-zoom-in`} onClick={() => openImg(img.key)}>
        <Image className='w-full h-auto' src={img.src} width={img.width} height={img.height} alt={img.alt}/>
        </button>
    ))}
    <Lightbox
    controller={{closeOnBackdropClick: true}}
    plugins={[Zoom]}
    zoom={{maxZoomPixelRatio: 3}}
    styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
    open={isOpen}
    index={index}
    close={() => setIsOpen(false)}
    slides={imagesData.map((img) => ({ src:img.src }))}
    render={{ slide: NextJsImage }}
  />
  </>
  )
}
