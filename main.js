const input = document.querySelector(".input")
input.addEventListener("keyup", function () {
  let value = input.value
  if ( value !== "") {
    //check if wrong character
    if (!value.match(/^-?\d+$/)) {
      alert("Wrong Character")
      return 0
    }
    //if it's ok
    else {
      if (value !== "") {
        document.documentElement.style.setProperty('--duration', `${value}s`);
      }
    }
  }
})

