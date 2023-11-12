

export const setScrollYBar = (scrollY:number):void => {
    sessionStorage.setItem('scrollY', `${scrollY}`)
}
export const getScrollYBar = ():number => {
    return Number(sessionStorage.getItem('scrollY'))
}
export const setWasPreloader = (scrollY:boolean):void => {
    sessionStorage.setItem('wasPreloader', `${scrollY}`)
}
export const getWasPreloader = ():boolean => {
    return Boolean(sessionStorage.getItem('wasPreloader'))
}