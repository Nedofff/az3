

export const setScrollYBar = (scrollY:number):void => {
    sessionStorage.setItem('scrollY', `${scrollY}`)
}
export const getScrollYBar = ():number => {
    return Number(sessionStorage.getItem('scrollY'))
}