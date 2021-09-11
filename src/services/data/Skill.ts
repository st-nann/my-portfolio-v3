/**
 * Created by St.Nann on 03-Aug-17.
 */
module.exports = {
  menu: {
    languages: [
      { text: 'Programing', value: 'programing' },
      { text: 'General', value: 'general' }
    ],
    frameworks: [
      { text: 'Frontend', value: 'frontend' },
      { text: 'Backend', value: 'backend' },
      { text: 'Testing', value: 'testing' }
    ],
    tools: [
      { text: 'Design', value: 'design' },
      { text: 'Editor', value: 'editor' },
      { text: 'Vision Control', value: 'version_control' },
      { text: 'Virtual Machine', value: 'virtual_machine' },
      { text: 'Schedule Work', value: 'schedule' },
      { text: 'API Test', value: 'api' },
      { text: 'Chatbot', value: 'chatbot' },
      { text: 'Database', value: 'database' },
      { text: 'Network', value: 'network' },
      { text: 'Talk Chanel', value: 'talk' },
      { text: 'Other', value: 'other' }
    ]
  },
  os: [
    {
      name: 'Windows',
      value: 95,
      image: {
        name: 'skill%2Fos%2Fwindows'
      }
    },
    {
      name: 'Linux',
      value: 80,
      image: {
        name: 'skill%2Fos%2Flinux'
      }
    },
    {
      name: 'IOS',
      value: 70,
      image: {
        name: 'skill%2Fos%2Fios'
      }
    }
  ],
  languages: [
    {
      programing: [
        {
          name: 'JAVA',
          value: 90
        },
        {
          name: 'C',
          value: 70
        },
        {
          name: 'HTML',
          value: 100
        },
        {
          name: 'JAVASCRIPT',
          value: 95
        },
        {
          name: 'TYPESCRIPT',
          value: 80
        },
        {
          name: 'GOLANG',
          value: 30
        },
        {
          name: 'CSS (CSS, SASS)',
          value: 95
        },
        {
          name: 'SQL',
          value: 95
        },
        {
          name: 'PHP (LARAVEL)',
          value: 50
        }
      ],
      general: [
        {
          name: 'THAI',
          value: 100
        },
        {
          name: 'ENGLISH',
          value: 80
        },
        {
          name: 'JAPANESE',
          value: 70
        }
      ]
    }
  ],
  frameworks: [
    {
      frontend: [
        {
          name: 'VUE.JS (VUE, VUEX)',
          value: 95
        },
        {
          name: 'NUXT.JS (VUE SSR)',
          value: 80
        },
        {
          name: 'NEXT.JS (REACT SSR)',
          value: 60
        },
        {
          name: 'VUETIFY',
          value: 100
        },
        {
          name: 'MATERIAL UI',
          value: 90
        },
        {
          name: 'BOOTSTRAP',
          value: 75
        }
      ],
      backend: [
        {
          name: 'BACKPACK ADMIN (PHP LARAVEL)',
          value: 90
        },
        {
          name: 'PHP LARAVEL',
          value: 80
        },
        {
          name: 'NODE.JS',
          value: 80
        },
        {
          name: 'TYPESCRIPT',
          value: 80
        }
      ],
      testing: [
        {
          name: 'ROBOT',
          value: 70
        }
      ]
    }
  ],
  library: [
    {
      name: 'Lodash',
      image: {
        name: 'skill%2Flibrary%2Flodash'
      }
    },
    {
      name: 'Moment.js',
      image: {
        name: 'skill%2Flibrary%2Fmoment'
      }
    },
    {
      name: 'Numeral.js',
      image: {
        name: 'skill%2Flibrary%2Fnumeral'
      }
    },
    {
      name: 'Chart.js',
      image: {
        name: 'skill%2Flibrary%2Fchartjs'
      }
    }
  ],
  tools: [
    {
      design: [
        {
          name: 'Moqups (Wireframe)',
          image: {
            name: 'skill%2Ftool%2Fmoqups'
          }
        },
        {
          name: 'Adobe Photoshop',
          image: {
            name: 'skill%2Ftool%2Fphotoshop'
          }
        },
        {
          name: 'Microsoft Visio',
          image: {
            name: 'skill%2Ftool%2Fmicrosoftvisio'
          }
        }
      ],
      editor: [
        {
          name: 'Red Hat JBoss Developer Studio 7.1.1.GA',
          image: {
            name: 'skill%2Ftool%2Fredhat'
          }
        },
        {
          name: 'PhpStorm',
          image: {
            name: 'skill%2Ftool%2Fphpstorm'
          }
        },
        {
          name: 'Microsoft Visual Studio',
          image: {
            name: 'skill%2Ftool%2Fmicrosoftvisualstudio'
          }
        },
        {
          name: 'VSCODE',
          image: {
            name: 'skill%2Ftool%2Fvscode'
          }
        },
        {
          name: 'Atom',
          image: {
            name: 'skill%2Ftool%2Fatom'
          }
        },
        {
          name: 'Sublime',
          image: {
            name: 'skill%2Ftool%2Fsublime'
          }
        },
        {
          name: 'Dev-C++',
          image: {
            name: 'skill%2Ftool%2Fc%2B%2B'
          }
        },
        {
          name: 'EditPlus',
          image: {
            name: 'skill%2Ftool%2Feditplus'
          }
        }
      ],
      version_control: [
        {
          name: 'GitLab',
          image: {
            name: 'skill%2Ftool%2Fgitlab'
          }
        },
        {
          name: 'GitHub',
          image: {
            name: 'skill%2Ftool%2Fgithub'
          }
        },
        {
          name: 'Travis',
          image: {
            name: 'skill%2Ftool%2Ftravis'
          }
        }
      ],
      virtual_machine: [
        {
          name: 'VMware Workstation,',
          image: {
            name: 'skill%2Ftool%2Fvmware'
          }
        },
        {
          name: 'Oracle VM Virtual Box',
          image: {
            name: 'skill%2Ftool%2Fvirtualbox'
          }
        },
        {
          name: 'Docker',
          image: {
            name: 'skill%2Ftool%2Fdocker'
          }
        }
      ],
      schedule: [
        {
          name: 'Jira',
          image: {
            name: 'skill%2Ftool%2Fjira'
          }
        },
        {
          name: 'Asana',
          image: {
            name: 'skill%2Ftool%2Fasana'
          }
        },
        {
          name: 'Trello',
          image: {
            name: 'skill%2Ftool%2Ftrello'
          }
        },
        {
          name: 'Microsoft Project',
          image: {
            name: 'skill%2Ftool%2Fmicrosoftproject'
          }
        }
      ],
      api: [
        {
          name: 'postman',
          image: {
            name: 'skill%2Ftool%2Fpostman'
          }
        }
      ],
      chatbot: [
        {
          name: 'LINE Developer',
          image: {
            name: 'skill%2Ftool%2Flinedevloper'
          }
        },
        {
          name: 'LINE Bot Designer',
          image: {
            name: 'skill%2Ftool%2Flinebotdesigner'
          }
        },
        {
          name: 'Dialogflow',
          image: {
            name: 'skill%2Ftool%2Fdialogflow'
          }
        },
        {
          name: 'Rich Menu Maker',
          image: {
            name: 'skill%2Ftool%2Frichmenumaker'
          }
        }
      ],
      database: [
        {
          name: 'Microsoft SQL Server',
          image: {
            name: 'skill%2Ftool%2Fmicrosoftsqlserver'
          }
        },
        {
          name: 'sqldeveloper',
          image: {
            name: 'skill%2Ftool%2Fsqldeveloper'
          }
        },
        {
          name: 'MySQL Workbench',
          image: {
            name: 'skill%2Ftool%2Fmysqlworkbrench'
          }
        },
        {
          name: 'Mongo DB',
          image: {
            name: 'skill%2Ftool%2Fmongodb'
          }
        }
      ],
      network: [
        {
          name: 'OpenVPN',
          image: {
            name: 'skill%2Ftool%2Fopenvpn'
          }
        },
        {
          name: 'PutTy',
          image: {
            name: 'skill%2Ftool%2Fputty'
          }
        },
        {
          name: 'Cisco Packet Tracer',
          image: {
            name: 'skill%2Ftool%2Fcisco'
          }
        }
      ],
      talk: [
        {
          name: 'Slack',
          image: {
            name: 'skill%2Ftool%2Fslack'
          }
        },
        {
          name: 'Zimbra',
          image: {
            name: 'skill%2Ftool%2Fzimbra'
          }
        }
      ],
      other: [
        {
          name: 'Openstack',
          image: {
            name: 'skill%2Ftool%2Fopenstack'
          }
        },
        {
          name: 'Firebase',
          image: {
            name: 'skill%2Ftool%2Ffirebase'
          }
        },
        {
          name: 'jMeter',
          image: {
            name: 'skill%2Ftool%2Fjmeter'
          }
        },
        {
          name: 'Microsoft Office',
          image: {
            name: 'skill%2Ftool%2Fmicrosoftoffice'
          }
        }
      ]
    }
  ]
}
