import Image from "next/image";
export default function Banner({ img }) {
  return (
    <>
      <Image width={495} height={324} className="rectangle" src={img} />
    </>
  );
}
