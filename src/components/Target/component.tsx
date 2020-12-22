import React, { useContext, useEffect } from 'react'
import pt from 'prop-types'
import './styles.scss'
import useDistanceToTarget from '../../hooks/useDistanceToTarget'
import { LIMIT, CLOSELY } from '../../constants/config'
import message from '../../assets/svg/email.svg'
import AppContext from '../../contexts/AppContext/AppContext'
import Popup from '../Popup'
import elements from '../../containers/ModalWindow/elements'
import { Context } from 'vm'
import { IAppState } from '../../types/types'

interface ITargetProps {
  coords: string
  descr: string
  lat: any
  lon: any
  img: string,
  id: string,
}

const Target = ({ coords, lat, lon, descr, img, id }: ITargetProps) => {

  const { handleModalShow, handleSetTargetDescr, handleTargetAchievment } = useContext(AppContext) as IAppState

  const distance = useDistanceToTarget(coords, lat, lon )

  const isAchieve = distance < LIMIT
  const isClosely = distance < CLOSELY && distance > LIMIT

  const handleClick = () => {
    if(!isAchieve) return null

    handleSetTargetDescr({descr, img})
    handleModalShow(elements.types.TARGET_POPUP)
    handleTargetAchievment(id)

  }

  // useEffect(() => {

  // }, [isAchieve])

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
              <small>{isAchieve ? '' : ''}</small>
              {
                isAchieve
                  ? ''
                  : (
                    <>
                      <div>{distance}</div>
                      {/* <small>метров</small> */}
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
