import MainLayout from "../layout/MainLayout";
import BlogHero from "../sections/blog/BlogHero";
import BlogGrid from "../sections/blog/BlogGrid";
import Newsletter from "../sections/blog/Newsletter";
export default function Blog() {
  return (
    <MainLayout>
      <BlogHero />
      <BlogGrid />
      <Newsletter />
    </MainLayout>
  );
}
