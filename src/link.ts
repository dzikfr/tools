import pdf from './icons/pdf.svg'
import imgresize from './icons/imgresize.svg'
import speech from './icons/speech.svg'
import removebg from './icons/removebg.svg'
import json from './icons/json.svg'
import pdf2 from './icons/pdf2.svg'
import sticker from './icons/sticker.svg'
import imgenhance from './icons/imgenhance.svg'
import qr from './icons/qr.svg'

type SocialMedia = (typeof websites)[number]

type Link = {
  title: string
  icon: any
  link: string
  text?: string
}

const websites = [
  'behance',
  'buymeacoffee',
]

const LINKS: { [key in SocialMedia]: Link } = {
  removebg: {
    title: 'Remove Background',
    icon: removebg,
    link: '/removebg',
  },
  imgresize: {
    title: 'Resize Image',
    icon: imgresize,
    link: '/imgresize',
  },
  speechtotext: {
    title: 'Speech to Text',
    icon: speech,
    link: '/speechtotext',
  },
  wordtopdf: {
    title: 'Word to PDF',
    icon: pdf,
    link: '/wordtopdf',
  },
  exceltojson: {
    title: 'Excel to JSON',
    icon: json,
    link: '/exceltojson',
  },
  imgtopdf: {
    title: 'Image to PDF',
    icon: pdf2,
    link: '/imgtopdf',
  },
  enhancerimg: {
    title: 'Enhancer IMG',
    icon: imgenhance,
    link: '/enhancerimg',
  },
  imgtosticker: {
    title: 'Image to WA Sticker',
    icon: sticker,
    link: '/imgtosticker',
  },
  exceltojson5: {
    title: 'QR Code generator',
    icon: qr,
    link: '/qrgenerator',
  },
}

export default LINKS