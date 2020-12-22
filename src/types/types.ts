export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

export const net = {
  SET_TARGETS: 'SET_TARGETS',
  SET_IDS: 'SET_IDS',
}

export const ui = {
  SET_TARGET_DATA: 'SET_TARGET_DATA',
}

export type TIds = {
  [key: string]: string
}

export type TTaget = {
  coords: string
  descr: string
  img: string
}

export interface IInitialState {
  isShowModal: boolean
  elementType: string
  targetText: string
  targetImg: string
  targets: any[]
  ids: any/* {} */
}

export interface IAction {
  type: string
  [key: string]: any
}

export interface IAppState extends IInitialState {
  handleModalShow: (element: string) => void
  handleModalClose: () => void
  handleGetTargets: () => void
  handleCreateTarget: (value: any) => void
  handleSetTargetDescr: (data: any) => void
  handleTargetAchievment: (data: any) => void
}
