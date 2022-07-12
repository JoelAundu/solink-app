import gql from "graphql-tag";

export const GET_SPACE_MISSION = gql`
  query {
    launchNext {
      mission_name
      launch_date_local
      launch_site {
        site_name
      }
    }
  }
`;

// export const GET_UPCOMING_LAUNCH = gql`
//   query GetSpaceMission($limit: Int!) {
//     launchNext(limit: $limit) {
//       mission_name
//       launch_date_local
//       launch_site {
//         site_name
//       }
//     }
//   }
// `;

export const GET_PAST_LAUNCH = gql`
  query GetSpaceMission($limit: Int!) {
    launchesPast(limit: $limit) {
      mission_name
      launch_site {
        site_name
      }
    }
  }
`;
