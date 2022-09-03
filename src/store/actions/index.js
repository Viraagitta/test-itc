// import {
//   DATA_FETCH_SUCCESS,
//   NEW_DATA,
//   // DELETE_DATA,
//   DETAIL_DATA_ID,
//   UPDATE_DATA,
// } from "../actions/actiontype";

import { DATA_FETCH_SUCCESS } from "./actiontype";

// export const loginAdmin = (credential, callback = () => {}) => {
//   return (dispatch, getState) => {
//     fetch("https://disney-hotstar-p3c1.herokuapp.com/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: `Bearer ${data.accessToken()}`,
//         // access_token: localStorage.setItem(
//         //   "access_token",
//         //   credential.access_token
//         // ),
//       },
//       body: JSON.stringify(credential),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         if (data.access_token) {
//           const access_token = data.access_token;
//           const username = data.username;
//           const role = data.role;

//           localStorage.setItem("access_token", access_token);
//           localStorage.setItem("username", username);
//           localStorage.setItem("role", role);
//           // localStorage.getItem("access_token");
//           callback();
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

export const fetchDataSuccess = (payload) => {
  return {
    type: DATA_FETCH_SUCCESS,
    payload,
  };
};
export const fetchData = () => {
  return (dispatch, getState) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {})
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};
// export const fetchDetailMovieSuccess = (payload) => {
//   return {
//     type: DETAIL_MOVIE_ID,
//     payload,
//   };
// };

// export const fetchDetailMovie = (id) => {
//   return (dispatch, getState) => {
//     fetch(`https://disney-hotstar-p3c1.herokuapp.com/movies/${id}`, {
//       method: "GET",
//       headers: {
//         access_token: localStorage.getItem("access_token"),
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not OK");
//         }
//         return response.json();
//       })
//       .then((data) => dispatch(fetchDetailMovieSuccess(data)))
//       .catch((err) => console.log(err));
//   };
// };

// export const createMovieSuccess = (payload) => {
//   return {
//     type: NEW_MOVIE,
//     payload,
//   };
// };
// export const createNewMovie = (newMovie) => {
//   return (dispatch, getState) => {
//     fetch("https://disney-hotstar-p3c1.herokuapp.com/movies", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         access_token: localStorage.getItem("access_token"),
//       },
//       body: JSON.stringify(newMovie),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         dispatch(fetchMovies());
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

// export const updateMovieSuccess = (payload) => {
//   return {
//     type: UPDATE_MOVIE,
//     payload,
//   };
// };
// export const updateMovie = (id, updated) => {
//   return (dispatch, getState) => {
//     fetch(`https://disney-hotstar-p3c1.herokuapp.com/movies/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         access_token: localStorage.getItem("access_token"),
//       },
//       body: JSON.stringify(updated),
//     })
//       .then((resp) => {
//         if (!resp.ok) {
//           throw new Error("Network response was not OK");
//         }
//         return resp.json();
//       })
//       .then((data) => {
//         dispatch(fetchMovies());
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

// export const deleteMovie = (id) => {
//   // console.log(id, "<<");
//   return (dispatch, getState) => {
//     fetch(`https://disney-hotstar-p3c1.herokuapp.com/movies/${id}`, {
//       method: "DELETE",
//       headers: {
//         access_token: localStorage.getItem("access_token"),
//       },
//     })
//       .then((resp) => resp.json())
//       .then((data) => dispatch(fetchMovies()))
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
