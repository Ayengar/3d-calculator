import Select from 'react-select';

const OptionSelector = ({ setSelected, options, placeholder }) => {
  
  function handleChange(selectedOption) {
    setSelected(selectedOption);
    console.log(selectedOption);
  };
  
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#cfe2ff",
    })
  };

  return (
    <div className="mt-3 m-auto">
      <Select className="Select-Box" placeholder={placeholder} options={options} onChange={handleChange} styles={customStyles}/>
    </div>
  );
}

export default OptionSelector;