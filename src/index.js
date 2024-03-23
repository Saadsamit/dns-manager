const handleClick = (e) => {
  const classes = e.querySelector("i").classList;
  const className = classes[1];
  if (className === "fa-bars") {
    classes.add("fa-xmark");
    classes.remove("fa-bars");
  } else {
    classes.add("fa-bars");
    classes.remove("fa-xmark");
  }
};
