function Recette(props) {
    return (
      <div className="p-5 m-5 carte w-max h-[32rem] shadow-lg">
        <img src={props.img} alt="image de la recette" className="w-64 h-44" />
        <h1 className="text-2xl font-bold">{props.recette}</h1>
        <h2 className="text-lg underline">Ingrédients :</h2>
        <div className="text-sm ml-3 h-max">
          <p className="w-12">{props.ingredients}</p>
        </div>
        <div>
          <h2 className="text-lg underline">Description :</h2>
          <p className="w-72">{props.description}</p>
        </div>
      </div>
    );
  }
  
  export default Recette;