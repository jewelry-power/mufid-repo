import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
// import background from "../images/login.png"
function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState([]);
  // const [storeData,setdata]=useState([])
  const [googleUser, setGoogleUser] = useState({});
  const [pemail, setpEmail] = useState("pvalidate");
  const [pname, setpName] = useState("pvalidate");
  const [ppassword, setPpassword] = useState("pvalidate");
  const navigate = useNavigate();
  function UserValidate(string) {
    let pattern = /\s/g;
    return !pattern.test(string);
  }
  function PassWordValidate(string) {
    let pattern =
      /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;
    return pattern.test(string);
  }
  function emailValidate(string) {
    let pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
    return pattern.test(string);
  }

  let arrData = [];

  if (localStorage.arrData != null) {
    arrData = JSON.parse(localStorage.infoUser);
  }
  console.log(arrData);

  function handelCallBack(response) {
    // {theme:"outline",size:"large"}
    // console.log("test",response.credential)
    let userObject = jwt_decode(response.credential);
    // console.log("test",userObject)
    setGoogleUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    navigate("/");
  }
  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id: "593425946716-q23ll3fdbj33ps4douabe5ud8217kh87.apps.googleusercontent.com",
  //     callback: handelCallBack

  //   })
  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv"),
  //     { theme: "outline", size: "large" }

  //   )
  // }, [])

  const [saveToLocal, setLocal] = useState([]);
  useEffect(() => {
    localStorage.setItem("infoUser", JSON.stringify(info));

    if (info.length > 0) {
      if (localStorage.infoUser.includes(email)) {
        // localStorage.removeItem(info)
        // info.pop()
      }
      localStorage.setItem("infoUser", JSON.stringify(info));
    } else {
      setInfo(JSON.parse(localStorage.getItem("infoUser")));
    }
  }, []);
  function handelSubmit(e) {
    e.preventDefault();
    if (!emailValidate(email)) {
      setpEmail("pWrong");
    }
    if (!UserValidate(name)) {
      setpName("pWrong");
    }
    if (!PassWordValidate(password)) {
      setPpassword("pWrong");
    }
    if (
      emailValidate(email) &&
      UserValidate(name) &&
      PassWordValidate(password)
    ) {
      const user = {
        name,
        email,
        password,
      };
      localStorage.setItem("infoUser", JSON.stringify(user));
      // console.log('first', user)
      // console.log(info)
      navigate("/");
    }

    // if (localStorage.infoUser.includes(email)) {

    //   alert("user already exists Sign in or try with different password")
    // }
  }
  function handelSignOut(e) {
    setGoogleUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  // useEffect(() => {
  //   const abd = localStorage.getItem('infoUser')
  //   const test = setinfo();
  //   console.log(test)
  // })

  // console.log(info)
  return (
    <div>
      {" "}
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              sign up here
            </h1>

            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">full Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="full name "
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-300 focus:amber-300 focus:outline-none   focus:bg-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p className={pname}>you're name should not contain spaces</p>
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">email</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email "
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-300
                  focus:bg-white focus:outline-none"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className={pemail}>you entered a wrong email</p>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-300
                  focus:bg-white focus:outline-none"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className={ppassword}>
                  your pass word should be at least 8 characters,special
                  characters,small and big letters{" "}
                </p>
              </div>
              <div className="text-right mt-2">
                <a className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full  bg-amber-300  hover:bg-amber-300 focus:bg-amber-300 text-black font-semibold rounded-lg
                px-4 py-3 mt-6"
                onClick={handelSubmit}
              >
                {" "}
                sign up{" "}
              </button>

              <div id="signInDiv"></div>
              {Object.keys(googleUser).length !== 0 && (
                <button onClick={(e) => handelSignOut(e)}>Sign out</button>
              )}
              {googleUser && (
                <div>
                  <img src={googleUser.picture} />
                </div>
              )}
            </form>
            <p className="mt-8">
              do you have account?{" "}
              <a className="text-blue-500 hover:text-blue-700 font-semibold">
                log in here
              </a>
            </p>
          </div>
        </div>
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          {/* <img src={background} alt="" className="w-full h-full object-cover" /> */}
        </div>
      </section>
    </div>
  );
}

export default SignUp;
