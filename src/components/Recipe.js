import React from 'react';

const Recipe = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>

                <img src={props.image}/>

            <ol>
                {props.ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories:{props.calories}</p>
                   </div>

    );
}

export default Recipe;