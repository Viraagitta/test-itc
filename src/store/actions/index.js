import { DATA_FETCH_SUCCESS, DETAIL_DATA_ID, UPDATE_DATA } from "./actiontype";
const url = "https://jsonplaceholder.typicode.com/posts";

export const fetchDataSuccess = (payload) => {
  return {
    type: DATA_FETCH_SUCCESS,
    payload,
  };
};
export const fetchData = () => {
  return (dispatch, getState) => {
    return fetch(`${url}`, {})
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
export const fetchDetailDataSuccess = (payload) => {
  return {
    type: DETAIL_DATA_ID,
    payload,
  };
};

export const fetchDetailMovie = (id) => {
  return (dispatch, getState) => {
    fetch(`${url}/${id}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => dispatch(fetchDetailDataSuccess(data)))
      .catch((err) => console.log(err));
  };
};

export const createNewData = (newData) => {
  return (dispatch, getState) => {
    fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
      body: JSON.stringify(newData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(fetchData());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateDataSuccess = (payload) => {
  return {
    type: UPDATE_DATA,
    payload,
  };
};
export const updateData = (id, updated) => {
  return (dispatch, getState) => {
    fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
      body: JSON.stringify(updated),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not OK");
        }
        return resp.json();
      })
      .then((data) => {
        dispatch(fetchData());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteData = (id) => {
  // console.log(id, "<<");
  return (dispatch, getState) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => dispatch(fetchData()))
      .catch((error) => {
        console.log(error);
      });
  };
};
