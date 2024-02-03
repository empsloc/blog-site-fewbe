import MaxWidthWrapper from "@/components/helpComponents/MaxWidhtWrapper";
import FeaturedBlog from "@/components/homeComponents/featuredBlog";
import PopularCatCard from "@/components/popularCatCard/PopularCatCard";
import RecentPosts from "@/components/recentPosts/RecentPosts";

export default function Home() {
  return (
    <MaxWidthWrapper className="">
       <FeaturedBlog/>
       <PopularCatCard/>
       <RecentPosts/>
       
    </MaxWidthWrapper>
  );
}
