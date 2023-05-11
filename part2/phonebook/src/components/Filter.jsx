const Filter = ({ value, onchange }) => {
  return (
    <div>
      filter shown with <input value={value} name='filter' type='text' onChange={onchange} />
    </div>
  )
};

export default Filter;
