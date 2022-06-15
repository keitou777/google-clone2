import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({ hideButtons = false, term = "" }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState();
  const history = useNavigate();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history("/search/");
  };
  return (
    <form className="submit">
      <div className="search">
        <div className="search_input">
          <SearchIcon className="search_inputIcon" />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            // placeholder="search keywords..."
          />
          <MicIcon className="search_micIcon" />
        </div>
        <div
          className={hideButtons ? "search_buttonsHidden" : "search_buttons"}
        >
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      </div>
    </form>
  );
}

export default Search;
