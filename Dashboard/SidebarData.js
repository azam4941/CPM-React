import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
//import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
    

    
  },
  {
    title: 'Student',
    path: '/stud',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
    

    
  },
  {
    title: 'Teacher',
    path: '/teach',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
    

    
  },
  
  {
    title: 'Complains',
    path: '/complains',
    icon: <FaIcons.FaEnvelopeOpenText />, 
    cName: 'nav-text'
    

   
  },  
  
  {
    title: 'News',
    path: '/newsevents',
    icon: <FaIcons.FaEnvelopeOpenText />, 
    cName: 'nav-text'
    

   
  },
  /* {
    title: 'Time-Table',
    path: '/timetable',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
    

    
  }, */
  {
    title: 'StudentView',
    path: '/studview',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
    

    
  },
  {
    title: 'TeacherView',
    path: '/teacview',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
    

    
  },
  {
    title: 'Log-Out',
    path: '/logout',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
    
  }
];