import React from 'react'
import FamilyTable from '../../components/Admin/Tables/FamilyTable'
import Button from '../../components/common/Button/Outlined'
import Link from 'next/link'
import Header from '../../components/common/Header'



const cartIcon = '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5H17.79C18.0694 5.00001 18.3457 5.05857 18.6011 5.17191C18.8565 5.28524 19.0854 5.45083 19.2729 5.65801C19.4603 5.86519 19.6023 6.10936 19.6897 6.37478C19.777 6.64019 19.8078 6.92097 19.78 7.199L19.18 13.199C19.1307 13.6925 18.8997 14.1501 18.532 14.4829C18.1642 14.8157 17.686 15 17.19 15H7.64C7.17747 15.0002 6.72918 14.84 6.37144 14.5469C6.01371 14.2537 5.76866 13.8456 5.678 13.392L4 5Z" stroke="#EB1754" stroke-width="2" stroke-linejoin="round"/><path d="M4 5L3.19 1.757C3.13583 1.54075 3.01095 1.34881 2.83521 1.21166C2.65946 1.0745 2.44293 1.00001 2.22 1H1M7 19H9M15 19H17" stroke="#EB1754" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'

const mediaRecord = '<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.21243 13.5002C4.05293 16.2602 7.16843 19.3067 11.9999 22.5002C16.8314 19.3067 19.9469 16.2602 21.7874 13.5002H17.9999C17.8501 13.5002 17.7038 13.4553 17.5798 13.3713C17.4557 13.2874 17.3596 13.1682 17.3039 13.0292L15.1184 7.56621L12.7214 15.9557C12.6786 16.1062 12.5897 16.2395 12.4674 16.3369C12.345 16.4344 12.1952 16.4911 12.039 16.4992C11.8827 16.5073 11.7279 16.4664 11.5961 16.3821C11.4643 16.2978 11.3621 16.1744 11.3039 16.0292L8.83343 9.85221L6.62393 13.1672C6.55533 13.2698 6.46249 13.3538 6.35365 13.4119C6.2448 13.47 6.1233 13.5003 5.99993 13.5002H2.21243ZM1.31843 12.0002C-3.63907 2.52021 6.61493 -2.99979 11.7359 1.71471C11.8259 1.79721 11.9144 1.88271 11.9999 1.97121C12.0846 1.88279 12.1726 1.79773 12.2639 1.71621C17.3849 -2.99979 27.6389 2.52021 22.6799 12.0002H18.5054L15.6944 4.97121C15.6362 4.82599 15.5341 4.7026 15.4023 4.61832C15.2705 4.53403 15.1156 4.49307 14.9594 4.50118C14.8032 4.50928 14.6534 4.56603 14.531 4.66349C14.4086 4.76096 14.3198 4.89425 14.2769 5.04471L11.8814 13.4342L9.69593 7.97121C9.64503 7.84448 9.56049 7.73406 9.45144 7.65184C9.34239 7.56964 9.21295 7.51876 9.07711 7.50471C8.94127 7.49067 8.80416 7.51398 8.6806 7.57213C8.55703 7.63029 8.45168 7.72108 8.37593 7.83471L5.59793 12.0002H1.31993H1.31843Z" fill="#585858"/></svg>'

const voucherIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.3159 0.697542L8.50789 2.50394C8.3619 2.64999 8.16399 2.73226 7.95749 2.73274H5.11269C3.79749 2.73274 2.73189 3.79834 2.73189 5.11354V7.95834C2.73148 8.16533 2.64923 8.36376 2.50309 8.51034L0.695087 10.3167C0.248772 10.7632 -0.00195313 11.3687 -0.00195312 11.9999C-0.00195313 12.6312 0.248772 13.2367 0.695087 13.6831L2.50309 15.4911C2.64914 15.6371 2.73141 15.835 2.73189 16.0415V18.8863C2.73189 20.2015 3.79749 21.2671 5.11269 21.2671H7.95749C8.16448 21.2675 8.36291 21.3498 8.50949 21.4959L10.3159 23.3039C10.7624 23.7503 11.3678 24.001 11.9991 24.001C12.6304 24.001 13.2358 23.7503 13.6823 23.3039L15.4903 21.4959C15.6363 21.3499 15.8342 21.2676 16.0407 21.2671H18.8855C20.2007 21.2671 21.2663 20.2015 21.2663 18.8863V16.0415C21.2667 15.8346 21.3489 15.6361 21.4951 15.4895L23.3031 13.6831C23.7494 13.2367 24.0001 12.6312 24.0001 11.9999C24.0001 11.3687 23.7494 10.7632 23.3031 10.3167L21.4951 8.50874C21.349 8.36275 21.2668 8.16485 21.2663 7.95834V5.11354C21.2663 3.79834 20.2007 2.73274 18.8855 2.73274H16.0407C15.8336 2.73268 15.6351 2.65038 15.4887 2.50394L13.6823 0.695942C13.2358 0.249626 12.6304 -0.00109863 11.9991 -0.00109863C11.3678 -0.00109863 10.7624 0.249626 10.3159 0.695942V0.697542ZM7.43269 15.4335L15.4327 7.43354L16.5655 8.56634L8.56549 16.5663L7.43269 15.4335ZM7.99909 7.99994V9.59994H9.59909V7.99994H7.99909ZM14.3991 15.9999H15.9991V14.3999H14.3991V15.9999Z" fill="#585858"/></svg>'

