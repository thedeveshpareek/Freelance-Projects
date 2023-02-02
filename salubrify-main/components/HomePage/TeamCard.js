import React from 'react'
import {AcademicCapIcon, ArrowRightIcon} from '@heroicons/react/24/outline'

const TeamCard = ({team}) => {
    return (
        <div>
            <div className='bg-white rounded-xl py-5 px-2 md:px-4 lg:px-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200 duration-200'>
                <div className='md:grid md:grid-cols-2 md:gap-2'>
                    <div className='md:border-r-[1px] md:border-gray-300 text-center'>
                        <img src={team.image} className='mx-auto' />
                        <h6 className='mt-3 text-base text-black font-bold'>{team.name}</h6>
                        <p className='text-gray-700 '>{team.expertise}</p>
                    </div>
                    <div className='text-xs text-center md:text-left py-2 md:py-3'>
                        <div className='service__chip1'>
                            <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.19085 0.804772L2.85667 1.26779L2.36937 0.969903L2.23797 1.52551L1.67376 1.43667L1.76503 2.00033L1.20973 2.13416L1.50984 2.61998L1.04809 2.956L1.5113 3.28999L1.21331 3.77712L1.76912 3.90848L1.68027 4.47256L2.24411 4.38129L2.37793 4.93638L2.86389 4.63638L3.20002 5.098L3.53418 4.63494L4.02148 4.93282L4.11222 4.54913L4.1529 4.37718L4.71717 4.46603L4.62586 3.90234L5.18116 3.76856L4.88103 3.28279L5.34284 2.94677L4.87963 2.61271L5.17761 2.12558L4.62179 1.99422L4.71056 1.43015L4.14678 1.5214L4.01292 0.966301L3.52698 1.26631L3.19081 0.804688L3.19085 0.804772ZM3.18551 1.89971C3.46454 1.89971 3.73214 2.01052 3.92944 2.20775C4.12674 2.40499 4.23759 2.67249 4.23759 2.95143C4.23757 3.23035 4.12673 3.49784 3.92943 3.69507C3.73213 3.89229 3.46455 4.0031 3.18553 4.0031C2.90652 4.00309 2.63893 3.89228 2.44164 3.69506C2.24435 3.49784 2.13351 3.23034 2.13349 2.95143C2.13349 2.6725 2.24434 2.40499 2.44163 2.20776C2.63893 2.01052 2.90653 1.89972 3.18555 1.89971H3.18551ZM4.44284 4.80884L4.27161 5.53267L3.63685 5.14463L3.43034 5.43074C3.67895 7.16891 3.81383 8.90189 4.58829 10.6639L4.939 9.26164C5.16167 9.55434 5.52206 9.81369 5.99105 9.96276C5.33267 8.31957 5.08489 6.59432 4.83184 4.87007L4.44284 4.80884ZM1.95614 4.8142L1.53749 4.882C1.28502 6.60224 1.03684 8.32334 0.380005 9.96276C0.848998 9.81369 1.20941 9.55434 1.4321 9.26164L1.78279 10.6639C2.56234 8.89036 2.69393 7.14617 2.94574 5.39656L2.76364 5.14656L2.13057 5.53729L1.95616 4.81424L1.95614 4.8142Z" fill="black" />
                            </svg>

                            <span className='pl-1 text-xs md:text-sm'>{team.experience}</span>
                        </div><br />

                        <div className='service__chip2 mt-2'>
                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.17213 3.13574L7.21692 1.43175C7.27633 1.38226 7.34862 1.35073 7.42532 1.34085C7.50201 1.33098 7.57993 1.34317 7.64994 1.37599C7.71996 1.40882 7.77916 1.46092 7.82063 1.52619C7.86209 1.59146 7.88409 1.6672 7.88405 1.74452V7.23887C7.88409 7.3162 7.86209 7.39194 7.82063 7.45721C7.77916 7.52248 7.71996 7.57458 7.64994 7.6074C7.57993 7.64023 7.50201 7.65241 7.42532 7.64254C7.34862 7.63267 7.27633 7.60114 7.21692 7.55165L5.17213 5.84766H1.55623C1.43636 5.84766 1.3214 5.80004 1.23663 5.71527C1.15187 5.63051 1.10425 5.51555 1.10425 5.39567V3.58772C1.10425 3.46785 1.15187 3.35289 1.23663 3.26812C1.3214 3.18336 1.43636 3.13574 1.55623 3.13574H5.17213Z" stroke="black" stroke-width="0.774834" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className='pl-1 text-xs md:text-sm'>{team.language}</span>
                        </div><br />

                        <div className='service__chip3 mt-2'>
                            <AcademicCapIcon className='h-3 w-3' />
                            <span className='pl-1 text-xs md:text-sm'>MBBs</span>
                        </div><br />
                        <p className='text-gray-700 mt-2 text-xs font-bold'>Voucer Code : {team.code}</p>
                        <p className='flex gap-2 text-sm text-primary font-bold mt-6 items-center justify-center md:justify-start'>
                            Book Now
                            <ArrowRightIcon className='h-3 w-3 md:h-5 md:w-5' />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard