import { useState } from "react"
import TinderCard from "react-tinder-card"

const Dashboard = () => {

  const characters = [
    {
      name: 'Richard Hendricks',
      url: ''
    },
    {
      name: 'Erlich Bachman',
      url: ''
    },
    {
      name: 'Monica Hall',
      url: ''
    },
    {
      name: 'Jared Dunn',
      url: ''
    },
    {
      name: 'Dinesh Chugtai',
      url: ''
    }
  ]

  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction:any, nameToDelete:any) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name: string) => {
    console.log(name + ' left the screen!')
  }


  return (
    <div className="dashboard">
      {/* <ChatContainer /> */}
      <div className="swiper-container">
        <div className="card-container">
        {/* {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )} */}

        </div>
      </div>


    </div>
  )
}

export default Dashboard