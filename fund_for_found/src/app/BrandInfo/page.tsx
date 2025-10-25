import Link from "next/link";
import React from "react";

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
                <div className="bg-[#F5F5F5] rounded-full w-[40px] h-[40px] align-middle justify-center">
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
                    Basic info
                </h1>
                <h2>
                    Tell about your brand/organization
                </h2>
                <p>
                    provide an overview of the brand or organization you want to register on 3F.
                </p>
                <section>
                    <section>
                        Brand/organization name
                        <input type="text" />
                    </section>
                    <section>
                        country
                        <input type="text" />
                    </section>
                </section>
                <p>
                    Select the primary category that best describes your brand or organization. Then select the subcategory that further defines your brand or organization.
                </p>
                <section>
                    <section>
                        Category
                        <input type="text" />
                    </section>
                    <section>
                        Subcategory
                        <input type="text" />
                    </section>
                </section>
                <section>
                    Brand tags
                    <select name="" id="">
                        <option value="web design">
                            web design
                        </option>
                        <option value="software">
                            software
                        </option>
                        <option value="UI design">
                            UI design
                        </option>
                    </select>
                </section>
                <div>
                    <input type="checkbox" width={15} height={15} id="check"/>
                    <label htmlFor="#check">
                        I agree to the terms of service of 3F.
                    </label>
                </div>
                <Link href="/DetailedInfo">
                    <button className="bg-[#644FC1] rounded-full w-[259px] h-[39px]">
                        continue
                    </button>
                </Link>
            </div>
        </div>
        );}
        
        export default page;
