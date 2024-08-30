export default function chekIsCanGo(countAnswers: number, themeIndex: number) {
  let point: number;
  switch (themeIndex) {
    case 0:
      point = 4;
      break;
    case 1:
      point = 9;
      break;
    case 2:
      point = 15;
      break;
    case 3:
      point = 18;
      break;
    case 4:
      point = 24;
      break;

    default:
      point = 24;
      break;
  }
  return countAnswers >= point;
}
