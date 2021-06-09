const toCn = (str) => {
  if (typeof str !== "string") {
    return "";
  }
  return str.replace(/[^a-zA-Z]/g, "").toLowerCase();
};

export default toCn;
