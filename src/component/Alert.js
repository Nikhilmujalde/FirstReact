import React from 'react';

export default function Alert(props) {
    // to capitalize the first letter
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <>
            {/* props.alert && se ye hoga ki agar vo null hai to age ka check 
            hoga hi nhi to null wali dikkat ayegi nhi */}
            <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {capitalize(props.alert.type)}: {props.alert.msg}

            </div>
        </>
    )
}