import { graphql } from "@/gql";

export const GET_SITE_SETTINGS = graphql(`
  query GetSiteSettings {
    shop {
      passwordWallEnabled: metafield(namespace: "site_settings", key: "password_enabled") {
        value
      }
      password: metafield(namespace: "site_settings", key: "password") {
        value
      }
    }
  }
`);
