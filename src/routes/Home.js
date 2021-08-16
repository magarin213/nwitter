import { dbService } from 'fbase';
import React, {useState, useEffect} from 'react'

function Home({userObj}) {

  const [nweet, setNweet] = useState("")
  const [nweets, setNweets] = useState([]);

  useEffect(() => {

    dbService.collection("nweets").onSnapshot(snapshot => {
      const nweetArray = snapshot.docs.map(doc => ({
        id:doc.id, ...doc.data(),
      }));
      setNweets(nweetArray);
    })
  }, []);

  const onSubmit = async(e) => {
    e.preventDefault();
   await dbService.collection("nweets").add({
      text : nweet,
      createAt : Date.now(),
      creatorId: userObj.uid,
    });
    setNweet("");
  }

  const onChang = (e) => {
    const { target : {value} ,
  } = e;
  setNweet(value)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={nweet} onChange={onChang} type="text" placeholder="What's on your mind?" maxLength={120}/>
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map(nweet => 
          <div key={nweet.id}>
          <h4>{nweet.text}</h4>
          </div>)}
      </div>
    </div>
  )
}

export default Home