import { useRouter } from 'next/router';
import Layout from '@/components/layout';

export default function IndexPage() {
  const router = useRouter();
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <main>
        <div className="flex min-h-screen flex-col items-center justify-between p-5 text-center">
          <div>
            <h1 className="text-2xl">Hello Next.js 👋</h1>
            <p className="mt-2 text-gray-800">
              A starter for Next.js, Tailwind CSS, and TypeScript
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="max-w-sm cursor-pointer overflow-hidden rounded shadow-lg"
              onClick={() => router.push(`/${1}`)}
            >
              <img
                className="w-full"
                src="https://img.freepik.com/premium-photo/cow-eid-aladha-sale-socail-post-cattle-trader-background-photo-ai-generated_524159-718.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
                <p className="text-base text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pb-2 pt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #photography
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #travel
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #winter
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
