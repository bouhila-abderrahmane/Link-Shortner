import "./App.css";

import axios from "axios";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import { UseInputContext } from "./context/inputContext";

import Button from "@mui/material/Button";

export default function ShortenForm() {
  const [inputLink, setInputLink] = useState("");
  const [showError, setShowError] = useState(false);
  const {inputValue , setInputValue} = UseInputContext()

  function shortenClick() {
    axios
      .post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          group_guid: "Bqa9n4lI8YG",
          domain: "bit.ly",
          long_url: inputLink,
        },
        {
          headers: {
            Authorization: "Bearer 44f485a5483bf0ad684bb6348ab2c249dce76629",
          },
        },
      )
      .then(() => 
        setInputValue([
          ...inputValue , {id:uuidv4() , shortLink: "response.link" , longLink: "responselong_url" , copied: false }
        ]),
        setInputLink(""),
        setShowError(false)
    )
      .catch(() => setShowError(true));
  }
  return (
    <>
    <form>
      <div className="formInputContainer">
        <input
        className={showError ? "inputError formInput" : "inputSuccess formInput"}
          value={inputLink}
          onChange={(e) => {
            setInputLink(e.target.value);
          }}
          placeholder="Shorten a link here..."
        />
        {showError && (
          <p className="errorMessage">Please add a correct link !!</p>
        )}
      </div>
      <Button
        onClick={shortenClick}
        variant="contained"
        sx={{
          color: "white",
          ":hover": { background: "hsl(180, 66%, 60%) ;" },
        }}
        className="formButton"
        
      >
        Shorten it!
      </Button>
    </form>
    </>
  );
}
