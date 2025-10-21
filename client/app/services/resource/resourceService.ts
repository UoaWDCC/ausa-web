import { BaseResource } from "@/app/models/Object/resourceTypes"
import client from "../fetch-client"

const defaultResource: BaseResource = {
  title: "resource",
  description:
    "Here is where you can find resources from AUSA, we provide six types of wellbeing resources: Connection to Land & Environment, Financial Stability & Support, Mental & Emotional Wellbeing, Physical Wellbeing, Social & Family Wellbeing, and Spiritual Wellbeing.",
  resources: [],
}

const ResourceService = {
  getLandEnvironmentResources: async (): Promise<BaseResource> => {
    try {
      const { data, response } = await client.GET("/resources/land-environment")

      if (!response.ok) throw new Error("Failed to fetch land & environment resources")

      return data || defaultResource
    } catch (error) {
      console.error(error)
      return defaultResource
    }
  },
  getFinancialStabilityResources: async (): Promise<BaseResource> => {
    try {
      const { data, response } = await client.GET("/resources/financial-stability")

      if (!response.ok) throw new Error("Failed to fetch financial stability resources")

      return data || defaultResource
    } catch (error) {
      console.error(error)
      return defaultResource
    }
  },
  getMentalEmotionalResources: async (): Promise<BaseResource> => {
    try {
      const { data, response } = await client.GET("/resources/mental-emotional")

      if (!response.ok) throw new Error("Failed to fetch mental & emotional wellbeing resources")

      return data || defaultResource
    } catch (error) {
      console.error(error)
      return defaultResource
    }
  },
  getPhysicalResources: async (): Promise<BaseResource> => {
    try {
      const { data, response } = await client.GET("/resources/physical")

      if (!response.ok) throw new Error("Failed to fetch physical wellbeing resources")

      return data || defaultResource
    } catch (error) {
      console.error(error)
      return defaultResource
    }
  },
  getSocialFamilyResources: async (): Promise<BaseResource> => {
    try {
      const { data, response } = await client.GET("/resources/social-family")

      if (!response.ok) throw new Error("Failed to fetch social & family wellbeing resources")

      return data || defaultResource
    } catch (error) {
      console.error(error)
      return defaultResource
    }
  },
  getSpiritualResources: async (): Promise<BaseResource> => {
    try {
      const { data, response } = await client.GET("/resources/spiritual")

      if (!response.ok) throw new Error("Failed to fetch spiritual wellbeing resources")

      return data || defaultResource
    } catch (error) {
      console.error(error)
      return defaultResource
    }
  },
}

export default ResourceService
