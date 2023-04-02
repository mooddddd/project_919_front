const initState = {
  userPic: "",
  email: "",
  userNick: "",
  userPw: "",
};

export const SIGNUP_EMAIL = "SIGNUP/EMAIL";

// export const sigupEmail = (email) => ({
//   type: SIGNUP_EMAIL,
//   payload: email,
// });

export const signup = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
