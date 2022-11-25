import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    //Обертка над событием для автокомплита
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {

    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('drop')
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dragWithParentHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    return (
        <div>
            <input ref={inputRef} placeholder='Ungovernable'/>
            <input value={value} onChange={changeHandler} placeholder='Managed'/>
            <button onClick={clickHandler}>fdfsdfd</button>
            <div
                onDrag={dragHandler}
                draggable
                style={{width: '200px', height: '200px', backgroundColor: 'red'}}
            ></div>
            <div
                onDrag={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithParentHandler}
                style={{width: '200px', height: '200px', backgroundColor: isDrag ? 'blue' : 'red', marginTop: '15px'}}
            ></div>
        </div>
    );
};

export default EventsExample;