/**
 * The list of resources in each {@link BaseResource} object
 */
export interface Resource {
  /**
   * The header of each card
   * @example Getting help from financial difficulties
   */
  header: string
  /**
   * The description of each resource card
   */
  description: string
  /**
   * The background image of each resource card
   */
  image: string
  /**
   * The href of clicking the cards
   */
  href: string
}

/**
 * The base resource card (extends from the four known categories, financial, academic, external, wellbeing)
 */
export interface BaseResource {
  /**
   * The title of the page
   * @example Financial
   */
  title: string
  /**
   * The description of the page (normally shown in the heading section)
   */
  description: string
  /**
   * The list of resources to display on each page
   */
  resources: Resource[]
}
