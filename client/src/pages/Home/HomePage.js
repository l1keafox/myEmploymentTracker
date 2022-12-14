import React, { useState } from "react";

// stylesheet
// import { useQuery } from "@apollo/client";

// components
import Login from "../../components/Login/Login.js";
import CreateAccount from "../../components/CreateAccount/CreateAccount.js";

// user context
import { useExistingUserContext } from "../../utils/existingUserContext";
import auth from "../../utils/auth";

function HomePage() {
  const { existingUser } = useExistingUserContext();

  // const [scores, setScore] = useState([]);
  // const [gameTitle, setGameTitle] = useState("");

  return (
    <div className="homeViewContainer">
      {/* scoreboard component - currently just placeholder */}
      {/* conditionally renders <Login /> versus <CreateUser /> based on global context variable */}
      {auth.loggedIn() ? <div /> : existingUser ? <Login /> : <CreateAccount />}
    </div>
  );
}
export default HomePage;
