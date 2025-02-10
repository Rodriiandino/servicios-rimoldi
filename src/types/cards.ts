interface Image {
  url: string
  alt: string
}

interface Testimony {
  author: string
  text: string
}

export interface Project {
  title: string
  descriptionCard: string
  paragraphs: string[]
  startDate?: string
  endDate: string
  category: string
  location: string
  testimony?: Testimony
  images: Image[]
}

export interface Service {
  title: string
  descriptionCard: string
  paragraphs: string[]
  images: Image[]
}

export interface Machine {
  title: string
  descriptionCard: string
  images: Image[]
}

export interface ProjectCard extends Project {
  img: string
  imgAlt: string
  link: string
  index: number
}

export interface ServiceCard extends Service {
  img: string
  imgAlt: string
  link: string
  index: number
}

export interface MachineCard extends Machine {
  img: string
  imgAlt: string
  link: string
  index: number
}
