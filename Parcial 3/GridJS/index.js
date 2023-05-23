
new gridjs.Grid({
    columns: ['Nombre', 'Descripcion', 'Popularidad'],
    server: {
      url: 'http://localhost:8082/generosmusicales',
      then: data => data.map(generos => [generos.nombre, generos.descripcion, generos.popularidad])
    },
    // style: {
    //     table: {
    //       border: '3px solid #ccc'
    //     },
    //     th: {
    //       'background-color': 'rgba(0, 0, 0, 0.1)',
    //       color: '#000',
    //       'border-bottom': '3px solid #ccc',
    //       'text-align': 'center'
    //     },
    //     td: {
    //       'text-align': 'center'
    //     }
    //   }
  }).render(document.getElementById("wrapper"));