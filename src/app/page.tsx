import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center bg-gray-300 ">
        <div className="mx-4 order-last">
          <Image
            src="/beach.jpg"
            alt="Beach"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div className="mx-4 self-center text-center">
          <h1 className="text-6xl font-bold text-blue-700 ">
            This is beautiful beach
          </h1>
          <h2 className="text-3xl font-semibold text-blue-300">
            The beach have sunshine and white sand
          </h2>
          <button className="my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900">
            Book
          </button>
        </div>
      </div>
    </>
  );
}
