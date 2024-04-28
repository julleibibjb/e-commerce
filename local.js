fetch("http://127.0.0.1:8000/api/login/")
  .then((res) => res.json())
  .then((res) => {
    let data = res;
    const foundUser = data.filter(
      (item) => item.email === email && item.password === password
    );
    if (foundUser[0]) {
      toast.success("Login successful");
      localStorage.setItem("id", foundUser[0].id);
      store.dispatch(loginUser());
      navigate("/");
    } else {
      toast.warn("Email or password is incorrect");
    }
  })
  .catch((err) => {
    toast.error("Login failed due to: " + err.message);
  });
