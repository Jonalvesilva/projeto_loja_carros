import MultipleBanner from "@/components/MultipleBanner";
import { bannersUrl } from "@/constants/constants";
import RentInfo from "@/sections/home/RentInfo";

export default function Home() {
  return (
    <>
      <MultipleBanner url={bannersUrl} maxHeight={700} />
      <RentInfo />
    </>
  );
}
