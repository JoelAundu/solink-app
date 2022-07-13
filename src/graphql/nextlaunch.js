import { GET_NEXT_MISSION } from "./queries";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

class SpaceService {
  async getNextMission(limit = 10) {
    try {
      const response = await client.query({
        query: GET_NEXT_MISSION,
        variables: { limit },
      });
      if (!response || !response.data) throw new Error("Error fetching data");
      return response.data.launchNext;
    } catch (error) {
      throw error;
    }
  }
}

export default new SpaceService();
