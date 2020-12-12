export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE after finished developing...
  // token:
  // "GaWG5QhcOBFfYcO1F8nL5yeLqcO5ym8TGMCKZHNjPLwJp6syruHWjNX0RGJEXPL7LVDYZv9Yu5K0lIwFFGmiX9XkaKWvTN51arPDNBfzsRIvQelaDRKsHRS4wp541Cl_yFxXG2pA_e7pM313mBPjQ",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
