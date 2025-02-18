import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/BOI Ins Broker 1.png'
import myImage from '../assets/IMG_20210903_102641.jpg'
import Backbutton from './Backbutton'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { CiExport } from 'react-icons/ci'
import Shield from '../assets/shield-tick.svg'

const MotorInsuranceSidebar = () => {
    const [activeItem, setActiveItem] = useState('motor insurance');
     const [isSidebarExpanded, setSidebarExpanded] = useState(false);

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const [isProfileOptionVisible, setProfileOptionVisible] = useState(false);

    const handleLiItemClick = () => {
      setProfileOptionVisible(!isProfileOptionVisible);
    };

    const handleIconClick = () => {
      setProfileOptionVisible(false);
    };

    const handleSidebarToggle = () => {
      setSidebarExpanded(!isSidebarExpanded);
    };

  return (
    <div className="hidden md:w-64 md:flex flex-col bg-gray-50 text-gray-600 px-4 py-3 items-center justify-between top-0 bottom-0 left-0 fixed">
      <div className='Frame11627 left-[20px] top-[20px] absolute flex-col justify-start items-start gap-[72px] inline-flex'>
        <img src={logo} alt="BOI Ins Broker" className='w-[95%] md:w-[80%] sticky mx-auto mt-3'/>

        <div className='flex flex-row items-center justify-start gap-3 md:gap-6 p-1 w-[80%] mx-auto relative'>
            <Backbutton />
            <h3 className='text-xs md:text-sm font-light'>My Policies</h3>
        </div>

        <ul className='grid grid-cols-1 justify-between gap-2 h-auto mx-auto w-[80%] sticky'>
            <Link to=''  className='flex'><li className={`capitalize text-xs md:text-sm flex flex-row items-center justify-start p-1.5 w-full gap-1 hover:cursor-pointer ${activeItem === 'motor insurance' ? 'bg-gray-200 text-green-900 font-semibold rounded-xl' : ''}`} onClick={() => handleItemClick('motor insurance')}><img src={Shield} alt="" /> Motor Insurance</li></Link>
            <Link to=''  className='flex'><li className={`capitalize text-xs md:text-sm flex flex-row items-center justify-start p-1.5 w-full gap-1 hover:cursor-pointer hover:text-green-700 ${activeItem === 'health insurance' ? 'bg-gray-200 text-green-900 font-semibold rounded-xl' : ''}`} onClick={() => handleItemClick('health insurance')}><img src={Shield} alt="" /> Health Insurance</li></Link>
            <Link to=''  className='flex'><li className={`capitalize text-xs md:text-sm flex flex-row items-center justify-start p-1.5 w-full gap-1 hover:cursor-pointer hover:text-green-700 ${activeItem === 'health insurance1' ? 'bg-gray-200 text-green-900 font-semibold rounded-xl' : ''}`} onClick={() => handleItemClick('health insurance1')}><img src={Shield} alt="" /> Health Insurance</li></Link>
            <Link to=''  className='flex'><li className={`capitalize text-xs md:text-sm flex flex-row items-center justify-start p-1.5 w-full gap-1 hover:cursor-pointer hover:text-green-700 ${activeItem === 'health insurance2' ? 'bg-gray-200 text-green-900 font-semibold rounded-xl' : ''}`} onClick={() => handleItemClick('health insurance2')}><img src={Shield} alt="" /> Health Insurance</li></Link>
        </ul>
      </div>
        

        <ul className='md:w-[95%] w-[80%] mx-auto left-[20px] top-[550px] absolute flex-col justify-start items-start gap-6 inline-flex'>
          <li className='Profile flex relative flex-row p-0.5 md:p-1.5 justify-between items-center hover:shadow-2xl hover:cursor-pointer hover:rounded-md' onClick={handleSidebarToggle} >
            <div className='flex flex-row p-0.5 md:p-1 justify-center gap-3 items-center' onClick={handleLiItemClick}>
              <img src={myImage} alt="" className='rounded-full w-5 md:w-7 object-cover'/>
              <p className='capitalize text-xs md:text-sm font-semibold '>fiyin oluwakemi</p>
              <RiArrowUpSLine size={20} />
            </div>
            {isProfileOptionVisible && (
            <div className='flex flex-col rounded-md absolute -top-[170px] left-1/2 right-1/2 transform translate-x-[-50%] shadow-xl bg-white w-full py-2 mx-auto h-auto' onClick={handleIconClick}>
              <ul className='grid grid-cols-1 items-center justify-center gap-3'>
                <li className='flex border-b border-b-neutral-300 items-center justify-center'>
                  <div className='flex flex-row p-0.5 md:p-2 justify-center gap-3 items-center'>
                    <img src={myImage} alt="" className='rounded-full w-4 md:w-6 object-cover'/>
                    <p className='capitalize text-xs font-semibold ml-1'>fiyin oluwakemi</p>
                    <RiArrowDownSLine size={20} className='cursor-pointer'/>
                  </div>
                </li>
                <li className='flex border-b border-b-neutral-300 text-sm items-center justify-start px-2'>
                  <ul className='grid grid-cols-1 text-left items-center justify-center gap-2 p-2'>
                    <li className='flex items-start text-left justify-start'>
                      Settings
                    </li>
                    <li className='flex flex-row items-start text-left justify-center'>
                      Support
                      <CiExport size={20}/>
                    </li>
                  </ul>
                </li>
                <li className='flex text-sm items-center justify-start px-2'>
                  Logout
                </li>
              </ul>
              
            </div>
            )}
          </li>
        </ul>
    </div>
  )
}

export default MotorInsuranceSidebar