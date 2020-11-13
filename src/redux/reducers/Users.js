// const initialState = {
//     data: [],
//     loading: false,
//   };
  
//   const Users = (state = initialState, action = {}) => {
//     switch (action.type) {
//       case 'USERS_REQUEST':
//         return {
//           ...state,
//           loading: true,
//         };
//       case 'USERS_SUCCESS':
//         return {
//           ...state,
//           loading: false,
//           data: action.payload
//         };
//       case 'USERS_ERROR':
//         return {
//           ...state,
//           loading: false,
//           isLogin: false,
//           data:[],
//           error: action.payload
//         };
//       default:
//         return state
//     }
//   };
  
//   export const SearchUsers = (state = initialState, action = {}) => {
//     switch (action.type) {
//       case 'SEARCH_USERS_REQUEST':
//         return {
//           ...state,
//           loading: true,
//         };
//       case 'SEARCH_USERS_SUCCESS':
//         return {
//           ...state,
//           loading: false,
//           data: action.payload
//         };
//       case 'SEARCH_USERS_ERROR':
//         return {
//           ...state,
//           loading: false,
//           isLogin: false,
//           data:[],
//           error: action.payload
//         };
//       default:
//         return state
//     }
//   };
//   export default Users;
  