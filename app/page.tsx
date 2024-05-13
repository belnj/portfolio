export default function Home() {
  return (
    <main >
      <div className="font-thin text-white text-center flex flex-col h-screen justify-between">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className='text-8xl mt-[-1rem]'>BELÉN JIMÉNEZ</h1>
          <h3 className='text-3xl mt-4'>SOFTWARE ENGINEER</h3>
          <div className="flex mt-5">
            <a
              href="https://github.com/belnj"
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" fill="#fff"/></svg>
            </a> 
            <a href="mailto:belen.jimenez.work@gmail.com">
              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" fill="#fff"/></svg>
            </a> 
          </div>
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
            href="https://belnj.github.io/nextjs-minimalist-portfolio//BJcv.pdf" 
            className="ml-7 pl-7"
            download 
            target="_blank"
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
