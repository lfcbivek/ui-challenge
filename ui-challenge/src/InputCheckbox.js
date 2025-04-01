import './InputCheckbox.css';

function InputCheckbox({pages, pageKey, checked, handleAllChecked, handleIndividualPages}) {
  return (
    <div className='input'>
      <div className='input-checkbox'>
        <label> {pageKey} </label>
        <input type="checkbox" id="checkbox" onChange={handleAllChecked} checked={checked.allChecked}></input>
      </div>
      <hr />
      {pages && pages.map((page, idx) => {
        return(
          <div className='input-checkbox' key={idx}>
            <label> {page} </label>
            <input type="checkbox" id="checkbox" checked={checked.checkedPages[idx]} onChange={() => handleIndividualPages(idx)}></input>
          </div>
        );
      })}
    </div>
  );
}

export default InputCheckbox;