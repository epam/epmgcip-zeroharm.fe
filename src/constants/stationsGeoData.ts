export type StationData = {
  latitude: number;
  longitude: number;
  stationAddress: string;
}

export type StationRawData = {
  latitude: number;
  longitude: number;
  stationAddress: {
    translationPath: string;
  }
}

export enum Locations {
  Bukhara,
  Jizzakh,
  Navoiy,
  Nukus,
  Samarqand,
  Tashkent,
  Termez,
  Urgench,
};

export type Location = keyof typeof Locations;

export const stationsGeoData: Record<Location, StationRawData[]> = {
  Jizzakh: [
    {
      latitude: 40.169166,
      longitude: 67.835548,
      stationAddress: {
        translationPath: ""
        // RU г.Джизак, махалля "Зилол" ул. Овланий, дом 2
        // EN Jizzakh, Zilol Mahalla, Ovlaniy str, 2
        // ? UZ Zilol mahallasi, Jizzax
      }
    }
  ],
  Bukhara: [
    {
      latitude: 39.760278,
      longitude: 64.433204,
      stationAddress: {
        translationPath: ""
        // RU г. Бухара, ул. Мустакиллик
        // EN Bukhara, Mustakillik str.
        // UZ Mustaqillik koʻchasi, Buxoro
      }
    },
    {
      latitude: 39.775941,
      longitude: 64.431379,
      stationAddress: {
        translationPath: ""
        // RU г. Бухара, пр. Гиждувоний
        // EN Bukhara, Gizhduvoniy str.
        // UZ Abdulxoliq G'ijduvoniy ko'chasi, Buxoro
      }
    },
    {
      latitude: 39.766192,
      longitude: 64.419429,
      stationAddress: {
        translationPath: ""
        // RU г. Бухара, ул. Муминова
        // EN Bukhara, Muminova str.
        // UZ Akademik Ibrohim Moʻminov koʻchasi, Buxoro
      }
    }
  ],
  Samarqand: [
    {
      latitude: 39.642737,
      longitude: 66.961508,
      stationAddress: {
        translationPath: ""
        // RU г.Самарканд, Университетский бульвар, 17
        // EN Samarqand, 17, University blvd.
        // UZ Universitet xiyoboni, 17V, Samarqand
      }
    },
    {
      latitude: 39.653036,
      longitude: 66.973132,
      stationAddress: {
        translationPath: ""
        // RU г.Самарканд, ул. Регистанская, 7
        // EN Samarqand, 7, Registan str.
        // UZ Registon koʻchasi, 7, Samarqand
      }
    },
    {
      latitude: 39.667987,
      longitude: 66.971621,
      stationAddress: {
        translationPath: ""
        // RU г.Самарканд, ул. Шохи-Зинда, 151
        // EN Samarqand, 151, Shahi Zinda str.
        // UZ Shohizinda ko'chasi, 151,  Samarqand
      }
    },
    {
      latitude: 39.666760,
      longitude: 66.927593,
      stationAddress: {
        translationPath: ""
        // RU г.Самарканд, ул. Абу Райхон Беруни, 171
        // EN Samarqand, 171, Abu Rayhon Beruniy
        // UZ Beruniy ko'chasi, 171, Samarqand
      }
    }
  ],
  Navoiy: [
    {
      latitude: 40.0952857,
      longitude: 65.3799896,
      stationAddress: {
        translationPath: ""
        // RU г. Навои, ул. Зулфия, д.1
        // EN Navoi, 1, Zulfia str.
        // UZ Zulfiya ko'chasi, 1, Navoiy
      }
    },
    {
      latitude: 40.100823,
      longitude: 65.367982,
      stationAddress: {
        translationPath: ""
        // RU г. Навои, ул. Кизилкум, д.15
        // EN Navoi, 15, Kyzylkum str.
        // UZ Qizilqum ko'chasi, 15, Navoiy
      }
    },
    {
      latitude: 40.117753,
      longitude: 65.374431,
      stationAddress: {
        translationPath: ""
        // RU г. Навои, ул. Меъморлар, д.14
        // EN Navoi, 14, Me'morlar str.
        // UZ Meʼmorlar koʻchasi, 14, Navoiy
      }
    }
  ],
  Termez: [
    {
      latitude: 37.238986,
      longitude: 67.245023,
      stationAddress: {
        translationPath: ""
        // RU г.Термез, ул. Ат-Термизий
        // EN Termez, At-Termiziy str.
        // UZ Surxondaryo viloyati, Termiz, Doʻstlik bogʻi
      }
    },
    {
      latitude: 37.280911,
      longitude: 67.318857,
      stationAddress: {
        translationPath: ""
        // RU Термезский район, Международный аэропорт города Термез
        // EN Termez, Termez International Airport
        // UZ Termiz xalqaro aeroporti, Termiz tumani
      }
    }
  ],
  Urgench: [
    {
      latitude: 41.560607,
      longitude: 60.611794,
      stationAddress: {
        translationPath: ""
        // RU г. Ургенч, ул. Ж. Мангуберды, дом 2
        // EN Urgench, 2, Zh. Manguberdy str.
        // UZ Urganch, 2, Xorazm viloyati
      }
    },
    {
      latitude: 41.543021,
      longitude: 60.638440,
      stationAddress: {
        translationPath: ""
        // RU г. Ургенч, ул. Ханкинская
        // EN Urgench, Hankinskaya str.
        // UZ Urgench, Xanqa koʻchasi
      }
    }
  ],
  Nukus: [
    {
      latitude: 42.448653,
      longitude: 59.640239,
      stationAddress: {
        translationPath: ""
        // RU г.Нукус, ул. Алмазар, дом 223
        // EN Nukus, 223, Almazar str.
        // UZ Nukus, ulitsa Almazar, 223
      }
    },
    {
      latitude: 42.461166,
      longitude: 59.604854,
      stationAddress: {
        translationPath: ""
        // RU г.Нукус, Проспект Бердах, Университет Бердаха
        // EN Nukus, Berdakh str.
        // ? UZ Nukus, Ernazar Alakóz kóshesi, 3
      }
    },
    {
      latitude: 52.921296,
      longitude: 65.364043,
      stationAddress: {
        translationPath: ""
        // ? RU Поселок «Кыз-кеткен»
        // ? EN Qyzketken
        // ? UZ Qyzketken aýyly, Qarasý aýdany
      }
    }
  ],
  Tashkent: [
    {
      // ?????
      latitude: 0,
      // ?????
      longitude: 0,
      stationAddress: {
        translationPath: ""
        // RU Чиланзарский р-он, проспект Бунёдкор
        // ? EN
        // ? UZ
      }
    },
    {
      latitude: 41.3270815,
      longitude: 69.2893541,
      stationAddress: {
        translationPath: ""
        // RU г. Ташкент, Юнус-Абадский р-он, Узгидромет
        // EN Tashkent, Uzhydromet
        // ? UZ
      }
    },
    {
      latitude: 41.2830467,
      longitude: 69.2196999,
      stationAddress: {
        translationPath: ""
        // RU г. Ташкент, Чиланзарский р-он, 2 кв
        // EN Tashkent, Chilanzar, District 2
        // UZ 2-mavze, Chilonzor dahasi, Chilonzor tumani, Toshkent
      }
    },
    {
      latitude: 41.271171,
      longitude: 69.1728336,
      stationAddress: {
        translationPath: ""
        // RU г. Ташкент, Чиланзарский р-он, 20 кв-л
        // EN Tashkent, Chilanzar, District 20
        // UZ 20-mavze, Chilonzor dahasi, Chilonzor tumani, Toshkent
      }
    },
    {
      latitude: 41.317504,
      longitude: 69.295374,
      stationAddress: {
        translationPath: ""
        // RU г. Ташкент, Мирабадский р-он, ул. Моварауннахр
        // EN Tashkent, Movaraunnahr str
        // UZ Movarounnahr koʻchasi, Toshkent
      }
    },
    {
      latitude: 41.3039969,
      longitude: 69.3003051,
      stationAddress: {
        translationPath: ""
        // RU г. Ташкент, Яшнабадский р-он, ул. П.Махмуда
        // EN Tashkent, Mahmuda str.
        // UZ Yashnobod tumani, Pahlavon Mahmud ko'chasi, Toshkent
      }
    },
    {
      latitude: 41.278180,
      longitude: 69.302979,
      stationAddress: {
        translationPath: ""
        // RU г. Ташкент, Мирабадский р-он, ул. Янгизамон
        // EN Tashkent, Jangizamon str.
        // UZ Mirobod tumani, Yangizamon koʻchasi, Toshkent
      }
    },
    {
      latitude: 41.281415,
      longitude: 69.339556,
      stationAddress: {
        translationPath: ""
        // RU г. Ташкент, Яшнабадский р-он, ул. Слонима
        // EN Tashkent, Slonima str.
        // UZ Yashnobod tumani, Asalobod ko'chasi, Toshkent
      }
    },
    {
      latitude: 41.318725,
      longitude: 69.283987,
      stationAddress: {
        translationPath: ""
        // RU г. Ташкент, Мирзо-Улугбекский р-он
        // EN Tashkent, Crafers factory district
        // UZ Mirzo Ulugʻbek tumani, Toshkent
      }
    },
    {
      // ?????
      latitude: 0,
      // ?????
      longitude: 0,
      stationAddress: {
        translationPath: ""
        // ? RU обл. Ташкент, Кибрай (ориентир: н.п. Лимончилик)
        // EN Kibray, Tashkent Region
        // UZ Qibray shaharchasi, Toshkent viloyati
      }
    },
    {
      latitude: 41.355456,
      longitude: 69.247434,
      stationAddress: {
        translationPath: ""
        // RU г. Ташкент, Алмазарский р-он, Лабзак, ул. Уста-Ширин
        // EN Tashkent, Labzak District, Usta-Shirin str.
        // UZ Olmazor tumani, Labzak, Usta-Shirin ko'chasi
      }
    }
  ]
};
