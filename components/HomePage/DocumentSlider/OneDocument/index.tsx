import { IoDocumentTextSharp } from "react-icons/io5";

export default function OneDocument({
  title,
  src,
}: {
  title: string;
  src: string;
}) {
  return (
    <a download href={src} className="block cursor-pointer bg-white rounded-lg p-5 pt-8 m-8 relative z-10 shadow-lg shadow-black">
      <div className="flex flex-col items-center my-3 space-y-2">
        <p className="text-4xl">
        <IoDocumentTextSharp />
        </p>
      <p className="">{title}</p>
      </div>
    </a>
  );
}
