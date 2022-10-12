import { createApp, render, h , provide } from 'vue'
import { createPinia } from 'pinia';

import App from "./App.vue";
import { router } from './router';

import './assets/css/tailwind.css'

// setup fake backend
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { DefaultApolloClient } from "@vue/apollo-composable";



import VueApollo from 'vue-apollo'

// app.use(
//   createAuth0({
//       "domain": "dev-7xly8pm5.us.auth0.com",
//       "client_id": "eo9Hz1C8ROVu2ZOxLA8vPtUdRCjKrGPd",
//     redirect_uri: window.location.origin
//   })
// );





const httpLink = createHttpLink({
  uri: 'http://localhost:8081/v1/graphql',
})

const cache = new InMemoryCache()


export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})



export const app = createApp({
  setup() {
      provide(DefaultApolloClient, apolloClient)
  },
  render : () => h(App)
})


app.use(createPinia());
app.use(router);

app.mount('#app');
