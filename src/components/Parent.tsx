import { Child } from "./Child";

export const Parent = () => {

    const getName = (data: any) => {
        console.log('Data Coming from Child Component');
        return data;
    }

    return (
        <div>
            <Child onSubmit={getName} />
        </div>       
    )
}