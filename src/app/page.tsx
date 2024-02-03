import MaxWidthWrapper from "@/components/helpComponents/MaxWidhtWrapper";
import FeaturedBlog from "@/components/homeComponents/featuredBlog";
import PopularCatCard from "@/components/popularCatCard/PopularCatCard";

export default function Home() {
  return (
    <MaxWidthWrapper className="">
       <FeaturedBlog/>
       <PopularCatCard/>
    </MaxWidthWrapper>
  );
}
