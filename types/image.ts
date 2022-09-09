import { StaticImageData } from 'next/image'

export interface Image {
  //   image: HTMLImageElement;
  src: string | StaticImageData
  className?: string
}
