'use strict'

 export let albums = [
     {
         name:'Харьков',
         address:'Харьков',
         links:['https://gdb.rferl.org/74879F92-2852-4465-9F93-EF9BD619FE1E_w1023_r1_s.jpg',
                'https://focus.ua/modules/thumb.php?u=../files/%3D3540.jpg&m=c_large_wide',
                'https://i.ytimg.com/vi/Nc259UlvRlk/maxresdefault.jpg'
         ]
     },
     {
         name:'A-level',
         address:'Харьков площадь павловская 6',
         links:['https://a-level.pl.ua/wp-content/themes/alevel/images/landscape.png',
                'https://lh5.googleusercontent.com/p/AF1QipOIisLPlKAicrPz-tUPIwGgVw4d4DzCoHDSMHkK=w600',
                'https://lh5.googleusercontent.com/p/AF1QipPZBTML2tnt6CACXsdi95xU9V9RwRlOm-k6DsrR=w600'
         ]
     },
     {
        name:'Киев',
        address:'Киев',
        links:['https://images.unian.net/photos/2018_04/1525017066-1376.jpg?0.06997165547621376',
               'https://images.unian.net/photos/2018_04/1522838423-5353.jpg?0.16596915674161106',
               'http://kp.crimea.ua/wp-content/uploads/2018/07/kiev-header.jpg'
        ]
    },
     {
         name:'Белгород',
         address:'Белгород',
         links:['http://geosfera.org/uploads/fotos/belgorod.jpg',
             'https://focus.ua/files/infocenter-odessa.com_1514280874_68820021.jpg',
         ]
     },
 ]

 localStorage.setItem("albums", JSON.stringify(albums))