const packIcon = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.79922 10.2C4.95835 10.2 5.11096 10.1368 5.22348 10.0243C5.336 9.91174 5.39922 9.75913 5.39922 9.6C5.39922 9.44087 5.336 9.28826 5.22348 9.17574C5.11096 9.06321 4.95835 9 4.79922 9C4.64009 9 4.48748 9.06321 4.37495 9.17574C4.26243 9.28826 4.19922 9.44087 4.19922 9.6C4.19922 9.75913 4.26243 9.91174 4.37495 10.0243C4.48748 10.1368 4.64009 10.2 4.79922 10.2Z" fill="#585858"/><path d="M4.19961 0.599976H11.3996C12.3544 0.599976 13.2701 0.97926 13.9452 1.65439C14.6203 2.32952 14.9996 3.2452 14.9996 4.19998V11.4C15.0009 11.9746 14.8639 12.5411 14.6004 13.0517C14.3368 13.5624 13.9543 14.0021 13.4852 14.334C12.8767 14.7686 12.1473 15.0015 11.3996 15H4.19961C3.62498 15.0012 3.05848 14.8643 2.54786 14.6007C2.03723 14.3372 1.59746 13.9547 1.26561 13.4856C0.831463 12.8769 0.598589 12.1476 0.599613 11.4V4.19998C0.599613 3.2452 0.978897 2.32952 1.65403 1.65439C2.32916 0.97926 3.24483 0.599976 4.19961 0.599976ZM3.59961 4.19998C3.44048 4.19998 3.28787 4.26319 3.17535 4.37571C3.06283 4.48823 2.99961 4.64085 2.99961 4.79998C2.99961 4.95911 3.06283 5.11172 3.17535 5.22424C3.28787 5.33676 3.44048 5.39998 3.59961 5.39998H11.9996C12.1587 5.39998 12.3114 5.33676 12.4239 5.22424C12.5364 5.11172 12.5996 4.95911 12.5996 4.79998C12.5996 4.64085 12.5364 4.48823 12.4239 4.37571C12.3114 4.26319 12.1587 4.19998 11.9996 4.19998H3.59961ZM4.79961 11.4C5.277 11.4 5.73484 11.2103 6.0724 10.8728C6.40997 10.5352 6.59961 10.0774 6.59961 9.59998C6.59961 9.12259 6.40997 8.66475 6.0724 8.32718C5.73484 7.98962 5.277 7.79998 4.79961 7.79998C4.32222 7.79998 3.86439 7.98962 3.52682 8.32718C3.18925 8.66475 2.99961 9.12259 2.99961 9.59998C2.99961 10.0774 3.18925 10.5352 3.52682 10.8728C3.86439 11.2103 4.32222 11.4 4.79961 11.4ZM8.39961 8.99998C8.24048 8.99998 8.08787 9.06319 7.97535 9.17571C7.86283 9.28823 7.79961 9.44085 7.79961 9.59998C7.79961 9.75911 7.86283 9.91172 7.97535 10.0242C8.08787 10.1368 8.24048 10.2 8.39961 10.2H11.9996C12.1587 10.2 12.3114 10.1368 12.4239 10.0242C12.5364 9.91172 12.5996 9.75911 12.5996 9.59998C12.5996 9.44085 12.5364 9.28823 12.4239 9.17571C12.3114 9.06319 12.1587 8.99998 11.9996 8.99998H8.39961Z" fill="#585858"/><path d="M3.91602 16.1999C4.57602 16.9367 5.53362 17.3999 6.59922 17.3999H11.9992C13.4314 17.3999 14.8049 16.831 15.8176 15.8183C16.8303 14.8056 17.3992 13.4321 17.3992 11.9999V6.59995C17.3992 5.53435 16.936 4.57555 16.1992 3.91675V11.9999C16.1992 13.1139 15.7567 14.1821 14.9691 14.9698C14.1814 15.7574 13.1131 16.1999 11.9992 16.1999H3.91602Z" fill="#585858"/></svg>'


