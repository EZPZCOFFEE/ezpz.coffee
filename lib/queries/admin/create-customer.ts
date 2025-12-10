export const CREATE_CUSTOMER = `
  #graphql
  mutation createCustomer($email: String!, $addresses: [MailingAddressInput!]) {
    customerCreate(
      input: {
        email: $email
        emailMarketingConsent: {
          marketingOptInLevel: CONFIRMED_OPT_IN
          marketingState: SUBSCRIBED
        }
        addresses: $addresses
      }
    ) {
      customer {
        id
        createdAt
      }
      userErrors {
        field
        message
      }
    }
  }
`;
