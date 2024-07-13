import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_BLOG_APP_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.NEXT_APP_BLOG_APP_GRAPHCMS_TOKEN;

export default async function asynchandler(req, res) {
  console.log({ graphcmsToken });

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, req.body);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}
