import { dbService, storageService } from 'fbase'
import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";


function Nweet({nweetObj, isOwner}) {
  
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const onDeleteClick = async () => {
      const ok = window.confirm("Are you sure you want to delete this nweet?")
      if(ok){
       await dbService.doc(`nweets/${nweetObj.id}`).delete();
       await storageService.refFromURL(nweetObj.attachmentUrl).delete();
        //delete nweet
      }
    }
  
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (e) => {
      e.preventDefault();
      await dbService.doc(`nweets/${nweetObj.id}`).update({
        text: newNweet
      });
      setEditing(false);
    }
    const onChange = (e) => {
      const {
        target: {value},
      } = e;
      setNewNweet(value)
    }
  return (
    <div className="nweet">
    {editing ? (
      <>
        <form onSubmit={onSubmit} className="container nweetEdit">
          <input
            type="text"
            placeholder="Edit your nweet"
            value={newNweet}
            required
            autoFocus
            onChange={onChange}
            className="formInput"
          />
          <input className="formBtn" type="submit" value="Update Nweet" />
        </form>
        <span onClick={toggleEditing} className="formBtn cancelBtn">
            Cancel
          </span>
      </>
    ) : (
      <>
        <h4>{nweetObj.text}</h4>
        {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl}/>}
        {isOwner && (
          <div classNames="nweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
          </div>
        )}
      </>
    )}
      </div>
  )
}

export default Nweet
