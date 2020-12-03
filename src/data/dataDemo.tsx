export const dataAutoComplete=[
  {key:'100',value:'Dato A',label:' 100 - Dato A'},
  {key:'101',value:'Dato B',label:' 101 - Dato B'},
  {key:'200',value:'Dato C',label:' 200 - Dato C'},
  {key:'201',value:'Dato D',label:' 201 - Dato D'},
  {key:'300',value:'Dato E',label:' 300 - Dato E'},
  {key:'301',value:'Dato F',label:' 301 - Dato F'},
  {key:'400',value:'Dato G',label:' 400 - Dato G'},
  {key:'401',value:'Dato H',label:' 401 - Dato H'},
  {key:'500',value:'Dato I',label:' 500 - Dato I'}
]


export const dataTableColumnsSucursal=[
  {title:'Numero',             field:'numero'},
  {title:'Descripcion',        field:'descripcion'}
]
export const dataTableDataSucursal=[
  {numero:'1',descripcion:'Jimenez Molina Alexander W.'}
]


export const dataDnDAssociate=[
  {id:'1',text:'Contacto 1'},
  {id:'2',text:'Contacto 2'},
  {id:'3',text:'Contacto 3'},
  {id:'4',text:'Contacto 4'},
  {id:'5',text:'Contacto 5'},
  {id:'6',text:'Contacto 6'}
]


export const dataTableColumns=[
  {title:'ID',             field:'id'},
  {title:'Rut',            field:'rut'},
  {title:'Razón Social',   field:'razonsocial'},
  {title:'Nombre Fantasía',field:'nombrefantasia'},
  {title:'Estado',         field:'estado'},
  {title:'Rut Holding',    field:'rutholding'}
]
export const dataTableData=[
  {id:"1",rut:"1-9",razonsocial:"Empresa 1",nombrefantasia:"Fantasía 1", estado:"Rechazada",rutholding:"1-9"},
  {id:"2",rut:"2-7",razonsocial:"Empresa 2",nombrefantasia:"Fantasía 2", estado:"Aprobada",rutholding:"1-9"},
  {id:"3",rut:"5-4",razonsocial:"Empresa 3",nombrefantasia:"Fantasía 3", estado:"Aprobada",rutholding:"1-9"},
  {id:"4",rut:"3-6",razonsocial:"Empresa 4",nombrefantasia:"Fantasía 4", estado:"Cancelada",rutholding:"2-7"},
  {id:"5",rut:"6-2",razonsocial:"Empresa 5",nombrefantasia:"Fantasía 5", estado:"Anulada",rutholding:"2-7"}
]


export const dataSelectEstado=[
  {key:1,label:"A - Aprobado"},
  {key:2,label:"N - Anulado"},
  {key:3,label:"R - Rechazado"},
  {key:4,label:"C - Cancelado"},
  {key:5,label:"I - Ingresado"},
  {key:6,label:"P - Pendiente"},
]

export const dataSelectBanco=[
  {key:1,label:"Banco de Chile"},
  {key:2,label:"Banco BCI"},
  {key:3,label:"Banco Santander"},
  {key:4,label:"Banco A"},
  {key:5,label:"Banco B"}
]

export const dataSelectSucursal=[
  {key:1,label:"Casa central"},
  {key:2,label:"Sucursal 1"},
  {key:3,label:"Sucursal 2"},
  {key:4,label:"Sucursal 3"},
  {key:5,label:"Sucursal 4"}
]



export const dataSelectFormaPago=[
  {key:1,label:"Deposito (REM)"},
  {key:2,label:"Deposito A"},
  {key:3,label:"Deposito B"},
  {key:4,label:"Deposito C"},
  {key:5,label:"Deposito D"},
  {key:6,label:"Deposito E"},
  {key:7,label:"Deposito F"}
]

export const dataSelect=[
  {key:1,value:"campo1"},
  {key:2,value:"campo2"},
  {key:3,value:"campo3"}
]

export const dragDataItem=[
  {key:1,message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. gth" },
  {key:2,message:"Adipisicing elit. Quos aliquam eligendi cum. Praesentium dfg." },
  {key:3,message:"Quos aliquam eligendi cum. Praesentium totam vero dicta eumhj" },
  {key:4,message:"Praesentium totam vero dicta eum tenetur distinctio. Dolorem?" },
  {key:5,message:"Amet consectetur adipisicing elit. Quos aliquam eligendi cum." },
  {key:6,message:"Sit amet consectetur adipisicing elit. Quos aliquam eligendi " }  
]
export const notifications=[
    {key:1, read:true ,message:"Adipisicing elit. Quam maiores neque facere sequi sunt aspernatur voluptatem earum consequuntur ea sit?"},
    {key:2,read:false,message:"Consectetur adipisicing elit. Deserunt odio aliquam in." },
    {key:3, read:false,message:"Lorem, ipsum dolor."  },
    {key:4, read:false,message:"Sit amet consectetur adipisicing elit. Repellendus minima totam vitae dolorum ipsa, quia et temporibus nesciunt amet molestiae. Recusandae, quam. Laborum, quo. Iste voluptatum odio, similique dolore magni nemo alias dicta ab exercitationem eius eaque sapiente. Repellat ipsa omnis assumenda cumque! Laudantium, optio? Aperiam dolore qui obcaecati blanditiis iste eligendi beatae magnam, sed nesciunt est nisi eum, enim sunt veniam. Vero rerum omnis exercitationem! Ullam quis enim voluptates perspiciatis blanditiis animi quisquam, soluta, eligendi iste nemo harum unde, ipsa pariatur quia maxime porro voluptatibus sed. Inventore magnam non debitis ea, perspiciatis est, iure eius cumque iusto alias ipsa!" }]

export  const treeData=[
    {key:"0",label:"label-0", 
             nodes:[{key:"01",label:"label-01"}]},
    {key:"1",label:"label-1"},
    {key:"2",label:"label-2", 
             nodes:[{key:"20",label:"label-20"}]},
    {key:"3",label:"label-3"}
       ]

export const treeDataSelect = {
        label: 'search me',
        value: 'searchme',
        children: [
          {
            label: 'search me too',
            value: 'searchmetoo',
            children: [
              {
                label: 'No one can get me',
                value: 'anonymous'
              }
            ]
          }
        ]
      }

