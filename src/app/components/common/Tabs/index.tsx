import cn from 'classnames';
import { IArrayItem } from 'app/shared/helpers/enum-to-array';
import css from './Tabs.module.scss';

interface ITabsProps {
  tabs: IArrayItem[];
  className?: string;
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const Tabs = ({ tabs, className, activeTab, onTabClick }: ITabsProps) => {
  return (
    <div className={cn(css.tabs, className)}>
      {tabs.map((tab, i) => (
        <div key={i} className={cn(css.tab, activeTab === tab.value && css.tabActive)} onClick={() => onTabClick(tab.value)}>
          {tab.name}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
