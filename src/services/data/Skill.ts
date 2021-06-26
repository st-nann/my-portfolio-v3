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
        name: 'skill%2Fos%2Fwindows',
        token: 'c0d4489a-dd7c-49be-a682-fcef9189b161'
      }
    },
    {
      name: 'Linux',
      value: 80,
      image: {
        name: 'skill%2Fos%2Flinux',
        token: '3e2b7085-4339-466a-979d-3eb252e575c0'
      }
    },
    {
      name: 'IOS',
      value: 70,
      image: {
        name: 'skill%2Fos%2Fios',
        token: 'c0a49a62-f1af-48b5-8ef4-12f740d9c4be'
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
        name: 'skill%2Flibrary%2Flodash',
        token: 'b293c6ae-fcf8-4ea6-9cb8-a3b4a9c4bd90'
      }
    },
    {
      name: 'Moment.js',
      image: {
        name: 'skill%2Flibrary%2Fmoment',
        token: 'c2d69b16-10d2-454b-b468-38626a8c61bf'
      }
    },
    {
      name: 'Numeral.js',
      image: {
        name: 'skill%2Flibrary%2Fnumeral',
        token: 'eeb81965-f94e-4e4a-96ae-c3bfde452a87'
      }
    },
    {
      name: 'Chart.js',
      image: {
        name: 'skill%2Flibrary%2Fchartjs',
        token: '322bbe2c-14d0-41a7-8d51-61adc8d1cef3'
      }
    }
  ],
  tools: [
    {
      design: [
        {
          name: 'Moqups (Wireframe)',
          image: {
            name: 'skill%2Ftool%2Fmoqups',
            token: '7961ffab-25f2-4174-86fe-397d7b675d3e'
          }
        },
        {
          name: 'Adobe Photoshop',
          image: {
            name: 'skill%2Ftool%2Fphotoshop',
            token: '7b0e6ec2-d258-47ca-a1f1-2f1b94728025'
          }
        },
        {
          name: 'Microsoft Visio',
          image: {
            name: 'skill%2Ftool%2Fmicrosoftvisio',
            token: 'b1b7f67e-2470-4e17-bea3-935f21f2604e'
          }
        }
      ],
      editor: [
        {
          name: 'Red Hat JBoss Developer Studio 7.1.1.GA',
          image: {
            name: 'skill%2Ftool%2Fredhat',
            token: '06a5675c-3a71-41aa-80e0-9d939419d0dd'
          }
        },
        {
          name: 'PhpStorm',
          image: {
            name: 'skill%2Ftool%2Fphpstorm',
            token: 'ea59c7db-7404-4fbb-adb2-7ab59c0a4e55'
          }
        },
        {
          name: 'Microsoft Visual Studio',
          image: {
            name: 'skill%2Ftool%2Fmicrosoftvisualstudio',
            token: '788aff63-e198-49fc-9e20-988832c30eae'
          }
        },
        {
          name: 'VSCODE',
          image: {
            name: 'skill%2Ftool%2Fvscode',
            token: '8bd8083d-66b0-479e-b31d-4177c40182a5'
          }
        },
        {
          name: 'Atom',
          image: {
            name: 'skill%2Ftool%2Fatom',
            token: 'd0172766-d765-46ce-b8c7-7705df76d2e5'
          }
        },
        {
          name: 'Sublime',
          image: {
            name: 'skill%2Ftool%2Fsublime',
            token: 'f6a1cf59-cc4a-4031-9a84-8d2b57aa89b7'
          }
        },
        {
          name: 'Dev-C++',
          image: {
            name: 'skill%2Ftool%2Fc%2B%2B',
            token: 'af42c901-4009-4687-9af5-703048484903'
          }
        },
        {
          name: 'EditPlus',
          image: {
            name: 'skill%2Ftool%2Feditplus',
            token: '880668af-3232-4b94-b75e-d696d7009239'
          }
        }
      ],
      version_control: [
        {
          name: 'GitLab',
          image: {
            name: 'skill%2Ftool%2Fgitlab',
            token: 'ed055abf-8a85-41bc-85b7-146475a9308d'
          }
        },
        {
          name: 'GitHub',
          image: {
            name: 'skill%2Ftool%2Fgithub',
            token: 'ace4ef45-9dd1-4f77-8e36-d9719a61b25a'
          }
        },
        {
          name: 'Travis',
          image: {
            name: 'skill%2Ftool%2Ftravis',
            token: '55d94d0a-4524-4363-b049-a9f5bc3f3686'
          }
        }
      ],
      virtual_machine: [
        {
          name: 'VMware Workstation,',
          image: {
            name: 'skill%2Ftool%2Fvmware',
            token: 'c9693296-6103-4584-9955-7623101e4680'
          }
        },
        {
          name: 'Oracle VM Virtual Box',
          image: {
            name: 'skill%2Ftool%2Fvirtualbox',
            token: '2a949dd0-afdd-4dde-aae1-0ee3d4332170'
          }
        },
        {
          name: 'Docker',
          image: {
            name: 'skill%2Ftool%2Fdocker',
            token: '3204b093-5a54-4be8-a854-5ccba183ba5d'
          }
        }
      ],
      schedule: [
        {
          name: 'Jira',
          image: {
            name: 'skill%2Ftool%2Fjira',
            token: 'a7c82217-5e88-423d-a71b-f299c0ec2abb'
          }
        },
        {
          name: 'Asana',
          image: {
            name: 'skill%2Ftool%2Fasana',
            token: 'a642205a-4483-448e-9d9e-afb570db49d7'
          }
        },
        {
          name: 'Trello',
          image: {
            name: 'skill%2Ftool%2Ftrello',
            token: '3225ef73-229b-47d3-8ba9-fb5200ea690f'
          }
        },
        {
          name: 'Microsoft Project',
          image: {
            name: 'skill%2Ftool%2Fmicrosoftproject',
            token: 'a2db1767-60a9-41ce-9975-0881ea9d170d'
          }
        }
      ],
      api: [
        {
          name: 'postman',
          image: {
            name: 'skill%2Ftool%2Fpostman',
            token: '6f19af9b-d56e-4e3d-bda1-3f7f52c5e472'
          }
        }
      ],
      chatbot: [
        {
          name: 'LINE Developer',
          image: {
            name: 'skill%2Ftool%2Flinedevloper',
            token: '499b197f-ce6f-4375-b09a-8a0d1eac75af'
          }
        },
        {
          name: 'LINE Bot Designer',
          image: {
            name: 'skill%2Ftool%2Flinebotdesigner',
            token: '99a05181-b882-48c5-990f-a0cf0de8957b'
          }
        },
        {
          name: 'Dialogflow',
          image: {
            name: 'skill%2Ftool%2Fdialogflow',
            token: '8236a4f5-97d9-4973-a0f8-aa488e963265'
          }
        },
        {
          name: 'Rich Menu Maker',
          image: {
            name: 'skill%2Ftool%2Frichmenumaker',
            token: 'c058c3ed-0f00-4a05-b871-8605bdc73324'
          }
        }
      ],
      database: [
        {
          name: 'Microsoft SQL Server',
          image: {
            name: 'skill%2Ftool%2Fmicrosoftsqlserver',
            token: '963426d4-287a-4f1a-90bb-bf4b6f4d38bb'
          }
        },
        {
          name: 'sqldeveloper',
          image: {
            name: 'skill%2Ftool%2Fsqldeveloper',
            token: '4fd8ce90-fbec-46e8-801a-af8e5318d175'
          }
        },
        {
          name: 'MySQL Workbench',
          image: {
            name: 'skill%2Ftool%2Fmysqlworkbrench',
            token: '81041d46-0bd8-467e-9123-e4b7a316b684'
          }
        },
        {
          name: 'Mongo DB',
          image: {
            name: 'skill%2Ftool%2Fmongodb',
            token: 'b28a6222-8a92-473f-acbc-7ea1d6aa474b'
          }
        }
      ],
      network: [
        {
          name: 'OpenVPN',
          image: {
            name: 'skill%2Ftool%2Fopenvpn',
            token: 'e2c000a5-cffe-467a-ae85-b24605b45b57'
          }
        },
        {
          name: 'PutTy',
          image: {
            name: 'skill%2Ftool%2Fputty',
            token: 'fe626201-5d49-486d-b742-104302884c31'
          }
        },
        {
          name: 'Cisco Packet Tracer',
          image: {
            name: 'skill%2Ftool%2Fcisco',
            token: '50a745b9-ec96-4d0e-a1f8-8fd5f1667f76'
          }
        }
      ],
      talk: [
        {
          name: 'Slack',
          image: {
            name: 'skill%2Ftool%2Fslack',
            token: '468be62b-9b20-4bfc-91c9-090c3669ea1b'
          }
        },
        {
          name: 'Zimbra',
          image: {
            name: 'skill%2Ftool%2Fzimbra',
            token: '458f9f89-d944-4acb-81d2-b685da22b7c8'
          }
        }
      ],
      other: [
        {
          name: 'Openstack',
          image: {
            name: 'skill%2Ftool%2Fopenstack',
            token: '822ceb26-9c24-4068-98ec-d8284bac73be'
          }
        },
        {
          name: 'Firebase',
          image: {
            name: 'skill%2Ftool%2Ffirebase',
            token: '8068ee83-b0e3-4cf8-aec0-794e6944a919'
          }
        },
        {
          name: 'jMeter',
          image: {
            name: 'skill%2Ftool%2Fjmeter',
            token: '40f8de8c-4ef4-4753-a39a-44878d074db1'
          }
        },
        {
          name: 'Microsoft Office',
          image: {
            name: 'skill%2Ftool%2Fmicrosoftoffice',
            token: '5fe89b6c-207a-463e-8395-9c375a92a5ce'
          }
        }
      ]
    }
  ]
}
