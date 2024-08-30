import { PATH_TO_IMAGES_WEB } from "@/consts/paths";

export function getUrlImg(addingUrl: string) {
  return addingUrl;
  return (PATH_TO_IMAGES_WEB + addingUrl).replaceAll(" ", "");
}
