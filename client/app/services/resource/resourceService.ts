import { BaseResource } from "@/app/models/Object/resourceTypes"
import client from "../fetch-client"

const defaultResource: BaseResource = {
  title: "resource",
  description:
    "Here is where you can find resources from AUSA, we provide four types of resources: Financial, Academic, Wellbeing, and External. ",
  resources: [],
}

const ResourceService = {
  getFinancialResources: async (): Promise<BaseResource> => {
    try {
      const { data, response } = await client.GET("/resources/financial")

      if (!response.ok) throw new Error("Failed to fetch financial resources")

      return data || defaultResource
    } catch (error) {
      console.error(error)
      return defaultResource
    }
  },
  getAcademicResources: async (): Promise<BaseResource> => {
    try {
      const { data, response } = await client.GET("/resources/academic")

      if (!response.ok) throw new Error("Failed to fetch academic resources")

      return data || defaultResource
    } catch (error) {
      console.error(error)
      return defaultResource
    }
  },
  getWellbeingResources: async (): Promise<BaseResource> => {
    try {
      const { data, response } = await client.GET("/resources/wellbeing")

      if (!response.ok) throw new Error("Failed to fetch wellbeing resources")

      return data || defaultResource
    } catch (error) {
      console.error(error)
      return defaultResource
    }
  },
  getExternalResources: async (): Promise<BaseResource> => {
    try {
      const { data, response } = await client.GET("/resources/external")

      if (!response.ok) throw new Error("Failed to fetch external resources")

      return data || defaultResource
    } catch (error) {
      console.error(error)
      return defaultResource
    }
  },
}

export default ResourceService
