/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Urlshorten.css";
import { useFirestore } from '../../hooks/useFirestore'
import { toast } from "react-toastify"; 

function UrlShortenForm({ longURL, setLongUrl, setActive, shortLink, setShortLink, onFormSubmit, uid}) {

  const { addDocument, response } = useFirestore('links')

  const handleChange = (e) => {
    setLongUrl(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!longURL) {
      toast.error('Please enter a URL');
    }  

    await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_BITLY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: longURL,
        domain: "bit.ly",
        group_guid: `${import.meta.env.VITE_REACT_APP_GUID}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const new_link = data.link.replace("https://", "");
        fetch(
          `https://api-ssl.bitly.com/v4/bitlinks/${new_link}/qr?image_format=png`,
          {
            mode: "cors",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_BITLY_TOKEN}`,
            },
          }
        )
          .then((response) => response.json())
          .then((result) => {       
            setActive(true);
            setShortLink(result);
            addDocument({
              uid, 
              shortLink
            })         
          });
      });
    setLongUrl("");  
  } 

  return (
    <div className="url-form">
      <form method="post" action="" onSubmit={handleSubmit}>
        <input
          name="long_url"
          className="url-shorten-form"
          type="text"
          value={longURL}
          placeholder="Paste your url"
          onChange={handleChange}
        />
        <button type="submit" className="button">
          Trim URL
        </button>
      </form>
    </div>
  );
}

export default UrlShortenForm; 
