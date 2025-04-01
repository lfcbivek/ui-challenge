import './App.css';
import { useState } from 'react';

import Button from './Button';
import InputCheckbox from './InputCheckbox';
const pages = [
  'Page 1',
  'Page 2',
  'Page 3',
  'Page 4'
]

function App() {
  const [checked, setChecked] = useState({
    allChecked: false,
    checkedPages: new Array(pages.length).fill(false)
  });

  const handleAllChecked = () => {
    const newCheckedState = !checked.allChecked;
    setChecked({
      allChecked: newCheckedState,
      checkedPages: new Array(pages.length).fill(newCheckedState)
    })
  }

  const handleIndividualPages = (idx) => {
    const newCheckedPages = checked.checkedPages.map((checkedState, index) => {
      return index === idx ? !checkedState : checkedState
    });
    const allChecked = newCheckedPages.every((checked) => checked);
    setChecked({
      allChecked,
      checkedPages: newCheckedPages,
    });
  }

  const onButtonClick = () => {
    let text = 'Selected Pages: '
    checked.checkedPages.map((isChecked, idx)=> isChecked ? text += ` ${idx+1}` : "");
    alert(text)
  }
  return (
    <div className="App">
      <InputCheckbox 
        pages={pages} 
        pageKey={'All Pages'}
        checked={checked}
        handleAllChecked={handleAllChecked}
        handleIndividualPages={handleIndividualPages}/>
      <hr />
      <Button onButtonClick={onButtonClick}/>
    </div>
  );
}

export default App;
