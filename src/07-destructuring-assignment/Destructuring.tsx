import React, {useState} from 'react';

type StreetType = {
    street: StringType
}
type StringType = {
    title: string
    name?: string
}
export type ManType = {
    name: string
    age: number
    lessons: StringType[]
    address: StreetType
}

type PropsType = {
    title: string
    man: ManType
    food: string[]
    car: {model: string}
}

function  useMyState(m: string) {
    return [m, function(){}]
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    /*const {title, man, ...rest} = props;*/

    /*const {title, man} = props;    // man.name   */
    /*const {title, man: {name}} = props;*/

    const [message, setMessage] = useMyState('hello')

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    );
};