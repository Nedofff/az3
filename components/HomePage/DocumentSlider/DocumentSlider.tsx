"use client";
import Carousel from "react-multi-carousel";
import OneDocument from "./OneDocument";
import "react-multi-carousel/lib/styles.css";

type TDocument = {
  id: string;
  title: string;
  src: string;
};

export default function DocumentSlider() {
  const indicatorStyles: any = {
    background: "#A9ADB9",
    width: 12,
    height: 12,
    display: "inline-block",
    margin: "0 14px",
    borderRadius: "9999px",
    position: "relative",
    bottom: "-50px",
  };

  const documents: TDocument[] = [
    {
      id: "1",
      title: "Памятка клиенту",
      src: "/downloadedFiles/sliderDocs/MemoToClient.pdf",
    },
    {
      id: "2",
      title: "Карточка компании Аземша и партнеры",
      src: "/downloadedFiles/sliderDocs/companyCard.pdf",
    },
    {
      id: "3",
      title: "Перечень случаев обязательного аудита",
      src: "/downloadedFiles/sliderDocs/List_of_cases_of_mandatory_audit.pdf",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="py-14">
<h2 className="heading px-5 break-words">Для вашего удобства</h2>
      <Carousel className="w-screenmt-10" responsive={responsive}
      swipeable={true}
      draggable={true}
      infinite={true}
      transitionDuration={500}
      >
        {documents.map((item) => (
          <OneDocument key={item.id} {...item} />
        ))}
      </Carousel>
    </div>
  );
}