const cogIcon = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2.269C13 1.568 12.432 1 11.731 1H10.27C9.568 1 9 1.568 9 2.269C9 2.847 8.604 3.343 8.065 3.555C7.98 3.589 7.895 3.625 7.812 3.661C7.281 3.891 6.65 3.821 6.24 3.412C6.00204 3.17421 5.6794 3.04064 5.343 3.04064C5.0066 3.04064 4.68396 3.17421 4.446 3.412L3.412 4.446C3.17421 4.68396 3.04064 5.0066 3.04064 5.343C3.04064 5.6794 3.17421 6.00204 3.412 6.24C3.822 6.65 3.892 7.28 3.66 7.812C3.62355 7.89572 3.58854 7.98007 3.555 8.065C3.343 8.604 2.847 9 2.269 9C1.568 9 1 9.568 1 10.269V11.731C1 12.432 1.568 13 2.269 13C2.847 13 3.343 13.396 3.555 13.935C3.589 14.02 3.625 14.105 3.66 14.188C3.891 14.719 3.821 15.35 3.412 15.76C3.17421 15.998 3.04064 16.3206 3.04064 16.657C3.04064 16.9934 3.17421 17.316 3.412 17.554L4.446 18.588C4.68396 18.8258 5.0066 18.9594 5.343 18.9594C5.6794 18.9594 6.00204 18.8258 6.24 18.588C6.65 18.178 7.28 18.108 7.812 18.339C7.895 18.376 7.98 18.411 8.065 18.445C8.604 18.657 9 19.153 9 19.731C9 20.432 9.568 21 10.269 21H11.731C12.432 21 13 20.432 13 19.731C13 19.153 13.396 18.657 13.935 18.444C14.02 18.411 14.105 18.376 14.188 18.34C14.719 18.108 15.35 18.179 15.759 18.588C15.8768 18.7059 16.0168 18.7994 16.1708 18.8632C16.3248 18.927 16.4898 18.9599 16.6565 18.9599C16.8232 18.9599 16.9882 18.927 17.1422 18.8632C17.2962 18.7994 17.4362 18.7059 17.554 18.588L18.588 17.554C18.8258 17.316 18.9594 16.9934 18.9594 16.657C18.9594 16.3206 18.8258 15.998 18.588 15.76C18.178 15.35 18.108 14.72 18.339 14.188C18.376 14.105 18.411 14.02 18.445 13.935C18.657 13.396 19.153 13 19.731 13C20.432 13 21 12.432 21 11.731V10.27C21 9.569 20.432 9.001 19.731 9.001C19.153 9.001 18.657 8.605 18.444 8.066C18.4105 7.98106 18.3755 7.89671 18.339 7.813C18.109 7.282 18.179 6.651 18.588 6.241C18.8258 6.00304 18.9594 5.6804 18.9594 5.344C18.9594 5.0076 18.8258 4.68496 18.588 4.447L17.554 3.413C17.316 3.17521 16.9934 3.04164 16.657 3.04164C16.3206 3.04164 15.998 3.17521 15.76 3.413C15.35 3.823 14.72 3.893 14.188 3.662C14.1043 3.62521 14.0199 3.58987 13.935 3.556C13.396 3.343 13 2.847 13 2.27V2.269Z" stroke="#585858" stroke-width="2"/><path d="M15 11C15 12.0609 14.5786 13.0783 13.8284 13.8284C13.0783 14.5786 12.0609 15 11 15C9.93913 15 8.92172 14.5786 8.17157 13.8284C7.42143 13.0783 7 12.0609 7 11C7 9.93913 7.42143 8.92172 8.17157 8.17157C8.92172 7.42143 9.93913 7 11 7C12.0609 7 13.0783 7.42143 13.8284 8.17157C14.5786 8.92172 15 9.93913 15 11V11Z" stroke="#585858" stroke-width="2"/></svg>'

