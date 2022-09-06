import SecondaryHeader from 'app/components/common/SecondaryHeader';
import css from './CommunityList.module.scss';
import Button from 'app/ui-kit/Button';
import { IconFilter } from 'app/ui-kit/Icons/icon-filter';
import { EColor } from 'app/ui-kit/color.enum';
import { IconArrowDown } from 'app/ui-kit/Icons/icon-arrow-down';

import React from 'react'

type Props = {}

const Header = (props: Props) => {
    const handleDropDown =(e:any)=>{ 
        e.target.classList.toggle(css.active)
     }
  return (
    <SecondaryHeader title={'Community'} titleCss={css.title} childrenPosition='in-title'>
       
            <div className={css.secondaryHeaderButtons}>
             <Button  kind={'secondary'} >
                <IconFilter fill={EColor.Blue40} />
                <span>Any Tag</span>
             </Button>
           
          <Button
            kind='secondary'
            className={css.dropdownBtn}
            onClick={handleDropDown}
             
          >
            <span>Trending</span>
            <IconArrowDown fill={EColor.Blue40} />
            <ul className={css.dropdown}>
                <li>
                    Classes
                </li>
                <li>
                    Teacher
                </li>
                <li>
                    Students
                </li>
            </ul>
          </Button> 
        
         

            </div>
            
      </SecondaryHeader>
  )
}

export default Header