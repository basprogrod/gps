import { HIDE_MODAL, SHOW_MODAL, net, ui } from "../../types/types"

const { SET_TARGETS, SET_IDS } = net

const handlers = {
  [SHOW_MODAL]: (state, { payload }) => ({
    ...state,
    isShowModal: true,
    elementType: payload,
  }),
  [HIDE_MODAL]: (state) => ({
    ...state,
    isShowModal: false,
    elementType: '',
  }),
  [SET_TARGETS]: (state, { payload }) => {
    return {
      ...state,
      targets: payload,
    }
  },
  [SET_IDS]: (state, { payload }) => {
    return {
      ...state,
      ids: payload,
    }
  },
  [ui.SET_TARGET_TEXT]: (state, { payload }) => {
    return {
      ...state,
      targetText: payload,
    }
  },

  DEFAULT: state => state
}

export default (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}