const supportIcon = '<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 12.625C15.5 12.0283 15.2629 11.456 14.841 11.034C14.419 10.6121 13.8467 10.375 13.25 10.375H2.75C2.15326 10.375 1.58097 10.6121 1.15901 11.034C0.737053 11.456 0.5 12.0283 0.5 12.625V13.375C0.5 16.3315 3.29 19.375 8 19.375C12.71 19.375 15.5 16.3315 15.5 13.375V12.625ZM12.125 4.75002C12.1251 3.86074 11.8377 2.99525 11.3058 2.28257C10.774 1.56988 10.026 1.04817 9.17346 0.795188C8.32092 0.542209 7.40946 0.571514 6.57493 0.878735C5.7404 1.18596 5.02751 1.75464 4.5425 2.50002H2C1.80109 2.50002 1.61032 2.57904 1.46967 2.71969C1.32902 2.86034 1.25 3.05111 1.25 3.25002V6.25002C1.25 6.27402 1.25 6.29652 1.253 6.31902H1.25V7.75002C1.25 8.34676 1.48705 8.91905 1.90901 9.34101C2.33097 9.76297 2.90326 10 3.5 10H4.0805C4.23509 9.99992 4.38715 9.96085 4.52264 9.88642C4.65813 9.81199 4.77266 9.7046 4.85566 9.57418C4.93865 9.44377 4.98742 9.29453 4.99747 9.14027C5.00752 8.98601 4.97851 8.83171 4.91313 8.69163C4.84775 8.55155 4.74811 8.43022 4.62342 8.33884C4.49873 8.24747 4.35301 8.18901 4.19975 8.16886C4.04648 8.14871 3.89061 8.16754 3.74654 8.22358C3.60247 8.27963 3.47486 8.37109 3.3755 8.48952C3.20065 8.46008 3.04188 8.36965 2.92737 8.23428C2.81286 8.0989 2.75002 7.92733 2.75 7.75002V7.00002H3.125C3.5705 7.00002 3.986 6.86952 4.3355 6.64602C4.76006 7.46747 5.44831 8.12246 6.28977 8.50583C7.13124 8.8892 8.07711 8.97873 8.97556 8.76004C9.87401 8.54136 10.6729 8.02714 11.2441 7.29993C11.8152 6.57272 12.1255 5.6747 12.125 4.75002ZM3.875 4.75002C3.875 4.94893 3.79598 5.1397 3.65533 5.28035C3.51468 5.421 3.32391 5.50002 3.125 5.50002H2.75V4.00002H3.875V4.75002Z" fill="#585858"/></svg>'


const chatIcon = '<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 11C7.5 11.3978 7.34196 11.7794 7.06066 12.0607C6.77936 12.342 6.39782 12.5 6 12.5C5.60218 12.5 5.22064 12.342 4.93934 12.0607C4.65804 11.7794 4.5 11.3978 4.5 11C4.5 10.6022 4.65804 10.2206 4.93934 9.93934C5.22064 9.65804 5.60218 9.5 6 9.5C6.39782 9.5 6.77936 9.65804 7.06066 9.93934C7.34196 10.2206 7.5 10.6022 7.5 11ZM13.5 11C13.5 11.3978 13.342 11.7794 13.0607 12.0607C12.7794 12.342 12.3978 12.5 12 12.5C11.6022 12.5 11.2206 12.342 10.9393 12.0607C10.658 11.7794 10.5 11.3978 10.5 11C10.5 10.6022 10.658 10.2206 10.9393 9.93934C11.2206 9.65804 11.6022 9.5 12 9.5C12.3978 9.5 12.7794 9.65804 13.0607 9.93934C13.342 10.2206 13.5 10.6022 13.5 11ZM18 12.5C18.3978 12.5 18.7794 12.342 19.0607 12.0607C19.342 11.7794 19.5 11.3978 19.5 11C19.5 10.6022 19.342 10.2206 19.0607 9.93934C18.7794 9.65804 18.3978 9.5 18 9.5C17.6022 9.5 17.2206 9.65804 16.9393 9.93934C16.658 10.2206 16.5 10.6022 16.5 11C16.5 11.3978 16.658 11.7794 16.9393 12.0607C17.2206 12.342 17.6022 12.5 18 12.5Z" fill="#585858"/><path d="M3.2475 22.7045L3.2775 22.6985C6.0225 22.154 7.6995 21.4355 8.4795 21.041C9.62788 21.3473 10.8115 21.5016 12 21.5C18.627 21.5 24 16.799 24 11C24 5.201 18.627 0.5 12 0.5C5.373 0.5 0 5.201 0 11C0 13.64 1.1145 16.055 2.955 17.9C2.82624 19.0851 2.56253 20.2517 2.169 21.377L2.1645 21.3935C2.05266 21.7158 1.9306 22.0345 1.7985 22.349C1.68 22.628 1.9095 22.94 2.208 22.892C2.55549 22.8351 2.90204 22.7726 3.2475 22.7045ZM4.4475 18.0425C4.46851 17.8229 4.44082 17.6014 4.36641 17.3937C4.292 17.186 4.1727 16.9973 4.017 16.841C2.427 15.245 1.5 13.202 1.5 11C1.5 6.212 6.006 2 12 2C17.994 2 22.5 6.212 22.5 11C22.5 15.7895 17.994 20 12 20C10.9427 20.0015 9.88967 19.8644 8.868 19.592C8.51097 19.4963 8.13118 19.5359 7.8015 19.703C7.221 19.997 5.9415 20.558 3.8505 21.0425C4.14221 20.0632 4.34208 19.0589 4.4475 18.0425Z" fill="#585858"/></svg>'

