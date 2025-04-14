import Depoimentos from "@/sections/home/Depoimentos";
import MultipleBanner from "@/components/MultipleBanner";
import { bannersUrl } from "@/constants/constants";
import MobilidadeInfo from "@/sections/home/MobilidadeInfo";
import RentInfo from "@/sections/home/RentInfo";
import RentInfo2 from "@/sections/home/RentInfo2";
import Footer from "@/sections/home/Footer";

export default function Home() {
  return (
    <>
      <MultipleBanner url={bannersUrl} maxHeight={750} />
      <RentInfo />
      <MobilidadeInfo />
      <RentInfo2 />
      <Depoimentos />
      <Footer />
    </>
  );
}
