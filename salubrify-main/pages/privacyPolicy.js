import React from 'react'
import Header from '../components/common/Header'
import ChatTeam from '../components/common/ChatTeam'
import Button from '../components/common/Button'
import Footer from '../components/common/Footer'

const privacyPolicy = () => {
    return (
        <>
        <div className='bg-white sm:bg-secondary main__bottomPadding'>
            <Header />
            <div className='main__padding'>
                <h1 className='text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800 my-4 md:py-4 lg:py-8'>Privacy Policies</h1>
                <div className='main__text mt-8 md:mt-10 lg:mt-12'>
                    <p>
                        At Salubrify, accessible from https://salubrify.in/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Salubrify and how we use it.
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                        This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Salubrify. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.
                    </p>

                    <h5 className='text-lg md:text-xl lg:text-xl font-bold mt-10 text-[#252525] '>Information we collect</h5>
                    <ul style={{ listStyleType: 'disc' }} className='pl-7 mt-1 lg:mt-3'>
                        <li>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</li>
                        <li>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</li>
                        <li>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</li>
                    </ul>


                    <h5 className='text-lg md:text-xl lg:text-xl font-bold mt-10 text-[#252525]'>How we use your information</h5>
                    <p className='mt-1 lg:mt-3'>
                        We use the information we collect in various ways, including to:
                    </p>
                    <ul style={{ listStyleType: 'disc' }} className='pl-7 mt-1'>
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                        <li>Send you emails</li>
                    </ul>


                    <h5 className='text-lg md:text-xl lg:text-xl font-bold mt-10 text-[#252525]'>Log Files</h5>
                    <p class="mt-1 lg:mt-3">Salubrify follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                    </p>


                    <h5 className='text-lg md:text-xl lg:text-xl font-bold mt-10 text-[#252525]'>Cookies and Web Beacons</h5>
                    <p class="mt-1 lg:mt-3">Like any other website, Salubrify uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                    </p>


                    <h5 className='text-lg md:text-xl lg:text-xl font-bold mt-10 text-[#252525]'>Google DoubleClick DART Cookie</h5>
                    <p class="mt-1 lg:mt-3">Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads
                    </p>

                    <h5 className='text-lg md:text-xl lg:text-xl font-bold mt-10 text-[#252525]'>Advertising Partners Privacy Policies</h5>
                    <p class="mt-1 lg:mt-3">
                        You may consult this list to find the Privacy Policy for each of the advertising partners of Salubrify.
                    </p>
                    <p className='mt-1 lg:mt-3'>
                        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Salubrify, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                    <p className='text-gray-600 text-sm mt-4'>*Note that Salubrify has no access to or control over these cookies that are used by third-party advertisers.</p>



                    <h5 className='text-lg md:text-xl lg:text-xl font-bold mt-10 text-[#252525]'>
                        Third Party Privacy Policies
                    </h5>
                    <p class="mt-1 lg:mt-3">
                        Salubrify's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. <br />
                        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                    </p>


                    <h5 className='text-lg md:text-xl lg:text-xl font-bold mt-10 text-[#252525]'>
                        CCPA Privacy Rights (Do Not Sell My Personal Information)
                    </h5>
                    <ul style={{ listStyleType: 'disc' }} className='pl-7 mt-1'>
                        <li>Under the CCPA, among other rights, California consumers have the right to:</li>
                        <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                        <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                        <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
                        <li>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
                    </ul>


                    <h5 className='text-lg md:text-xl lg:text-xl font-bold mt-10 text-[#252525]'>
                        GDPR Data Protection Rights
                    </h5>
                    <p className='mt-1 lg:mt-3'>
                        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                    </p>
                    <ul style={{ listStyleType: 'disc' }} className='pl-7 mt-1'>
                        <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                        <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                        <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                        <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                        <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                        <li>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
                    </ul>

                    <h5 className='text-lg md:text-xl lg:text-xl font-bold mt-10 text-[#252525]'>
                        Children's Information
                    </h5>
                    <p class="mt-1 lg:mt-1">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.<br />
                        Salubrify does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                    </p>
                </div>
            </div>
            <div className='lg:px-5'>
                <ChatTeam />
            </div>
        </div >
        <Footer/>
        </>
    )
}

export default privacyPolicy