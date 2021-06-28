const initalState = {
  isLogin: false,
  userInfo: {},
};

export default function userReducer(state = { ...initalState }, action) {
  switch (action.type) {
    case "loginSuccess":
      return {
        isLogin: true,
        userInfo: { name: "AG" },
      };
    default:
      return { ...state };
  }
}
