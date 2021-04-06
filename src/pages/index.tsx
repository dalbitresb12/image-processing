import { Layout } from '../components/layout';
import { Card } from '../components/card';

const Home = (): React.ReactElement | null => {
  return (
    <Layout>
      <h1 className="text-5xl sm:text-7xl font-medium text-center text-gray-800">
        Image Processing
      </h1>

      <div className="grid gap-4 max-w-4xl mt-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8">
        <Card
          title="Mask Filters &rarr;"
          caption="Define a mask to apply to a set of pixels."
          href="/masks"
        />
      </div>
    </Layout>
  );
};

export default Home;
