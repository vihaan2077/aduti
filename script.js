
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  let input= prompt("HEY MANI ! ENTER THE 3 MAGICALS WORDS TO PROCEED");