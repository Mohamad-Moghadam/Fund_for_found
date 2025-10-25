import React from 'react'
import Link from 'next/link';

function page() {
  return (
    <div className="flex justify-around">
            <Link href="/">
			<svg
				width="39"
				height="33"
				viewBox="0 0 39 33"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M17.5607 0.43875C18.1464 1.02475 18.1464 1.97476 17.5607 2.56076L5.12127 14.9998H37.5C38.328 14.9998 39 15.6718 39 16.4998C39 17.3278 38.328 17.9998 37.5 17.9998H5.12127L17.5607 30.4387C18.1464 31.0247 18.1464 31.9748 17.5607 32.5608C16.9749 33.1458 16.0251 33.1458 15.4393 32.5608L0.439275 17.5608C-0.146425 16.9748 -0.146425 16.0247 0.439275 15.4388L15.4393 0.43875C16.0251 -0.14625 16.9749 -0.14625 17.5607 0.43875Z"
					fill="#644FC1"
				/>
			</svg>
            </Link>
            <div className="flex gap-[8.5px]">
                <div className="bg-[#644FC1] rounded-full w-[40px] h-[40px] align-middle justify-center">
                    1
                </div>
                <div className="bg-[#644FC1] rounded-full w-[40px] h-[40px] align-middle justify-center">
                    2
                </div>
                <div className="bg-[#F5F5F5] rounded-full w-[40px] h-[40px] align-middle justify-center">
                    3
                </div>
                <div className="bg-[#F5F5F5] rounded-full w-[40px] h-[40px] align-middle justify-center">
                    4
                </div>
            </div>
            <div>
                <h1>
                    Detailed info
                </h1>
                <h2>
                    what is the primary mission or objective of your brand/organization?
                </h2>
                <p>
                    be more specific about it, as it will be published as your deck on the 3F(150-300 characters).
                    <Link href="/ReadMore">
                    read more
                    </Link>
                </p>
                <section>
                    <input type="text" placeholder='write sth'/>
                </section>
                <h2>
                  Help your contributers find you faster (at least 3 options)
                </h2>
                <p>
                  connectv your socials so the contributers get to know you better and find you faster.
                </p>
                <section>
                  <select name="" id="">
                    <section>
                      <option value="Instagram">instagram</option>
                      <option value="Discord">Discord</option>
                      <option value="Discord">website</option>
                      <option value="Discord">twitter</option>
                      <option value="Discord">whatsapp</option>
                      <option value="Discord">telegram</option>
                      <option value="Discord">facebook</option>
                      <option value="Discord">Linkedin</option>
                    </section>
                  </select>
                </section>
                <section>
                  <select name="" id="">
                    <section>
                      <option value="Instagram">instagram</option>
                      <option value="Discord">Discord</option>
                      <option value="Discord">website</option>
                      <option value="Discord">twitter</option>
                      <option value="Discord">whatsapp</option>
                      <option value="Discord">telegram</option>
                      <option value="Discord">facebook</option>
                      <option value="Discord">Linkedin</option>
                    </section>
                  </select>
                </section>
                <section>
                  <select name="" id="">
                    <section>
                      <option value="Instagram">instagram</option>
                      <option value="Discord">Discord</option>
                      <option value="Discord">website</option>
                      <option value="Discord">twitter</option>
                      <option value="Discord">whatsapp</option>
                      <option value="Discord">telegram</option>
                      <option value="Discord">facebook</option>
                      <option value="Discord">Linkedin</option>
                    </section>
                  </select>
                </section>
      
                <Link href="/DetailedInfo">
                    <button className="bg-[#644FC1] rounded-full w-[259px] h-[39px]">
                        continue
                    </button>
                </Link>
            </div>
        </div>
        );}
        
        export default page;