const LogoutIcon = '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.9 0.9 0 2 0H10V2H2V16H10V18H2C0.9 18 0 17.1 0 16V2ZM14.176 8L11.64 5.464L13.054 4.05L18.004 9L13.054 13.95L11.64 12.536L14.176 10H7.59V8H14.176Z" fill="#585858"/></svg>'

const navigation = [
    { name: 'Order', href: '/admin/order', icon: cartIcon, current: true },
    { name: 'Medical Records', href: '/admin/records', icon: mediaRecord, current: false },
    { name: 'Redeem Voucher', href: '/admin/voucher', icon: voucherIcon, current: false },
    { name: 'Active Packs and subscription', href: '/admin/active', icon: packIcon, current: false },
    { name: 'Account', href: '/admin/account', icon: cogIcon, current: false },
    { name: 'support', href: '/admin/support', icon: supportIcon, current: false },
    { name: 'Chat', href: '/admin/chat', icon: chatIcon, current: false },
    { name: 'Logout', href: '/admin/logout', icon: LogoutIcon, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const familyMember = () => {

    function createMarkup(data) {
        return { __html: data };
    }


    return (
        <div className='bg-secondary_light'>
        <Header/>
        <div className="flex h-full">
            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:flex-shrink-0 ">
                <div className="flex w-96 flex-col h-full">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="pr-3 flex min-h-0 flex-1 h-full flex-col pl-20 mt-10">

                        <div className="flex flex-shrink-0">
                            <a href="#" className="group block w-full flex-shrink-0">
                                <div className="flex items-center w-full">
                                    <div>
                                        <img
                                            className="inline-block h-20 w-20 rounded-full"
                                            src="/images/image/profile2.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-xl lg:text-2xl font-semibold text-primary group-hover:text-primary">Aisha</p>
                                        <p className="text-base font-raleway font-medium text-[#868686] group-hover:text-gray-700">View profile</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="flex flex-1 flex-col overflow-y-auto">
                            <nav className="mt-7 flex-1" aria-label="Sidebar">
                                <div className="space-y-3 px-2">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'text-primary border-r-2 border-r-primary'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md justify-between'
                                            )}
                                        >
                                            {console.log(item)}
                                            {item.name}

                                            <span dangerouslySetInnerHTML={createMarkup(item.icon)}></span>


                                        </a>
                                    ))}
                                </div>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden  min-h-[85vh]">
                <div className="bg-primaryLight  py-5 relative z-0 flex flex-1 overflow-hidden h-full lg:border-t-[1px] px-4 md:px-10 lg:border-[#fbc9d7]">

                    {/* Main Page */}
                    <div className='w-full'>
                        <h1 className='block md:hidden text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800 pb-4 lg:pb-8'> Family Member </h1>

                        <div className='flex md:justify-between justify-end items-center pt-5 md:pt-4 lg:pt-6'>
                            <h1 className='text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-gray-800  hidden md:block'>Family Member</h1>
                            <div className='flex gap-7 text-primary font-medium items-center font-raleway'>
                                <Link href='addFamily' passHref legacyBehavior>
                                    <a>
                                        <Button buttonText='Add Member' />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <FamilyTable />
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}

export default familyMember