import { authService} from 'fbase'
import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function Profile({ refreshUser, userObj }) {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);


  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  // const getMyNweets = async() => {
  //   const nweets = await dbService.collection("nweets")
  //   .where("creatorId", "==", userObj.uid)
  //   .orderBy("creatorAt")
  //   .get();
  // }

  // useEffect(() => {
  //   getMyNweets();
  // }, [])


  const onChange = (e) => {
    const {
      target : {value},
    } = e;
    setNewDisplayName(value);
  }

  const onSubmit = async (e) => {
  e.preventDefault();
  if(userObj.displayName !== newDisplayName){
      await userObj.updateProfile({
      displayName : newDisplayName,
    });
    refreshUser();
  }
}

  return (
    <div className="container" className="profileForm">
    <form onSubmit={onSubmit}>
      <input onChange={onChange} type="text" autoFocus placeholder="Display name" value={newDisplayName} className="formInput" />
      <input type="submit"
          value="Update Profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }} />
    </form>
    <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  )
}

export default Profile

