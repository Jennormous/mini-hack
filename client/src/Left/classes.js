import React from "react";
import axios from "axios";
import Class from "../Right/class";
const CORS = "https://cors-anywhere.herokuapp.com/";

export default function classes({ classes }) {
  //   let clazzes = [];
  //   let classList = <h1>Loading....</h1>;
  //   axios
  //     .get(`${CORS}http://dnd5eapi.co/api/classes`)
  //     .then(res => {
  //       res.data.results.forEach((x, y) =>
  //         axios.get(res.data.results[y].url).then(data => {
  //           // console.log(data.data);
  //           clazzes.push(data.data);
  //           // classes.sort(function(a, b) {
  //           //   return b.index - a.index;
  //           // });
  //         })
  //       );
  //       return clazzes;
  //     })
  //     .then(clazzes => {
  //       console.log(clazzes);
  //       classList = clazzes.forEach((classes, y) => {
  //         return (
  //           <div>
  //             <h1 className="class-type">HELLO{classes[y].name}</h1>
  //           </div>
  //         );
  //       });
  //     });

  //   //   const classList = classes.forEach((classes, y) => {
  //   //     console.log(classes);
  //   //     return (
  //   //       <div>
  //   //         <h1 className="class-type">HELLO{classes.name}</h1>
  //   //       </div>
  //   //     );
  //   //   });
  const list =
    classes.length === 12 &&
    classes.map(function(classList) {
      const prof = classList.proficiencies.forEach(function(profic) {
        return <p>{profic.name}</p>;
      });

      return (
        <div>
          <h1>{classList.name}</h1>
          <ul>{prof}</ul>
        </div>
      );
    });

  return <div>{list}</div>;
}
