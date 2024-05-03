
import { useEffect, useState } from 'react';
import './App.css';
import InputText from './Reusable/Input';
import CustomSelect from './Reusable/CustomSelect';

function App() {
  const [obj,setObj] = useState({
    textVar:'',
    textVarError:false,
    textVarErrorMessage:'Text is not Valid',
    numberVar:10,
    numberVarError:false,
    numberVarErrorMessage:'Number is not Valid',
    selectVar:'',
    selectVarError:false,
    selectVarErrorMessage:'select is not Valid',
    passwordVar:'',
    passwordVarError:false,
    passwordVarErrorMessage:'password is not Valid',
    currencyVar:'',
    currencyVarError:false,
    currencyVarErrorMessage:'currency is not Valid',
  });

  const handleOnchange=(text:string,input:string)=>{
    setObj((prev)=>({...prev,[input]:text}))
  }

  return (
    <div>
      <div>
        <h1>Text</h1>
        <InputText inputType='text' value={obj.textVar} holder="Text" 
          customChangeFunction={(e:any)=>{handleOnchange(e.target.value,'textVar')}}
          error={obj.textVarError} errorMessage={obj.textVarErrorMessage} disable={true} 
          labelStyle='labelStyle' inputStyle='inputStyle'
          maxLength={2} minLength={2} inputTitle='Text:'
          scenario="create" id="Text"
        />
      </div>
      <div>
        <h1>Number</h1>
        <InputText inputType='number' value={obj.numberVar} holder="Number" 
          customChangeFunction={(e:any)=>{handleOnchange(e.target.value,'numberVar')}}
          error={obj.numberVarError} errorMessage={obj.numberVarErrorMessage}
          inputTitle='Number:' scenario="create" id="Number"
        />
      </div>
      <div>
        <h1>Radio</h1>
        <InputText inputType='radio' holder="Radio" 
          inputTitle='Radio1:' scenario="create" id="Radio1" name="radioGrp"
        />
        <InputText inputType='radio' holder="Radio" 
          inputTitle='Radio2:' scenario="create" id="Radio2" name="radioGrp"
        />
      </div>
      <div>
        <h1>Checkbox</h1>
        <InputText inputType='checkbox' holder="Checkbox" 
          inputTitle='Checkbox:' scenario="create" id="Checkbox"
        />
      </div>
      <div>
        <h1>Password</h1>
        <InputText inputType='password'holder="Password" 
          value={obj.passwordVar} customChangeFunction={(e:any)=>{handleOnchange(e.target.value,'passwordVar')}}
          error={obj.passwordVarError} errorMessage={obj.passwordVarErrorMessage}
          inputTitle='Password:' scenario="create" id="Password"
        />
      </div>
      <div>
        <h1>Currency</h1>
        <InputText inputType='currency' holder="Currency"
        value={obj.currencyVar} customChangeFunction={(e:any)=>{handleOnchange(e.target.value,'currencyVar')}}
        error={obj.currencyVarError} errorMessage={obj.currencyVarErrorMessage}
          inputTitle='Currency:' scenario="create" id="Currency"
        />
      </div>
      <div>
        <h1>Select</h1>
        <CustomSelect inputType='select' value={obj.selectVar} holder="Select" 
          customChangeFunction={(e:any)=>{handleOnchange(e.target.value,'selectVar')}}
          error={obj.selectVarError} errorMessage={obj.selectVarErrorMessage}
          inputTitle='Select:' scenario="create" id="Select"
        >
          <option value="">Select</option>
          <option value="place1">place1</option>
          <option value="place2">place2</option>
        </CustomSelect>
      </div>

      
    </div>
  );
}

export default App;
