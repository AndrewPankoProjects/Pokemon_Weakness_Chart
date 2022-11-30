import React from "react";

export default function TypeList ({items, onTypeClick}){
    
    const handleClick = ({ target }) => {
        const item = target.value;
        onTypeClick(item);
    };

    return (
        <ul Style="padding-left: 0px;">
            {
            items.map((item) =>
                <button 
                        value={item.name}
                        key={item.id} 
                        style={{backgroundImage: "url(" + item.image + ")"}}
                        onClick={handleClick}>
                </button>
            )}
        </ul>
    )
}