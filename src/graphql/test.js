import { GET_PAST_LAUNCH } from "./queries";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

class SpaceTest {
  async getTestMission(limit = 10) {
    try {
      const response = await client.query({
        query: GET_PAST_LAUNCH,
        variables: { limit },
      });
      if (!response || !response.data) throw new Error("Error fetching data");
      return response.data.launchesPast;
    } catch (error) {
      throw error;
    }
  }
}

export default new SpaceTest();
