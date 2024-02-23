
import React, {Component, useState} from 'react';

const Hoc = (Student) => {
    const HocComponent = () => {
        const [num, setNum] = useState(1)
        const increase = () => {
          setNum(num + 1)
        }
        return (
            <Student num={num} increase={increase} />
        )
    }
    return HocComponent;
}

export default Hoc;