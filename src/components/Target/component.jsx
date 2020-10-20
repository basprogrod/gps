import React, { useContext } from 'react'
import pt from 'prop-types'
import './styles.scss'
import useDistanceToTarget from '../../hooks/useDistanceToTarget'
import { LIMIT, CLOSELY } from '../../constants/config'
import message from '../../assets/svg/email.svg'
import AppContext from '../../contexts/AppContext/AppContext'

const Target = ({ target, lat, lon }) => {

  const { handleModalShow } = useContext(AppContext)
  // console.log("TCL: Target -> ctx", ctx)

  const distance = useDistanceToTarget(target, lat, lon )

  const isAchieve = distance < LIMIT
  const isClosely = distance < CLOSELY && distance > LIMIT

  const handleClick = () => {
    // if(!isAchieve) return null
    handleModalShow(<div>4398u346943</div>)

  }

  return (
    <div 
      className={`target ${isAchieve ? 'achieved' : ''} ${isClosely ? 'closely' : ''}`}
      onClick={handleClick}
    >
      {
        !isAchieve
          ?  (
            <img className="target__img" src={message} alt=""/>
          )
          :  (
            <>
              <small>{isAchieve ? '' : 'До цели'}</small>
              {
                isAchieve
                  ? ''
                  : (
                    <>
                      <div>{distance}</div>
                      <small>метров</small>
                    </>
                  )
              }
            </>
          )
      }
    </div>
  )
}

Target.propTypes = {
  target: pt.string,
  lat: pt.number,
  lon: pt.number,
}
Target.defaultProps = {
  target: '0, 0',
  lat: 0,
  lon: 0,
}

export default Target
