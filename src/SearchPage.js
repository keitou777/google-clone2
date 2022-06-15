import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import response from "./response";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "@mui/icons-material/Image";
import {
  Apps,
  Settings,
  SettingsApplicationsOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const [show, setShow] = useState(false);

  //   LIVE API REQUEST (!!add GOOGLE API KEY to keys.js!!)
  // const { data } = useGoogleSearch(term);

  //   Mock API response
  const data = response;

  //   console.log(data);

  // *****Top position controllable scroll navbar ******
  const controlNavbar = () => {
    if (window.scrollY <= 100) {
      document.getElementById("searchPage_scrollNavbar").style.top = "-100px";
    } else if (window.scrollY > 100 && window.scrollY < 200) {
      document.getElementById("searchPage_scrollNavbar").style.top =
        window.scrollY - 210 + "px";
    } else {
      document.getElementById("searchPage_scrollNavbar").style.top = "-10px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google logo"
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <Link to="/all">
                <div className="searchPage_option">
                  <SearchIcon />
                  All
                </div>
              </Link>
              <Link to="/news">
                <div className="searchPage_option">
                  <DescriptionIcon />
                  News
                </div>
              </Link>
              <Link to="/images">
                <div className="searchPage_option">
                  <Image />
                  Images
                </div>
              </Link>
              <Link to="/shopping">
                <div className="searchPage_option">
                  <LocalOfferIcon />
                  Shopping
                </div>
              </Link>
              <Link to="/maps">
                <div className="searchPage_option">
                  <RoomIcon />
                  Maps
                </div>
              </Link>
              <Link to="/more">
                <div className="searchPage_option">
                  <MoreVertIcon />
                  More
                </div>
              </Link>
            </div>
            <div className="searchPage_optionsRight">
              <Link to="/tools">
                <div className="searchPage_option">Tools</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage_results">
          <div className="searchPage_scrollNavbar" id="searchPage_scrollNavbar">
            <div className="searchPage_scrollNavbar_left">
              <Link to="/">
                <img
                  className="searchPage_logo"
                  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                  alt="google logo"
                />
              </Link>
              <Search hideButtons />
            </div>
            <div className="searchPage_scrollNavbar_right">
              <Settings />
              <Apps />
              <Avatar />
            </div>
          </div>
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>
          {data?.items.map((item) => (
            <div className="searchPage_result">
              {/* {item.pagemap?.cse_image?.length > 0 &&
                item.pagemap?.cse_image[0]?.src && (
                  <img
                    className="searchPage_resultImage"
                    src={item.pagemap.cse_image[0].src}
                    alt=""
                  />
                )} */}
              <a className="searchPage_resultUrl" href={item.link}>
                {item.link}
              </a>
              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
