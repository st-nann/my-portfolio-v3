/**
 * Created by St.Nann on 03-Aug-17.
 */
module.exports = {
  level: [
    { text: 'beginner', value: 1 },
    { text: 'average', value: 2 },
    { text: 'skilled', value: 3 },
    { text: 'specialist', value: 4 },
    { text: 'expert', value: 5 }
  ],
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
      { text: 'Deployment', value: 'deployment' },
      { text: 'Network', value: 'network' },
      // { text: 'Talk Chanel', value: 'talk' },
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
        { name: 'C', value: 3 },
        { name: 'CSS (CSS, SASS)', value: 4 },
        { name: 'GOLANG', value: 1 },
        { name: 'HTML', value: 5 },
        { name: 'JAVA', value: 3 },
        { name: 'JAVASCRIPT', value: 4 },
        { name: 'PHP (LARAVEL)', value: 3 },
        { name: 'SQL', value: 3 },
        { name: 'TYPESCRIPT', value: 3 }
      ],
      general: [
        { name: 'ENGLISH', value: 3 },
        { name: 'JAPANESE', value: 2 },
        { name: 'THAI', value: 5 }
      ]
    }
  ],
  frameworks: [
    {
      frontend: [
        { name: 'BOOTSTRAP', value: 4 },
        { name: 'MATERIAL UI', value: 4 },
        { name: 'NEXT.JS (REACT SSR)', value: 2 },
        { name: 'NUXT.JS (VUE SSR)', value: 3 },
        { name: 'REACT (QUERY, MOBX)', value: 1 },
        { name: 'VUE.JS (VUE, VUEX)', value: 4 },
        { name: 'VUETIFY', value: 5 }
      ],
      backend: [
        { name: 'NODE.JS', value: 4 },
        { name: 'PHP LARAVEL', value: 3 },
        { name: 'TYPESCRIPT', value: 3 }
      ],
      testing: [
        { name: 'Jest.js', value: 3 },
        { name: 'phpUnit', value: 3 },
        { name: 'ROBOT', value: 1 }
      ]
    }
  ],
  library: [
    {
      name: 'Chart.js',
      image: {
        name: 'skill%2Flibrary%2Fchartjs'
      }
    },
    {
      name: 'Excel.js',
      image: {
        name: 'skill%2Flibrary%2Fexceljs'
      }
    },
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
    }
  ],
  tools: [
    {
      design: [
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
        },
        {
          name: 'Moqups (Wireframe)',
          image: {
            name: 'skill%2Ftool%2Fmoqups'
          }
        }
      ],
      editor: [
        {
          name: 'Atom',
          image: {
            name: 'skill%2Ftool%2Fatom'
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
        },
        {
          name: 'Microsoft Visual Studio',
          image: {
            name: 'skill%2Ftool%2Fmicrosoftvisualstudio'
          }
        },
        {
          name: 'PhpStorm',
          image: {
            name: 'skill%2Ftool%2Fphpstorm'
          }
        },
        {
          name: 'Red Hat JBoss Developer Studio 7.1.1.GA',
          image: {
            name: 'skill%2Ftool%2Fredhat'
          }
        },
        {
          name: 'Sublime',
          image: {
            name: 'skill%2Ftool%2Fsublime'
          }
        },
        {
          name: 'VSCode',
          image: {
            name: 'skill%2Ftool%2Fvscode'
          }
        }
      ],
      version_control: [
        {
          name: 'BitBucket',
          image: {
            name: 'skill%2Ftool%2Fbitbucket'
          }
        },
        {
          name: 'GitHub',
          image: {
            name: 'skill%2Ftool%2Fgithub'
          }
        },
        {
          name: 'GitLab',
          image: {
            name: 'skill%2Ftool%2Fgitlab'
          }
        }
      ],
      virtual_machine: [
        {
          name: 'Docker',
          image: {
            name: 'skill%2Ftool%2Fdocker'
          }
        },
        {
          name: 'Oracle VM Virtual Box',
          image: {
            name: 'skill%2Ftool%2Fvirtualbox'
          }
        },
        {
          name: 'VMware Workstation,',
          image: {
            name: 'skill%2Ftool%2Fvmware'
          }
        }
      ],
      schedule: [
        {
          name: 'Asana',
          image: {
            name: 'skill%2Ftool%2Fasana'
          }
        },
        {
          name: 'Jira',
          image: {
            name: 'skill%2Ftool%2Fjira'
          }
        },
        {
          name: 'Microsoft Project',
          image: {
            name: 'skill%2Ftool%2Fmicrosoftproject'
          }
        },
        {
          name: 'Trello',
          image: {
            name: 'skill%2Ftool%2Ftrello'
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
          name: 'Dialog Flow',
          image: {
            name: 'skill%2Ftool%2Fdialogflow'
          }
        },
        {
          name: 'LINE Bot Designer',
          image: {
            name: 'skill%2Ftool%2Flinebotdesigner'
          }
        },
        {
          name: 'LINE Developer',
          image: {
            name: 'skill%2Ftool%2Flinedevloper'
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
          name: 'Mongo DB',
          image: {
            name: 'skill%2Ftool%2Fmongodb'
          }
        },
        {
          name: 'MySQL Workbench',
          image: {
            name: 'skill%2Ftool%2Fmysqlworkbrench'
          }
        },
        {
          name: 'PHP My Admin',
          image: {
            name: 'skill%2Ftool%2Fphpmyadmin'
          }
        },
        {
          name: 'sqldeveloper',
          image: {
            name: 'skill%2Ftool%2Fsqldeveloper'
          }
        }
      ],
      deployment: [
        {
          name: 'Firebase',
          image: {
            name: 'skill%2Ftool%2Ffirebase'
          }
        },
        {
          name: 'Travis',
          image: {
            name: 'skill%2Ftool%2Ftravis'
          }
        }
      ],
      network: [
        {
          name: 'Cisco Packet Tracer',
          image: {
            name: 'skill%2Ftool%2Fcisco'
          }
        },
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
          name: 'Tunnelblick',
          image: {
            name: 'skill%2Ftool%2Ftunnelblick'
          }
        }
      ],
      // talk: [
      //   {
      //     name: 'Slack',
      //     image: {
      //       name: 'skill%2Ftool%2Fslack'
      //     }
      //   },
      //   {
      //     name: 'Zimbra',
      //     image: {
      //       name: 'skill%2Ftool%2Fzimbra'
      //     }
      //   }
      // ],
      other: [
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
        },
        {
          name: 'Openstack',
          image: {
            name: 'skill%2Ftool%2Fopenstack'
          }
        },
        {
          name: 'SonarQube',
          image: {
            name: 'skill%2Ftool%2Fsonarqube'
          }
        }
      ]
    }
  ]
}
