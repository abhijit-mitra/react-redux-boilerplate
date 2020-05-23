import React, {useState, memo, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import './style.css';


const Item = ({data, config, onSelect, selectedData})=>{
  const handleClick = ()=>{
    onSelect(data);
  };
  const displayTick = selectedData && selectedData[config.setValueBy]===data[config.setValueBy];
  return (
    <div className="item border font-18 w-100 bg-white position-realtive p-2 cursor-pointer" onClick={handleClick}>
      <span className={`mr-3 ${displayTick?'':'hide'}`}>
        <i className="fas fa-check"></i>
      </span>
      {data[config.displayValueBy]}
    </div>
  );
};

Item.defaultProps={
  onSelect: ()=>{},
};

Item.propTypes={
  data: PropTypes.object.isRequired,
  config: PropTypes.exact({
    displayValueBy: PropTypes.string,
    setValueBy: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func,
  selectedData: PropTypes.object,
};

const Dropdown = memo(({title, options, config, onSelect}) => {
  const dropdownRef = useRef();
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  const handleClick = ()=>{
    setShow((state)=>!state);
  };

  const handleSelect=(data)=>{
    setShow(false);
    setSelectedData(data);
    onSelect(data);
  };
  return (
    <div className="w-100 dropdown" ref={dropdownRef}>
      <div className='form-control cursor-pointer' onClick={handleClick}>
        <span className='mr-3'>{title}</span>
        <span className='position-relative float-right'><i className={`fas fa-chevron-${show?'up':'down'}`}></i></span>
      </div>
      <div className="position-relative">
        {
          show &&
        <div className="items position-absolute w-100 zi-1">
          {options.map((elm, index)=>(<Item data={elm} config={config} key={index} onSelect={handleSelect} selectedData={selectedData}/>))}
        </div>
        }
      </div>
    </div>
  );
});

Dropdown.propTypes={
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  config: PropTypes.exact({
    displayValueBy: PropTypes.string,
    setValueBy: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func,
};

export default Dropdown;
