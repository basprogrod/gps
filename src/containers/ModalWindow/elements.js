import CreateTargetFormPopup from "../../components/CreateTargetFormPopup/component"
import Popup from "../../components/Popup"

const elements = {
  types: {
    TARGET_POPUP: 'TARGET_POPUP',
    TARGET_CREATION: 'TARGET_CREATION',
  },

  TARGET_POPUP: {
    Component: Popup,
  },

  TARGET_CREATION: {
    Component: CreateTargetFormPopup
  }

}



export default elements