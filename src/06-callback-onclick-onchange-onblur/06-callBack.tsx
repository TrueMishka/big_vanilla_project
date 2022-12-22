import React, {ChangeEvent, MouseEvent, FocusEvent} from "react";


/*const callBack = () => {
    alert('hi');
}
window.setTimeout(callBack ,10000);*/

export const  User = () => {

    const buttonHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name);
    }
    const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value)
    }
    const focusLostHandler = (e: FocusEvent<HTMLTextAreaElement>) => {
        console.log(e.relatedTarget)
    }
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    return (
      <div>
          <div><textarea onBlur={focusLostHandler} onChange={onChangeTextArea}>Mishka</textarea></div>
          <input type={'number'} onChange={onChangeInput}/>
          <button name={'delete'} onClick={buttonHandler}>x</button>
          <button name={'save'} onClick={buttonHandler}>x</button>
      </div>
    );
}