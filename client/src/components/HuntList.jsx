import React from 'react'

export default function HuntList(props) {
  return (
    <>
      {props.currentUser &&
        props.hunts.map(hunt => (
          <div id='hunt-container'>
            {hunt.user &&
              <h2 id='display-name'>{hunt.user.username}</h2>
            }
            <div id='hunt-box'>
              <h4 id='hunt'>{hunt.review}</h4>
              {
                props.currentUser.id === hunt.userId &&
                <h5 id='delete-hunt' onClick={() => props.destroyHunt(hunt.landId, hunt.id)}>Delete</h5>
              }
            </div>
          </div>
        ))
      }
    </>
  )
}
