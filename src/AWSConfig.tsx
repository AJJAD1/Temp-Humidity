// import { Auth } from 'aws-amplify'

export const configDev = {
  aws_project_region: '',
  Auth: {
    identityPoolId: '',
    region: '',
    userPoolId: '',
    userPoolWebClientId: '',
    mandatorySignIn: false,
  },
  API: {
    endpoints: [
      {
        name: '',
        endpoint: '',
        region: 'eu-west-1',
        custom_header: async () => {
          return {
            "x-api-key": ""
          }
        },
      },
    ],
  },
}

// export const configProd = {
//   aws_project_region: "",
//   Auth: {
//     identityPoolId: "",
//     region: "",
//     userPoolId: "",
//     userPoolWebClientId: "",
//     mandatorySignIn: true,
//   },
//   API: {
//     endpoints: [
//       {
//         name: "",
//         endpoint:
//           "",
//         region: "",
//         custom_header: async () => {
//           return {
//             Authorization: (await Auth.currentSession())
//               .getAccessToken()
//               .getJwtToken(),
//           };
//         },
//       },
//     ],
//   },
// };
