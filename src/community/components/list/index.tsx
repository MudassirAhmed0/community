import React, { useEffect, useState }  from 'react';
import Header from './Header';
import {  Section } from 'app/ui-kit';
import css from './CommunityList.module.scss';
import { useScreenSize } from 'app/shared/hooks/use-screen-size'; 
import CommunityContainer from './CommunityContainer';

type Props = {}

const CommunityList = (props: Props) => {
    const [selectedSort, setSort] = useState('program_asc');
    const { isDesktop } = useScreenSize();

   useEffect(()=>{
   const closeDropdown =(e:any)=>{
    if(!e.target.classList.contains(css.dropdownBtn)){
        let btn =  document.querySelector('.'+css.dropdownBtn)
     
        btn.classList.contains(css.active) && btn.classList.remove(css.active)
    }
   }

    window.addEventListener('click',closeDropdown)
    return ()=> window.removeEventListener('click',closeDropdown)
   },[])

  return (
    <Section kind='root'>
    <Section kind='content'>
      
      <Header />
       <CommunityContainer/>
    </Section>
  </Section>

 
  )
}

export default CommunityList


 
