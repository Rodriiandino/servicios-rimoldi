import type {
  Machine,
  MachineCard,
  Project,
  ProjectCard,
  Service,
  ServiceCard
} from 'src/types/cards'
import convertTitleToURL from './convert_title_to_url'

interface ListOptions {
  imageSize?: string
  sliceStart?: number | null
  sliceEnd?: number | null
  linkPrefix?: string
}

type Item = Project | Service | Machine
type ItemCard = ProjectCard | ServiceCard | MachineCard

export const generateList = <T extends ItemCard>(
  items: Item[],
  options: ListOptions
): T[] => {
  const {
    imageSize = '400x240',
    sliceStart = null,
    sliceEnd = null,
    linkPrefix = '/'
  } = options

  let list = items.map((item, index) => {
    const { title, descriptionCard, images, ...rest } = item
    const img =
      images?.[0]?.url ||
      `https://placehold.co/${imageSize}/png?text=${convertTitleToURL(title)}`
    const imgAlt = images?.[0]?.alt || 'Imagen descriptiva'
    const link = `${linkPrefix}${convertTitleToURL(title)}`
    return {
      img,
      imgAlt,
      title,
      descriptionCard,
      link,
      index,
      ...rest
    } as T
  })

  if (sliceStart !== null && sliceEnd !== null) {
    list = list.slice(sliceStart, sliceEnd)
  }

  return list
}
