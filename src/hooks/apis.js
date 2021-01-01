const peticiones = {
    tickets:[
      {numero:'#01234',titulo:'ticket 1',prioridad:'Baja',departamento:'Soporte',fecha:'03/08/2020', status:'En proceso'},
      {numero:'#01234',titulo:'ticket 1',prioridad:'Media',departamento:'Diseño',fecha:'03/08/2020', status:'En revsion'},
      {numero:'#01234',titulo:'ticket 1',prioridad:'Alta',departamento:'Administrativo',fecha:'03/08/2020', status:'En proceso'},
    ],
    nav:{
        "listNav": [
          {
            "iditem": 0,
            "item": "NOMINA",
            "link": "/nominas"
          },
          {
            "iditem": 1,
            "item": "FACTURACIÓN",
            "link": "/facturas"
          }
        ],
        "user":{
          "avatar":"data:image/jpeg;base64,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",
          "name":"Héctor Eduardo González Luna"
        }
    },
    subFacturas:{
        "listNav": [
          {
            "iditem": 1,
            "item": "Facturas",
            "link": "/facturas"
          },
          {
            "iditem": 2,
            "item": "Proyectos",
            "link": "/proyectos"
          },
          {
            "iditem": 3,
            "item": "Soporte",
            "link": "/soporte"
          }
        ]
    },
    subNominas:{
        "listNav": [
          {
            "iditem": 0,
            "item": "Dispersiones",
            "link": "#/"
          },
          {
            "iditem": 1,
            "item": "Recibos de Nómina",
            "link": "#/"
          }
        ]
    },
    proyectos:['Añada otra lista'],
    icons:[
      {fondo:'warning',icon:'faTasks',title:'No asignados',count:'05'},
      {fondo:'primary',icon:'faUserCog',title:'En curso',count:'04'},
      {fondo:'success',icon:'faCheckSquare',title:'Resueltos',count:'02'},
      {fondo:'danger',icon:'faTimesCircle',title:'No Resueltos',count:'01'}
    ],
    NAsig:['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris ac ex malesuada tempor nec at mi. Morbi porta est in ex volutpat, eu commodo eros facilisis. Sed eget commodo nunc.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris ac ex malesuada tempor nec at mi. Morbi porta est in ex volutpat, eu commodo eros facilisis. Sed eget commodo nunc.1','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris ac ex malesuada tempor nec at mi. Morbi porta est in ex volutpat, eu commodo eros facilisis. Sed eget commodo nunc.2','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris ac ex malesuada tempor nec at mi. Morbi porta est in ex volutpat, eu commodo eros facilisis. Sed eget commodo nunc.3','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris ac ex malesuada tempor nec at mi. Morbi porta est in ex volutpat, eu commodo eros facilisis. Sed eget commodo nunc.4'],
    Asig:[
      {
        user:'HE',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris ac ex malesuada tempor nec at mi. Morbi porta est in ex volutpat, eu commodo eros facilisis. Sed eget commodo nunc.',
      },
      {
        user:'LY',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris ac ex malesuada tempor nec at mi. Morbi porta est in ex volutpat, eu commodo eros facilisis. Sed eget commodo nunc.1',
      },
      {
        user:'BR',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris ac ex malesuada tempor nec at mi. Morbi porta est in ex volutpat, eu commodo eros facilisis. Sed eget commodo nunc.2',
      },
      {
        user:'PA',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris ac ex malesuada tempor nec at mi. Morbi porta est in ex volutpat, eu commodo eros facilisis. Sed eget commodo nunc.3',
      },
    ],
    Resueltos:[
      {
        user:'HE',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris ac ex malesuada tempor nec at mi. Morbi porta est in ex volutpat, eu commodo eros facilisis. Sed eget commodo nunc.',
      },
      {
        user:'LY',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris ac ex malesuada tempor nec at mi. Morbi porta est in ex volutpat, eu commodo eros facilisis. Sed eget commodo nunc.1',
      }
    ],
    NResueltos:[
      {
        user:'AN',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris ac ex malesuada tempor nec at mi. Morbi porta est in ex volutpat, eu commodo eros facilisis. Sed eget commodo nunc.',
      }
    ]
}
export default peticiones