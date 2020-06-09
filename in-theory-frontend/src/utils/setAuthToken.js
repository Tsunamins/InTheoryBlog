
const setAuthToken = token => {
const update = {}
//const update = { ...options };
  if (token) {
    // Apply authorization token to every request if logged in
 
              update.headers = {
                ...update.headers,
                Authorization: `Bearer ${localStorage.jwt}`,
              };
            }
            return update;
          }
   
//   else {
//     // Delete auth header
//     delete axios.defaults.headers.common["Authorization"];
//   }
//};
export default setAuthToken;

// function updateOptions(options) {
//     const update = { ...options };
//     if (localStorage.jwt) {
//       update.headers = {
//         ...update.headers,
//         Authorization: `Bearer ${localStorage.jwt}`,
//       };
//     }
//     return update;
//   }
  
//   export default function fetcher(url, options) {
//     return fetch(url, updateOptions(options));
//   }