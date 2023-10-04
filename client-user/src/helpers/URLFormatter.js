const URLFormatter = (link) => {
  const result = `//www.youtube.com/embed/${link.split("youtu.be/")[1]}`;
  return result;
};

export default URLFormatter;
