import PropTypes from 'prop-types';

const Tabs = ({tabs, activeTab, onNavigate}) => {
  return (
    <div className="tabs">
      {tabs.map((tab, tabIndex) => {
        const tabClassName = [
          'tab',
          activeTab === tabIndex ? 'active' : ''
        ].join(' ');

        return (
          <button key={tab} onClick={() => onNavigate(tabIndex)} className={tabClassName}>
            {tab}
          </button>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  onNavigate: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired
};

export default Tabs;
