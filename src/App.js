import './App.css';
import React, { useState } from 'react';
import { types } from './AllTypes';
import TypeList from './TypeList';

export default function App() {
  
  const [poolOfTypes, setTypes] = useState([]);

  const getSuperEffectiveTypes = (item) =>{

    switch (item){
      case "Fire":
        setTypes(() => {
          return [
                  {
                  id: 1, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Water.png','./PokemonTypesIcons/Ground.png','./PokemonTypesIcons/Rock.png'],
                              name: ['Water','Ground','Rock']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Water":
        setTypes(() => {
          return [
                  {
                  id: 2, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Grass.png','./PokemonTypesIcons/Electric.png'],
                              name: ['Grass','Electric']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Grass":
        setTypes(() => {
          return [
                  {
                  id: 3, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Fire.png','./PokemonTypesIcons/Flying.png','./PokemonTypesIcons/Poison.png','./PokemonTypesIcons/Ice.png','./PokemonTypesIcons/Bug.png',],
                              name: ['Fire','Flying','Poison','Ice','Bug']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Normal":
        setTypes(() => {
          return [
                  {
                  id: 4, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Fighting.png'],
                              name: ['Fighting']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Electric":
        setTypes(() => {
          return [
                  {
                  id: 5, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Ground.png'],
                              name: ['Ground']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Ice":
        setTypes(() => {
          return [
                  {
                  id: 6, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Fire.png', './PokemonTypesIcons/Steel.png', './PokemonTypesIcons/Rock.png', './PokemonTypesIcons/Fighting.png'],
                              name: ['Fire','Steel','Rock','Fighting']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Fighting":
        setTypes(() => {
          return [
                  {
                  id: 7, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Flying.png', './PokemonTypesIcons/Psychic.png', './PokemonTypesIcons/Fairy.png'],
                              name: ['Flying','Psychic','Fairy']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Poison":
        setTypes(() => {
          return [
                  {
                  id: 8, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Ground.png', './PokemonTypesIcons/Psychic.png'],
                              name: ['Ground','Psychic']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Ground":
        setTypes(() => {
          return [
                  {
                  id: 9, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Water.png', './PokemonTypesIcons/Grass.png', './PokemonTypesIcons/Ice.png'],
                              name: ['Water','Grass','Ice']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Flying":
        setTypes(() => {
          return [
                  {
                  id: 10, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Electric.png', './PokemonTypesIcons/Ice.png', './PokemonTypesIcons/Rock.png'],
                              name: ['Electric','Ice','Rock']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Psychic":
        setTypes(() => {
          return [
                  {
                  id: 11, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Bug.png', './PokemonTypesIcons/Ghost.png', './PokemonTypesIcons/Dark.png'],
                              name: ['Bug','Ghost','Dark']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Bug":
        setTypes(() => {
          return [
                  {
                  id: 12, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Fire.png', './PokemonTypesIcons/Flying.png', './PokemonTypesIcons/Rock.png'],
                              name: ['Fire','Flying','Rock']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Rock":
        setTypes(() => {
          return [
                  {
                  id: 13, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Water.png', './PokemonTypesIcons/Grass.png', './PokemonTypesIcons/Fighting.png', './PokemonTypesIcons/Ground.png', './PokemonTypesIcons/Steel.png'],
                              name: ['Water','Grass','Fighting','Ground','Steel']
                            }  
                          ]
                  }
          ];
        })
      break;
      case "Ghost":
        setTypes(() => {
          return [
                  {
                  id: 14, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Ghost.png', './PokemonTypesIcons/Dark.png'],
                              name: ['Ghost','Dark']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Dragon":
        setTypes(() => {
          return [
                  {
                  id: 15, 
                  types: [
                            {
                              image: ['./PokemonTypesIcons/Ice.png', './PokemonTypesIcons/Fairy.png', './PokemonTypesIcons/Dragon.png'],
                              name: ['Ice','Fairy', 'Dragon']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Dark":
        setTypes(() => {
          return [
            {
             id: 16, 
             types: [
                      {
                        image: ['./PokemonTypesIcons/Fighting.png', './PokemonTypesIcons/Bug.png', './PokemonTypesIcons/Fairy.png'],
                        name: ['Fighting','Bug','Fairy']
                      }  
                    ]
            }
          ];
        })
      break;
      case "Steel":
        setTypes(() => {
          return [
                  {
                   id: 17, 
                   types: [
                            {
                              image: ['./PokemonTypesIcons/Fire.png', './PokemonTypesIcons/Ground.png', './PokemonTypesIcons/Fighting.png'],
                              name: ['Fire','Ground','Fighting']
                            }  
                          ]
                  }
                ];
        })
      break;
      case "Fairy":
        setTypes(() => {
          return [
                  {
                   id: 18, 
                   types: [
                            {
                              image: ['./PokemonTypesIcons/Poison.png','./PokemonTypesIcons/Steel.png'],
                              name: ['Poison', 'Steel']
                            }
                          ]
                  }
                 ];
        })
      break;
      default:
        setTypes(() => {
          return ['Invalid'];
        })
      break;
    }
  }

  return (
    <section>
      <h1>Pokemon Weakness Chart For Tera Raid Battles</h1>
      <div className='Box'>
        <h1>Click on Tera Raid Boss' Typing</h1>
        <TypeList items={types} onTypeClick={getSuperEffectiveTypes}/>
        <h1>Supereffective Types</h1>
        <div>
          {poolOfTypes.map((item) => 
              <div key={item.types}>
                    {
                        item.types.map((icons) => <div>
                                                    {icons.image.map((button) => 
                                                                                <button 
                                                                                        key={button} 
                                                                                        style={{backgroundImage: "url(" + button + ")"}}>
                                                                                </button>
                                                                    )
                                                    }
                                                  </div>
                                      )
                    }
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
}

