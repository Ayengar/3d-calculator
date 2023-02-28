import Select from 'react-select';

const OptionSelector = ({selected, setSelected, options}) => {
  
  function handleChange(selectedOption) {
    setSelected(selectedOption);
    console.log(selectedOption);
  };
  
  return (
    
    <div className="mt-5 m-auto w-50">
      <Select options={options} onChange={handleChange} autoFocus={true} />

      <div className="mt-4">
        {selected && <>You've selected {selected.value}</>}
      </div>
    </div>
    
  );
}

export default OptionSelector;