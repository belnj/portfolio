export default function Home() {
  return (
    <main >
      <div className="font-thin text-white text-center flex flex-col h-screen justify-between">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className='text-8xl mt-[-3rem]'>BELÉN JIMÉNEZ</h1>
          <h3 className='text-3xl mt-4'>SOFTWARE ENGINEER</h3>
        </div>
        <div className="text-sm mb-4 flex justify-center">
          <a
            href="https://petite-magnolia-ded.notion.site/Bel-n-Jim-nez-Blog-6006f0b362ab4e6cb0028fc3971e18c4"
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className='text-xl mb-10 pb-10'>
              BLOG
            </p>
          </a>
          <a
            href="https://"
            className="ml-7 pl-7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className='text-xl mb-10 pb-10'>
              DOWNLOAD RESUME
            </p>
          </a>
        </div>
      </div>
      
    </main>
  );
}
