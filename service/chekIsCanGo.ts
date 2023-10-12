export default function chekIsCanGo(countAnswers:number, themeIndex:number) {
    let point: number;
    switch (themeIndex) {
        case 0:
            point = 5
            break;
        case 1:
            point = 10
            break;
        case 2:
            point = 16
            break;
        case 3:
            point = 19
            break;
        case 4:
            point = 25
            break;
    
        default:
            point = 25
            break;
    }
    return countAnswers >= point
}