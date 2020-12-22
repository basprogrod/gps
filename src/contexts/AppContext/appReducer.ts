import { HIDE_MODAL, SHOW_MODAL, net, ui, IInitialState, IAction, IAppState } from "../../types/types"

const { SET_TARGETS, SET_IDS } = net

interface IReduser {
  [type: string]: (state: IInitialState, payload?: any) => IInitialState
}

const handlers: IReduser = {
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
  [ui.SET_TARGET_DATA]: (state, { payload }) => {
    return {
      ...state,
      targetText: payload.descr,
      targetImg: payload.img,
    }
  },

  DEFAULT: state => state
}

export default (state: IInitialState, action: IAction) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}