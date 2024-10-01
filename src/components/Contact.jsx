import React from 'react'
import Line from './Line'

function ContactLine({ text }) {
    return (
        <p className="font-josefin font-body_text text-l">{text}</p>
    )
}

function Contact() {
    return (
        <div className="flex justify-center w-full">
            <div className="w-full">
                <div className="flex justify-end">
                    <Line length="96%" color="#0F0ADE"></Line>
                </div>
                <h1 className="pl-[5%] text-4xl font-cram text-headers">
                    Contact
                </h1>
                <div className="flex justify-between">
                    <div className="pl-[6%]">
                        <ContactLine text="email:" />
                        <ContactLine text="brevinhpham@gmail.com" />
                        <ContactLine text="phone:" />
                        <ContactLine text="(408)856-4969" />
                    </div>
                    <div className="pr-[20%] -mt-4">
                        <div className="flex items-center gap-5">
                            <img src="/images/Linkedin.svg" alt="linkedin" />
                            <a href="linkedin.com" className="underline font-josefin text-big_text">Connect with me on Linkedin</a>
                        </div>
                        <div className="flex items-center gap-5 pt-6">
                            <img src="/images/Github.svg" alt="github" />
                            <a href="github.com" className="underline font-josefin text-big_text">Check out my Github</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Contact
