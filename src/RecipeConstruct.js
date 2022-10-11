import React from "react";

function RecipeConstruct ({recipes, deleteRecipe}) {
  
    return recipes.map((rec, index) => {
        return (
            <tr key={index}>
                <td>{rec.name}</td>
                <td>{rec.cuisine}</td>
                <td><img src={rec.photo} alt={`Grahpicof ${rec.name}`} /></td>
                <td className="content_td"><p>{rec.ingredients}</p></td>
                <td className="content_td"><p>{rec.preparation}</p></td>
                <td><button name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
            </tr>
        );
    });
}

export default RecipeConstruct;