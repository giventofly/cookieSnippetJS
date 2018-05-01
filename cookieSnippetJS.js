const setPrivacy = function () {
  localStorage.setItem("privacy", "read and agreed");
}

const getPrivacy = function () {
  const value = localStorage.getItem("privacy");
  //if not exists cookie
  if (value === null) {
    //do stuff ...
    //set cookie.
    setPrivacy();
  }
}