import Select from 'react-select';

const OptionSelector = ({selected, setSelected, options, placeholder}) => {
  
  function handleChange(selectedOption) {
    setSelected(selectedOption);
    console.log(selectedOption);
  };
  
  return (
    <div className="mt-3 m-auto">
      <Select placeholder={placeholder} options={options} onChange={handleChange} autoFocus={true} />
    </div>
  );
}

export default OptionSelector;