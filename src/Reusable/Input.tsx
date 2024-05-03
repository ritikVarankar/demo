
interface InputTextProps{
    inputStyle:any;
    inputTitle?:string;
    required?:boolean;
    disable?:boolean;
    customChangeFunction?:any;  
    holder?:string;
    labelStyle?:any;
    errorMessage?:string;  
    error?:boolean;
    maxLength?:number;
    minLength?:number;
    value?:any;
    inputType?:string; 
    scenario:string;
}
function InputText({inputTitle,inputStyle,inputType,value,
    customChangeFunction,disable,required,holder,labelStyle,errorMessage,error,maxLength,minLength,id,...props}:InputTextProps & any) {
  return(
    
        props.scenario === "create" || props.scenario === "edit" || props.scenario === "disable" ? (
            <>
                <label htmlFor={id} className={labelStyle}>{inputTitle}</label>
                <input id={id} className={inputStyle} type={inputType === 'currency' ? 'text' : inputType} 
                    value={value} onChange={customChangeFunction} 
                    disabled={disable} maxLength={maxLength} minLength={minLength}
                    required={required} placeholder={holder}
                    {...props}
                />
                {
                    error && (<label>{errorMessage}</label>)
                }
            </>
        ) : (<></>)
  );
}

export default InputText;
