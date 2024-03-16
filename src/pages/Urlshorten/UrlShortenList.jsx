/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import "./Urlshorten.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { useFirestore } from '../../hooks/useFirestore'

function UrlShortenList({ links }) { 

  const [copy, setCopy] = useState(false); 


  const { deleteDocument } = useFirestore('links')

  return (
    <div>
    {links.map(link => (
      <div key={link.id} className="shortened-link">
        <img src={link.shortLink.qr_code} alt="Qr code" className="qr-code" />

          <div>
            <button onClick={() => deleteDocument(link.id)}><i className="fa-regular fa-trash-can"></i></button>
            <h3 className="here">Here's your short link!</h3>
            <span className="shorten-url">
              <p>{link.shortLink.link}</p>
              <CopyToClipboard onCopy={() => setCopy(true)} text={link.shortLink.link}>               
                { !copy ? <i className="fa-regular fa-copy copy-image"></i> : <i className="fa-solid fa-copy copy-image colour-copied-image"></i>  }
              </CopyToClipboard>
            </span>           
          </div>

      </div>
    ))}
  </div> 
  );
}

export default UrlShortenList;
