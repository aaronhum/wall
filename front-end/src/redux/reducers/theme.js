const theme = (state = "g90", action) => {
  switch (action.type) {
    case "CHANGE-THEME":
      return action.theme;
    default:
      return state;
  }
};

export default theme;
