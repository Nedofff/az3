'use client'

import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Image from 'next/image'
import "yet-another-react-lightbox/styles.css";
import NextJsImage from '../RenderLightzom/RenderLightzom';

interface ImageData {
    src: string
    width: number
    height: number
    alt: string
}

export default function ScalingImage({img}:{img:ImageData}) {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <button className={`h-autocursor-zoom-in`} onClick={() => setIsOpen(true)}>
    <Image className='w-full h-full' src={img.src} width={img.width} height={img.height} alt={img.alt}/>
    </button>
    <Lightbox
    styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
    controller={{closeOnBackdropClick: true}}
    carousel={{
        finite:true
    }}
    open={isOpen}
    plugins={[Zoom]}
    close={() => setIsOpen(false)}
    slides={[{ src:img.src }]}
    render={{ slide: NextJsImage,
        buttonPrev: () => null,
        buttonNext: () => null, }}
  />
  </>
  )
}
