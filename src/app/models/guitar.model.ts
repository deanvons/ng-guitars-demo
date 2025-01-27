export interface Guitar {
    id: string
    model: string
    manufacturer: string
    bodyType: string
    materials: Materials
    strings: number
    image: string
  }
  
  export interface Materials {
    neck: string
    fretboard: string
    body: string
  }
  