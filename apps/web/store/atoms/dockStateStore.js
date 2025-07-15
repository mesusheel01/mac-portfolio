import {atom} from 'recoil'

export const dockSelectionAtom = atom({
    key: 'dock-selection',
    default: 'home'
})