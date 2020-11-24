import React from 'react'
import pt from 'prop-types'

import './styles.scss'

interface IWidgetProps {
  value: number | string
  title: string
}

const Widget = ({
  value = "12",
  title,
}: IWidgetProps) => {

  return (
    <div className="widget">
      <span className="widget__title">{title}</span>
      <div className="widget__value">{value}</div>
    </div>
  )
}

Widget.propTypes = {}
Widget.defaultProps = {}

export default Widget
