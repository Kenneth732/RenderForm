const handleFetchData = async (query = '') => {
    try{
        const res = await fetch(`http://localhost:3000/userData?q=${query}`);
        const dataArrays = await res.json();
        return dataArrays.filter((user) => user.name.toLowerCase().includes(query.toLocaleLowerCase()))
            .map(({ name, imageUrl, description, comment ,id }) => `
                  <div class="cards">
                     <div class="images">
                        <img src="${imageUrl}" alt="${name}" class="img" />
                     </div>
    
                     <h2>${name}</h2>
                     <p>${description}</p>
                     <p>${comment}</p>
                     <form id="form-Comments">
                        <input id="comments" />
                     </form>
                  </div>
            `).join(' ');
    }catch(error){
        console.error(error)
        alert(`An Error Occurred ${error}`)
    }
}

const handleRenderUser = () => {
    handleFetchData()
      .then(userDataHTML => {
        const outputElement = document.querySelector('#output');
        outputElement.innerHTML = userDataHTML;
    });
};
handleRenderUser();

document.querySelector('#form').addEventListener('submit', async (e) => {
    e.preventDefault();
    handleFilter();
});

const handleFilter = () => {
    const inputValue = document.querySelector('#input').value 
    handleFetchData(inputValue)
      .then(filteredDataHTML => {
        const outputElement = document.querySelector('#output')
        outputElement.innerHTML = filteredDataHTML;
      });
};
// const handleFetchData = async (query = '') => {
//     try{
//         const res = await fetch(`http://localhost:3000/userData?q=${query}`);
//         const dataArrays = await res.json();
//         return dataArrays.filter((user) => user.name.toLowerCase().includes(query.toLocaleLowerCase()))
//             .map(({ name, imageUrl, description, comment ,id }) => `
//                   <div class="cards">
//                      <div class="images">
//                         <img src="${imageUrl}" alt="${name}" class="img" />
//                      </div>
    
//                      <h2>${name}</h2>
//                      <p>${description}</p>
//                      <p>${comment}</p>
//                      <form id="form-Comments">
//                         <input id="comments" />
//                      </form>
//                   </div>
//             `).join(' ');
//     }catch(error){
//         console.error(error)
//         alert(`An Error Occurred ${error}`)
//     }
// }

// const handleRenderUser = () => {
//     handleFetchData()
//       .then(userDataHTML => {
//         const outputElement = document.querySelector('#output');
//         outputElement.innerHTML = userDataHTML;
//     });
// };
// handleRenderUser();

// document.querySelector('#form').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     handleFilter();
// });

// const handleFilter = () => {
//     const inputValue = document.querySelector('#input').value 
//     handleFetchData(inputValue)
//       .then(filteredDataHTML => {
//         const outputElement = document.querySelector('#output')
//         outputElement.innerHTML = filteredDataHTML;
//       });
// };
