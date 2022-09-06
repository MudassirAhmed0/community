import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import css from './Tabbar.module.scss';
import { IconCourses } from 'app/ui-kit/Icons/icon-courses';
import { IconAdvice } from 'app/ui-kit/Icons/icon-advice';
import { IconBooks } from 'app/ui-kit/Icons/icon-books';
import { useScreenSize } from 'app/shared/hooks/use-screen-size';

const tabs = [
  {
    id: 0,
    title: 'Courses',
    icon: <IconCourses />,
    url: '/courses',
  },
  {
    id: 1,
    title: 'Jobs',
    icon: <IconAdvice />,
    url: '/jobs',
  },
  {
    id: 2,
    title: 'Community',
    icon: <IconBooks />,
    url: '/community',
  },
];

const emptyTab: { id: number; title: string } = { id: null, title: '' };

const Tabbar = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(emptyTab);
  const { isDesktop } = useScreenSize();

  useEffect(() => {
    const handleHistoryChange = () => {
      const nextTab = tabs.find(item => history.location.pathname.indexOf(item.url) > -1) || emptyTab;
      setActiveTab(nextTab);
    };
    handleHistoryChange();
    return history.listen(handleHistoryChange);
  }, [history]);

  return (
    <div className={css.tabbar}>
      {tabs &&
        tabs.map(tab => (
          <li className={tab.id === activeTab.id ? css.activeTab : ''} key={tab.id}>
            <Link to={tab.url}>
              {!isDesktop && tab.icon}
              <span>{tab.title}</span>
            </Link>
          </li>
        ))}
    </div>
  );
};

export default Tabbar;
