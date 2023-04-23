export function increment()
{
    console.log('Open Action Increment Function');
    return(
        {type: 'INCREMENT'}
    );
}

export function decrement()
{
    console.log('Open Action Decrement Function');
    return(
        {type: 'DECREMENT'}
    );
}

export function reset()
{
    console.log('Open Action Reset Function');

    return(
        {type: 'RESET'}
    );
}