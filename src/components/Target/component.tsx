import React, { useContext } from 'react'
import pt from 'prop-types'
import './styles.scss'
import useDistanceToTarget from '../../hooks/useDistanceToTarget'
import { LIMIT, CLOSELY } from '../../constants/config'
import message from '../../assets/svg/email.svg'
import AppContext from '../../contexts/AppContext/AppContext'
import Popup from '../Popup'
import elements from '../../containers/ModalWindow/elements'

interface ITargetProps {
  coords: string
  descr: string
  lat: any
  lon: any
}

const Target = ({ coords, lat, lon, descr }: ITargetProps) => {

  const { handleModalShow } = useContext(AppContext) as any

  const distance = useDistanceToTarget(coords, lat, lon )

  const isAchieve = distance < LIMIT
  const isClosely = distance < CLOSELY && distance > LIMIT

  const handleClick = () => {
    if(!isAchieve) return null
    handleModalShow(elements.types.TARGET_POPUP, descr)

  }

  return (
    <div 
      className={`target ${isAchieve ? 'achieved' : ''} ${isClosely ? 'closely' : ''}`}
      onClick={handleClick}
    >
      {
        isAchieve
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

// Target.propTypes = {
//   target: pt.string,
//   lat: pt.number,
//   lon: pt.number,
// }
// Target.defaultProps = {
//   target: '0, 0',
//   lat: 0,
//   lon: 0,
// }

export default Target
