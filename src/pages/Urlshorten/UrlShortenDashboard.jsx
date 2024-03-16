/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */ 
import "./Urlshorten.css";
import UrlShortenForm from "./UrlShortenForm";
import UrlShortenList from "./UrlShortenList"; 
import { useState } from "react";
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

function UrlShortenDashboard() {
  const [longURL, setLongUrl] = useState("");
  const [shortLink, setShortLink] = useState({}); 
  const [active, setActive] = useState(false);

  const handleFormSubmit = (shortLinkData) => {
    setShortLink(shortLinkData);
    setActive(true);
  };

  const { user } = useAuthContext() 
  const { documents } = useCollection(
      'links',
      ["uid", "==", user.uid], 
      ['createdAt', 'desc']
      )

  return (
    <div className="url">

      <h2 className="url-header">
        Welcome to Scissor – Transforming Long URLs into Short Links!
      </h2>

      <UrlShortenForm
        longURL={longURL}
        setLongUrl={setLongUrl}
        shortLink={shortLink}
        setShortLink={setShortLink}
        setActive={setActive}
        onFormSubmit={handleFormSubmit}
        uid={user.uid}
      />

      {active && documents && <UrlShortenList shortLink={shortLink} links={documents}  />}
    </div>
  );
}

export default UrlShortenDashboard;
