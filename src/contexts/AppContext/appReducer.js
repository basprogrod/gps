import { HIDE_MODAL, SHOW_MODAL } from "../../types/types"


const handlers = {
  [SHOW_MODAL]: (state, {payload}) => ({
    ...state,
    isShowModal: true,
    element: payload,
  }),
  [HIDE_MODAL]: state => ({
    ...state,
    isShowModal: false,
    element: '',
  }),
  DEFAULT: state => state
}

export default (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}