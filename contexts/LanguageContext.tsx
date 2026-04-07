"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "uz" | "ru" | "en";

interface LanguageContextType {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      greenhouse: "Issiqxona turlari",
      projects: "Loyihalar",
      team: "Jamoa",
      contact: "Aloqa",
      language: "Til tanlang",
    },
    common: {
      readMore: "Batafsil ma'lumot",
      contact: "Aloqa",
      email: "Email",
      phone: "Telefon",
      address: "Manzil",
      year: "Yil",
      location: "Joylashuv",
      size: "Maydon",
      category: "Kategoriya",
      all: "Barchasi",
    },
    hero: {
      title: "Zamonaviy Issiqxona Yechimlari",
      subtitle: "O'zbekistonning yetakchi agro-injiniring kompaniyasi",
      description:
        "Biz eng zamonaviy issiqxona texnologiyalarini joriy etamiz va qishloq xo'jaligini rivojlantiramiz",
      cta: "Bog'lanish",
      downloadCatalog: "Katalog yuklab olish",
      slides: {
        slide1: {
          quote: "Biz har bir loyihani individual yondashuv bilan amalga oshiramiz va mijozlarimiz mamnuniyatini ta'minlaymiz.",
          author: "UZ-GROW jamoasi",
          role: "Agro-injiniring bo'yicha mutaxassislar",
          cta: "Turnkey issiqxonalar",
        },
        slide2: {
          quote: "Zamonaviy texnologiyalar va tajribali mutaxassislar jamoasi bilan yuqori hosildorlikka erishishingizni kafolatlaymiz.",
          author: "Texnik bo'lim",
          role: "Loyihalash va qurish",
          cta: "Plastik issiqxonalar",
        },
        slide3: {
          quote: "Energiya tejamkor va avtomatlashtirilgan tizimlar orqali xarajatlarni kamaytirib, daromadni oshiring.",
          author: "Innovatsiya markazi",
          role: "Zamonaviy yechimlar",
          cta: "Shisha issiqxonalar",
        },
        slide4: {
          quote: "Loyihalashdan tortib to'liq ishga tushirishgacha - biz bilan hamkorlik qiling va natijaga erishing.",
          author: "Xizmatlar bo'limi",
          role: "Kompleks yechimlar",
          cta: "Jihozlar va tizimlar",
        },
      },
      downloadCatalog: "Katalog yuklab olish",
      slides: {
        slide1: {
          quote:
            "Biz har bir loyihani individual yondashuv bilan amalga oshiramiz va mijozlarimiz mamnuniyatini ta'minlaymiz.",
          author: "UZ-GROW jamoasi",
          role: "Agro-injiniring bo'yicha mutaxassislar",
          cta: "Turnkey issiqxonalar",
        },
        slide2: {
          quote:
            "Zamonaviy texnologiyalar va tajribali mutaxassislar jamoasi bilan yuqori hosildorlikka erishishingizni kafolatlaymiz.",
          author: "Texnik bo'lim",
          role: "Loyihalash va qurish",
          cta: "Plastik issiqxonalar",
        },
        slide3: {
          quote:
            "Energiya tejamkor va avtomatlashtirilgan tizimlar orqali xarajatlarni kamaytirib, daromadni oshiring.",
          author: "Innovatsiya markazi",
          role: "Zamonaviy yechimlar",
          cta: "Shisha issiqxonalar",
        },
        slide4: {
          quote:
            "Loyihalashdan tortib to'liq ishga tushirishgacha - biz bilan hamkorlik qiling va natijaga erishing.",
          author: "Xizmatlar bo'limi",
          role: "Kompleks yechimlar",
          cta: "Jihozlar va tizimlar",
        },
      },
    },
    about: {
      title: "Biz haqimizda",
      subtitle: "15+ yillik tajriba",
      description:
        "UZ-GROW - O'zbekistonda qishloq xo'jaligi sohasidagi yetakchi kompaniya",
      experience: "Tajriba",
      projects: "Loyihalar",
      clients: "Mijozlar",
      countries: "Davlatlar",
      values: ["Sifat", "Innovatsiya", "Ishonch", "Uzoq muddatli hamkorlik"],
    },
    services: {
      title: "Xizmatlar",
      subtitle: "To'liq aylanma xizmatlar",
      description:
        "Loyihalashdan tortib to'liq ishga tushirishgacha - biz bilan hamkorlik qiling va natijaga erishing",
      engineering: "Injiniring",
      engineeringDesc: "Loyihalashdan boshlab to'liq ishga tushirishgacha",
      engineeringFullDesc:
        "Biz to'liq sikl asosida issiqxona quramiz. Natija: energiya tejamkor, yuqori hosildorlikka ega zamonaviy issiqxona",
      engineeringFeatures: [
        "Metall konstruksiya",
        "Polikarbonat yoki shisha qoplama",
        "Tomchilatib sug'orish",
        "Avtomatlashtirilgan boshqaruv",
      ],
      equipment: "Jihozlar",
      equipmentDesc: "Zamonaviy avtomatlashtirish va texnologiyalar",
      equipmentFullDesc:
        "Issiqxona uchun zarur bo'lgan barcha jihozlar va tizimlarni taqdim etamiz. Eng yuqori samaradorlik va ishonchlilik",
      equipmentFeatures: [
        "Iqlim nazorati tizimi",
        "Tomchilatib sug'orish",
        "LED grow lights",
        "O'g'itlash va sug'orish tizimi",
      ],
      consulting: "Konsalting",
      consultingDesc: "Professional maslahatlar va loyihalash",
      consultingFullDesc:
        "Bizning tajribali mutaxassislarimiz sizga eng yaxshi yechimlarni taklif qiladi. Loyihalashdan tortib to'liq ishga tushirishgacha",
      consultingFeatures: [
        "Tekshiruv va tahlil",
        "3D modellashtirish",
        "Texnik hujjatlar",
        "Eksport yo'nalishi",
        "Biznes model yaratish",
      ],
    },
    projects: {
      title: "Loyihalar",
      subtitle: "Muvaffaqiyatli issiqxona loyihalari",
      description: "Prezident tashriflari va qishloq xo'jaligi loyihalari",
      categories: {
        all: "Barchasi",
        presidential: "Prezident tashrifi",
        international: "Xalqaro hamkorlik",
        greenhouse: "Issiqxona",
        agriculture: "Qishloq xo'jaligi",
      },
      vodiy: {
        title: "Vodiy loyihalari",
        location: "Vodiy",
        size: "7 ta issiqxona",
        description:
          "Vodiy hududida qurilgan 7 ta zamonaviy issiqxona majmuasi. Turli o'lchamlarda va texnologiyalar bilan jihozlangan.",
        year: "2022-2024",
      },
      samarqand: {
        title: "Samarqand loyihalari",
        location: "Samarqand",
        size: "2 ta issiqxona",
        description:
          "Samarqand viloyatida qurilgan 2 ta yirik issiqxona. Prezident tashrifi va tadbirkorlar uchrashuvi uchun mo'ljallangan.",
        year: "2024",
      },
      international: {
        title: "Xalqaro loyihalar",
        location: "Xalqaro",
        size: "5 ta issiqxona",
        description:
          "Xalqaro mijozlar uchun qurilgan 5 ta issiqxona. Yevropa standartlariga mos zamonaviy yechimlar.",
        year: "2023-2024",
      },
      agriculture: {
        title: "Qishloq xo'jaligi loyihalari",
        location: "Qishloq xo'jaligi",
        size: "3 ta issiqxona",
        description:
          "Qishloq xo'jaligini rivojlantirish maqsadida qurilgan 3 ta issiqxona. Zamonaviy sug'orish va iqlimlashtirish tizimlari.",
        year: "2024",
      },
      viewProject: "Batafsil",
      viewGallery: "Galereyani ko'rish",
      close: "Yopish",
    },
    team: {
      title: "Bizning jamoa",
      subtitle: "Kuchli va tajribali mutaxassislar",
      ourTeam: "Bizning jamoa",
      experience: "Tajriba",
      achievements: "Yutuqlar",
      education: "Ta'lim",
      skills: "Ko'nikmalar",
      contact: "Aloqa",
      members: {
        rustamjon: {
          name: "Rustamjon Rahmonov",
          position: "Asoschisi va bosh direktori",
          bio: "O'zbek innovatori va agrar tadbirkor. 2017 yildan beri Markaziy Osiyodagi minglab fermerlar va agrar tadbirkorlarga ma'lumot, ishonch va natijalar keltirmoqda.",
        },
        azizbek: {
          name: "Azizbek Karimov",
          position: "Texnik direktor",
          bio: "Issiqxona qurilishi va texnologiyalari bo'yicha mutaxassis. 10+ yillik tajriba bilan zamonaviy agrar texnologiyalarni joriy etadi.",
        },
        abdulloh: {
          name: "Abdurasulov Abdulloh Sheraliyevich",
          position: "Sotuv bo'limi boshlig'i",
          bio: "6+ yillik tajribaga ega sotuv mutaxassisi. ROODELL'da sotuv hajmini 2 mlrd dan 13 mlrd so'mga oshirdi va 10 kishilik professional jamoa tuzdi.",
        },
        alisher: {
          name: "Majidov Alisher",
          position: "Marketing mutaxassisi",
          bio: "10+ yillik tajribaga ega marketing mutaxassisi. 16 ta muvaffaqiyatli loyihani amalga oshirdi. Zamonaviy marketing strategiyalari va brend rivojlantirish bo'yicha chuqur bilimga ega.",
        },
        gulbaxor: {
          name: "Gulbaxor Karaboyeva",
          position: "Moliya direktori",
          bio: "Moliya va boshqaruv bo'yicha tajribali mutaxassis. Moliyaviy strategiyalar ishlab chiqish va byudjetni boshqarish bo'yicha keng tajribaga ega.",
        },
        dilshod: {
          name: "Dilshod Jo'rayev",
          position: "Loyiha menejeri",
          bio: "Yirik loyihalarni boshqarish va nazorat qilish bo'yicha mutaxassis. Muvaffaqiyatli loyihalarni o'z vaqtida amalga oshirishni ta'minlaydi.",
        },
      },
    },
    greenhouse: {
      title: "Issiqxona turlari",
      subtitle: "Har bir ekin uchun optimal yechim",
      description:
        "Turli xil issiqxona turlari bilan tanishing va siz uchun to'g'ri tanlov qiling",
      glass: {
        title: "Shisha issiqxona",
        description:
          "Yorug'likni yaxshi o'tkazadi, mustahkam lekin qurilish xarajati yuqori.",
        features: [
          "Maksimal yorug'lik",
          "Uzoq muddatli",
          "Yuqori samaradorlik",
        ],
        complexity: "Yuqori",
        durability: "20+ yil",
        cost: "Yuqori",
        maintenance: "Oson",
      },
      polycarbonate: {
        title: "Polikarbonat issiqxona",
        description: "Yengil, arzon va samaradorli. Ko'p yillar xizmat qiladi.",
        features: ["Yengil material", "Yaxshi izolyatsiya", "Tez o'rnatish"],
        complexity: "O'rtacha",
        durability: "10-15 yil",
        cost: "O'rtacha",
        maintenance: "Oson",
      },
      film: {
        title: "Plyonka issiqxona",
        description:
          "Soddadir, arzon va tez o'rnatiladi. Uzoq muddatga chidamaydi.",
        features: ["Arzon narx", "Tez o'rnatish", "Portativ"],
        complexity: "Past",
        durability: "5-8 yil",
        cost: "Past",
        maintenance: "Oson",
      },
      mini: {
        title: "Mini issiqxona",
        description:
          "Kichik hajmli, arzon va uy uchun ideal. Yangi boshlanuvchilar uchun.",
        features: ["Kichik hajm", "Uy uchun ideal", "Oson boshqarish"],
        complexity: "Past",
        durability: "3-5 yil",
        cost: "Past",
        maintenance: "Juda oson",
      },
      oddiy: {
        title: "Oddiy issiqxona",
        description:
          "Oddiy shaklda, arzon va ishonchasi oson. Kichik dehqonlar uchun.",
        features: ["Oddiy shakl", "Ishonchasi oson", "Ko'p material"],
        complexity: "Past",
        durability: "3-7 yil",
        cost: "Past",
        maintenance: "Oson",
      },
      gektar: {
        title: "Gektar issiqxona",
        description:
          "Katta maydonlar uchun, mustahkam konstruktsiya. Yuqori hosildorlik.",
        features: [
          "Katta maydon",
          "Mustahkam konstruktsiya",
          "Yuqori hosildorlik",
        ],
        complexity: "Yuqori",
        durability: "15-20 yil",
        cost: "Yuqori",
        maintenance: "Murakkab",
      },
      polikarbanat: {
        title: "Polikarbonat issiqxona",
        description:
          "Kengaytirilgan polikarbonat, yuqori izolyatsiya va mustahkamlik. Yirik loyihalar uchun.",
        features: [
          "Kengaytirilgan polikarbonat",
          "Yuqori izolyatsiya",
          "Katta maydonlar uchun",
        ],
        complexity: "Yuqori",
        durability: "15-20 yil",
        cost: "Yuqori",
        maintenance: "O'rtacha",
      },
      vertical: {
        title: "Vertikal issiqxona",
        description:
          "Bo'sh joyni tejaydi, shahar sharoitida ideal, yangi texnologiya.",
        features: [
          "Bo'sh joy tejash",
          "Shahar uchun ideal",
          "Yangi texnologiya",
        ],
        complexity: "Yuqori",
        durability: "10-15 yil",
        cost: "Yuqori",
        maintenance: "Murakkab",
      },
      comparison: {
        title: "Qiyosiy jadval",
        subtitle: "Issiqxona turlarini solishtiring",
        material: "Material",
        light: "Yorug'lik o'tkazuvchanligi",
        durability: "Chidamlilik",
        cost: "Xarajat",
        maintenance: "Xizmat ko'rsatish",
        serviceLife: "Xizmat muddati",
      },
      guide: {
        title: "To'g'ri Issiqxonini Qanday Tanlash?",
        beginners: "Boshlanuvchilar uchun",
        beginnersDesc:
          "Oddiy yoki Tunnel issiqxona - arzon va oson boshqariladi",
        professionals: "Professionallar uchun",
        professionalsDesc:
          "Polikarbonat yoki Shisha - uzoq muddatli va samarali",
        business: "Biznes uchun",
        businessDesc:
          "Sanoat, Gidroponik yoki Vertikal - maksimal samaradorlik",
        consult: "Mutaxassis bilan maslahatlashish",
      },
    },
    technology: {
      title: "Texnologiya",
      subtitle: "Zamonaviy jihozlar va tizimlar",
      description: "Eng ilg'or agro-texnologiyalar bilan ta'minlaymiz",
      heating: {
        title: "Isitish tizimi",
        description:
          "Zamonaviy isitish tizimlari orqali optimal haroratni ta'minlash va energiya tejash.",
      },
      ventilation: {
        title: "Ventilyatsiya va sovutish",
        description:
          "Avtomatlashtirilgan ventilyatsiya va sovutish tizimlari yordamida iqlimni nazorat qilish.",
      },
      shelving: {
        title: "Stelaj tizimi",
        description:
          "Vertikal stelajlar orqali joydan samarali foydalanish va hosildorlikni oshirish.",
      },
      led: {
        title: "LED grow lights",
        description:
          "Energiya tejamkor LED yoritish tizimlari orqali yil davomida hosil olish.",
      },
      irrigation: {
        title: "Sug'orish tizimi",
        description:
          "Tomchilatib sug'orish va gidroponika tizimlari yordamida suvni 90% gacha tejash.",
      },
      automation: {
        title: "Avtomatlashtirish",
        description:
          "IoT sensorlar va AI algoritmlari yordamida iqlimni avtomatik boshqarish.",
      },
    },
    contact: {
      title: "Aloqa",
      subtitle: "Biz bilan bog'laning",
      formTitle: "Xabar yuborish",
      name: "Ism",
      namePlaceholder: "Ismingizni kiriting",
      phone: "Telefon",
      phonePlaceholder: "+998 XX XXX XX XX",
      email: "Email",
      emailPlaceholder: "email@example.com",
      service: "Xizmat turi",
      servicePlaceholder: "Xizmatni tanlang",
      message: "Xabar",
      messagePlaceholder: "Xabaringizni yozing...",
      send: "Yuborish",
      sending: "Yuborilmoqda...",
      success: "Xabar yuborildi!",
      successMessage: "Tez orada siz bilan bog'lanamiz",
      newMessage: "Yangi xabar",
      infoTitle: "Aloqa ma'lumotlari",
      workingHours: "Ish vaqti",
      workingHoursDesc: "Biz bilan bog'laning",
      monday: "Dushanba",
      friday: "Juma",
      saturday: "Shanba",
      sunday: "Yakshanba",
      closed: "Dam olish kuni",
      socialMedia: "Ijtimoiy tarmoqlar",
      followUs: "Ijtimoiy tarmoqlarda bizga qo'shiling",
      location: "Manzil",
      getDirections: "Yo'nalishni olish",
      copyAddress: "Manzilni nusxalash",
      services: {
        turnkey: "Turnkey issiqxona qurish",
        engineering: "Agro-injiniring",
        equipment: "Jihozlar",
        consulting: "Agro-konsalting",
        investment: "Investitsiya",
      },
    },
  },

  ru: {
    nav: {
      home: "Главная",
      greenhouse: "Типы теплиц",
      projects: "Проекты",
      team: "Команда",
      contact: "Контакты",
      language: "Выберите язык",
    },
    common: {
      readMore: "Подробнее",
      contact: "Контакты",
      email: "Email",
      phone: "Телефон",
      address: "Адрес",
      year: "Год",
      location: "Местоположение",
      size: "Площадь",
      category: "Категория",
      all: "Все",
    },
    hero: {
      title: "Современные тепличные решения",
      subtitle: "Ведущая агроинжиниринговая компания Узбекистана",
      description:
        "Мы внедряем самые современные тепличные технологии и развиваем сельское хозяйство",
      cta: "Связаться",
    },
    about: {
      title: "О нас",
      subtitle: "15+ лет опыта",
      description:
        "UZ-GROW - ведущая компания в сфере сельского хозяйства в Узбекистане",
      experience: "Опыт",
      projects: "Проекты",
      clients: "Клиенты",
      countries: "Страны",
      values: ["Качество", "Инновации", "Доверие", "Долгосрочное партнерство"],
    },
    services: {
      title: "Услуги",
      subtitle: "Полный цикл услуг",
      description:
        "От проектирования до полной реализации - сотрудничайте с нами и достигайте результатов",
      engineering: "Инжиниринг",
      engineeringDesc: "От проектирования до полной реализации",
      engineeringFullDesc:
        "Мы строим теплицы по полному циклу. Результат: энергосберегающая, высокопроизводительная современная теплица",
      engineeringFeatures: [
        "Металлическая конструкция",
        "Покрытие из поликарбоната или стекла",
        "Капельное орошение",
        "Автоматизированное управление",
      ],
      equipment: "Оборудование",
      equipmentDesc: "Современная автоматизация и технологии",
      equipmentFullDesc:
        "Мы предоставляем все необходимое оборудование и системы для теплиц. Максимальная эффективность и надежность",
      equipmentFeatures: [
        "Система контроля климата",
        "Капельное орошение",
        "LED grow lights",
        "Система удобрения и полива",
      ],
      consulting: "Консалтинг",
      consultingDesc: "Профессиональные консультации и проектирование",
      consultingFullDesc:
        "Наши опытные специалисты предложат вам лучшие решения. От проектирования до полной реализации",
      consultingFeatures: [
        "Обследование и анализ",
        "3D моделирование",
        "Техническая документация",
        "Экспортные направления",
        "Создание бизнес-модели",
      ],
    },
    projects: {
      title: "Проекты",
      subtitle: "Успешные тепличные проекты",
      description: "Президентские визиты и сельскохозяйственные проекты",
      categories: {
        all: "Все",
        presidential: "Президентский визит",
        international: "Международное сотрудничество",
        greenhouse: "Теплица",
        agriculture: "Сельское хозяйство",
      },
      vodiy: {
        title: "Проекты Водий",
        location: "Водий",
        size: "7 теплиц",
        description:
          "Комплекс из 7 современных теплиц, построенных в регионе Водий. Оснащены различными размерами и технологиями.",
        year: "2022-2024",
      },
      samarqand: {
        title: "Проекты Самарканда",
        location: "Самарканд",
        size: "2 теплицы",
        description:
          "2 крупные теплицы, построенные в Самаркандской области. Предназначены для президентских визитов и встреч с предпринимателями.",
        year: "2024",
      },
      international: {
        title: "Международные проекты",
        location: "Международный",
        size: "5 теплиц",
        description:
          "5 теплиц, построенных для международных клиентов. Современные решения по европейским стандартам.",
        year: "2023-2024",
      },
      agriculture: {
        title: "Сельскохозяйственные проекты",
        location: "Сельское хозяйство",
        size: "3 теплицы",
        description:
          "3 теплицы, построенные для развития сельского хозяйства. Современные системы орошения и климат-контроля.",
        year: "2024",
      },
      viewProject: "Подробнее",
      viewGallery: "Смотреть галерею",
      close: "Закрыть",
    },
    team: {
      title: "Наша команда",
      subtitle: "Сильные и опытные специалисты",
      ourTeam: "Наша команда",
      experience: "Опыт",
      achievements: "Достижения",
      education: "Образование",
      skills: "Навыки",
      contact: "Контакты",
      members: {
        rustamjon: {
          name: "Рустамжон Рахмонов",
          position: "Основатель и генеральный директор",
          bio: "Узбекский инноватор и аграрный предприниматель. С 2017 года приносит информацию, доверие и результаты для тысяч фермеров и аграрных предпринимателей в Центральной Азии.",
        },
        azizbek: {
          name: "Азизбек Каримов",
          position: "Технический директор",
          bio: "Специалист по строительству теплиц и технологиям. С 10+ летним опытом внедряет современные аграрные технологии.",
        },
        abdulloh: {
          name: "Абдурасулов Абдуллох Шералиевич",
          position: "Руководитель отдела продаж",
          bio: "Специалист по продажам с 6+ летним опытом. В ROODELL увеличил объем продаж с 2 млрд. до 13 млрд. сум и построил команду из 10 профессионалов.",
        },
        alisher: {
          name: "Маджидов Алишер",
          position: "Специалист по маркетингу",
          bio: "Специалист по маркетингу с 10+ летним опытом. Реализовал 16 успешных проектов. Глубокие знания в современных маркетинговых стратегиях и развитии брендов.",
        },
        gulbaxor: {
          name: "Гульбахор Карабоева",
          position: "Финансовый директор",
          bio: "Опытный специалист по финансам и управлению. Широкий опыт в разработке финансовых стратегий и управлении бюджетом.",
        },
        dilshod: {
          name: "Дильшод Джураев",
          position: "Менеджер проектов",
          bio: "Специалист по управлению и контролю крупных проектов. Обеспечивает своевременную реализацию успешных проектов.",
        },
      },
    },
    greenhouse: {
      title: "Типы теплиц",
      subtitle: "Оптимальное решение для каждой культуры",
      description:
        "Ознакомьтесь с различными типами теплиц и выберите правильное решение для себя",
      glass: {
        title: "Стеклянная теплица",
        description:
          "Хорошо пропускает свет, прочная, но высокая стоимость строительства.",
        features: [
          "Максимальное освещение",
          "Долговечная",
          "Высокая эффективность",
        ],
        complexity: "Высокая",
        durability: "20+ лет",
        cost: "Высокая",
        maintenance: "Простое",
      },
      polycarbonate: {
        title: "Поликарбонатная теплица",
        description:
          "Легкая, доступная, хорошая изоляция, но не такая прочная как стекло.",
        features: ["Легкая", "Доступная", "Хорошая изоляция"],
        complexity: "Средняя",
        durability: "10-15 лет",
        cost: "Средняя",
        maintenance: "Простое",
      },
      tunnel: {
        title: "Туннельная теплица",
        description:
          "Простая, доступная, быстрая установка, но не долговечная.",
        features: ["Простая", "Доступная", "Быстрая установка"],
        complexity: "Низкая",
        durability: "5-8 лет",
        cost: "Низкая",
        maintenance: "Простое",
      },
      industrial: {
        title: "Промышленная теплица",
        description:
          "Для больших площадей, автоматизированная, высокая эффективность.",
        features: [
          "Большие площади",
          "Автоматизированная",
          "Высокая эффективность",
        ],
        complexity: "Высокая",
        durability: "25+ лет",
        cost: "Высокая",
        maintenance: "Сложное",
      },
      hydroponic: {
        title: "Гидропонная теплица",
        description:
          "Беспочвенное выращивание, высокая урожайность, современная технология.",
        features: [
          "Беспочвенное выращивание",
          "Высокая урожайность",
          "Современная технология",
        ],
        complexity: "Высокая",
        durability: "15-20 лет",
        cost: "Высокая",
        maintenance: "Сложное",
      },
      vertical: {
        title: "Вертикальная теплица",
        description:
          "Экономит пространство, идеальна для городских условий, новая технология.",
        features: [
          "Экономия пространства",
          "Идеальна для города",
          "Новая технология",
        ],
        complexity: "Высокая",
        durability: "10-15 лет",
        cost: "Высокая",
        maintenance: "Сложное",
      },
      film: {
        title: "Пленочная теплица",
        description: "Простая, доступная, быстрая установка, но недолговечная.",
        features: ["Дешевизна", "Быстрая установка", "Переносная"],
        complexity: "Низкая",
        durability: "5-8 лет",
        cost: "Низкая",
        maintenance: "Легко",
      },
      mini: {
        title: "Мини-теплица",
        description:
          "Маленькая, доступная, идеальна для дома. Отлично для начинающих.",
        features: ["Маленький размер", "Идеальна для дома", "Простая сборка"],
        complexity: "Низкая",
        durability: "3-5 лет",
        cost: "Низкая",
        maintenance: "Очень легко",
      },
      oddiy: {
        title: "Обычная теплица",
        description:
          "Обычная форма, доступная, простая в обслуживании. Отлично для небольших участков.",
        features: ["Обычная форма", "Простое обслуживание", "Много материалов"],
        complexity: "Низкая",
        durability: "3-7 лет",
        cost: "Низкая",
        maintenance: "Легко",
      },
      gektar: {
        title: "Гектарная теплица",
        description:
          "Для больших площадей, надежная конструкция, высокая урожайность.",
        features: [
          "Большая площадь",
          "Надежная конструкция",
          "Высокая урожайность",
        ],
        complexity: "Высокая",
        durability: "15-20 лет",
        cost: "Высокая",
        maintenance: "Сложно",
      },
      polikarbanat: {
        title: "Поликарбонатная теплица",
        description:
          "Усовершенствованный поликарбонат, превосходная теплоизоляция, отличные характеристики. Идеально для круглогодичного выращивания.",
        features: [
          "Усовершенствованный поликарбонат",
          "Превосходная теплоизоляция",
          "Отличные характеристики",
        ],
        complexity: "Высокая",
        durability: "15-20 лет",
        cost: "Высокая",
        maintenance: "Умеренно",
      },
      comparison: {
        title: "Сравнительная таблица",
        subtitle: "Сравните типы теплиц",
        material: "Материал",
        light: "Светопропускаемость",
        durability: "Прочность",
        cost: "Стоимость",
        maintenance: "Обслуживание",
        serviceLife: "Срок службы",
      },
      guide: {
        title: "Как выбрать правильную теплицу?",
        beginners: "Для начинающих",
        beginnersDesc:
          "Простая или туннельная теплица - доступная и простая в управлении",
        professionals: "Для профессионалов",
        professionalsDesc:
          "Поликарбонат или стекло - долговечные и эффективные",
        business: "Для бизнеса",
        businessDesc:
          "Промышленная, гидропонная или вертикальная - максимальная эффективность",
        consult: "Консультация со специалистом",
      },
    },
    contact: {
      title: "Контакты",
      subtitle: "Свяжитесь с нами",
      formTitle: "Отправить сообщение",
      name: "Имя",
      namePlaceholder: "Введите ваше имя",
      phone: "Телефон",
      phonePlaceholder: "+998 XX XXX XX XX",
      email: "Email",
      emailPlaceholder: "email@example.com",
      service: "Тип услуги",
      servicePlaceholder: "Выберите услугу",
      message: "Сообщение",
      messagePlaceholder: "Напишите ваше сообщение...",
      send: "Отправить",
      sending: "Отправка...",
      success: "Сообщение отправлено!",
      successMessage: "Мы свяжемся с вами в ближайшее время",
      newMessage: "Новое сообщение",
      infoTitle: "Контактная информация",
      workingHours: "Время работы",
      workingHoursDesc: "Свяжитесь с нами",
      monday: "Понедельник",
      friday: "Пятница",
      saturday: "Суббота",
      sunday: "Воскресенье",
      closed: "Выходной",
      socialMedia: "Социальные сети",
      followUs: "Присоединяйтесь к нам в социальных сетях",
      location: "Адрес",
      getDirections: "Построить маршрут",
      copyAddress: "Скопировать адрес",
      services: {
        turnkey: "Строительство теплиц под ключ",
        engineering: "Агроинжиниринг",
        equipment: "Оборудование",
        consulting: "Агроконсалтинг",
        investment: "Инвестиции",
      },
    },
    technology: {
      title: "Technology",
      subtitle: "Modern equipment and systems",
      description: "We provide the most advanced agro-technologies",
      heating: {
        title: "Heating System",
        description:
          "Modern heating systems to ensure optimal temperature and energy savings.",
      },
      ventilation: {
        title: "Ventilation and Cooling",
        description:
          "Automated ventilation and cooling systems for climate control.",
      },
      shelving: {
        title: "Shelving System",
        description:
          "Vertical shelving for efficient space utilization and increased yields.",
      },
      led: {
        title: "LED grow lights",
        description:
          "Energy-efficient LED lighting systems for year-round harvesting.",
      },
      irrigation: {
        title: "Irrigation System",
        description:
          "Drip irrigation and hydroponic systems to save up to 90% water.",
      },
      automation: {
        title: "Automation",
        description:
          "IoT sensors and AI algorithms for automatic climate control.",
      },
    },
  },

  en: {
    nav: {
      home: "Home",
      greenhouse: "Greenhouse Types",
      projects: "Projects",
      team: "Team",
      contact: "Contact",
      language: "Choose Language",
    },
    common: {
      readMore: "Read More",
      contact: "Contact",
      email: "Email",
      phone: "Phone",
      address: "Address",
      year: "Year",
      location: "Location",
      size: "Size",
      category: "Category",
      all: "All",
    },
    hero: {
      title: "Modern Greenhouse Solutions",
      subtitle: "Leading agro-engineering company in Uzbekistan",
      description:
        "We implement the most modern greenhouse technologies and develop agriculture",
      cta: "Contact Us",
      downloadCatalog: "Download Catalog",
      slides: {
        slide1: {
          quote: "We implement each project with an individual approach and ensure customer satisfaction.",
          author: "UZ-GROW Team",
          role: "Agro-engineering Specialists",
          cta: "Turnkey Greenhouses",
        },
        slide2: {
          quote: "Achieve high yields with modern technologies and an experienced team of specialists.",
          author: "Technical Department",
          role: "Design and Construction",
          cta: "Plastic Greenhouses",
        },
        slide3: {
          quote: "Reduce costs and increase revenue with energy-efficient and automated systems.",
          author: "Innovation Center",
          role: "Modern Solutions",
          cta: "Glass Greenhouses",
        },
        slide4: {
          quote: "From design to full implementation - partner with us and achieve results.",
          author: "Services Department",
          role: "Integrated Solutions",
          cta: "Equipment and Systems",
        },
      },
    },
    about: {
      title: "About Us",
      subtitle: "15+ years of experience",
      description:
        "UZ-GROW - leading company in the agricultural sector in Uzbekistan",
      experience: "Experience",
      projects: "Projects",
      clients: "Clients",
      countries: "Countries",
      values: ["Quality", "Innovation", "Trust", "Long-term partnership"],
    },
    services: {
      title: "Services",
      subtitle: "Full cycle services",
      description:
        "From design to full implementation - partner with us and achieve results",
      engineering: "Engineering",
      engineeringDesc: "From design to full implementation",
      engineeringFullDesc:
        "We build greenhouses on a full cycle basis. Result: energy-efficient, high-yield modern greenhouse",
      engineeringFeatures: [
        "Metal construction",
        "Polycarbonate or glass covering",
        "Drip irrigation",
        "Automated control",
      ],
      equipment: "Equipment",
      equipmentDesc: "Modern automation and technologies",
      equipmentFullDesc:
        "We provide all necessary equipment and systems for greenhouses. Maximum efficiency and reliability",
      equipmentFeatures: [
        "Climate control system",
        "Drip irrigation",
        "LED grow lights",
        "Fertilization and irrigation system",
      ],
      consulting: "Consulting",
      consultingDesc: "Professional consulting and design",
      consultingFullDesc:
        "Our experienced specialists offer you the best solutions. From design to full implementation.",
      consultingFeatures: [
        "Inspection and analysis",
        "3D modeling",
        "Technical documentation",
        "Export directions",
        "Business model creation",
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Successful greenhouse projects",
      description: "Presidential visits and agricultural projects",
      categories: {
        all: "All",
        presidential: "Presidential Visit",
        international: "International Cooperation",
        greenhouse: "Greenhouse",
        agriculture: "Agriculture",
      },
      vodiy: {
        title: "Vodiy Projects",
        location: "Vodiy",
        size: "7 greenhouses",
        description:
          "A complex of 7 modern greenhouses built in the Vodiy region. Equipped with various sizes and technologies.",
        year: "2022-2024",
      },
      samarqand: {
        title: "Samarkand Projects",
        location: "Samarkand",
        size: "2 greenhouses",
        description:
          "2 large greenhouses built in the Samarkand region. Designed for presidential visits and meetings with entrepreneurs.",
        year: "2024",
      },
      international: {
        title: "International Projects",
        location: "International",
        size: "5 greenhouses",
        description:
          "5 greenhouses built for international clients. Modern solutions according to European standards.",
        year: "2023-2024",
      },
      agriculture: {
        title: "Agriculture Projects",
        location: "Agriculture",
        size: "3 greenhouses",
        description:
          "3 greenhouses built for agricultural development. Modern irrigation and climate control systems.",
        year: "2024",
      },
      viewProject: "View Details",
      viewGallery: "View Gallery",
      close: "Close",
    },
    team: {
      title: "Our Team",
      subtitle: "Strong and experienced specialists",
      ourTeam: "Our Team",
      experience: "Experience",
      achievements: "Achievements",
      education: "Education",
      skills: "Skills",
      contact: "Contact",
      members: {
        rustamjon: {
          name: "Rustamjon Rahmonov",
          position: "Founder and CEO",
          bio: "Uzbek innovator and agricultural entrepreneur. Since 2017, he has been bringing information, trust and results to thousands of farmers and agricultural entrepreneurs in Central Asia.",
        },
        azizbek: {
          name: "Azizbek Karimov",
          position: "Technical Director",
          bio: "Specialist in greenhouse construction and technologies. With 10+ years of experience, he implements modern agricultural technologies.",
        },
        abdulloh: {
          name: "Abdurasulov Abdulloh Sheraliyevich",
          position: "Head of Sales Department",
          bio: "Sales specialist with 6+ years of experience. At ROODELL, he increased sales volume from 2 billion to 13 billion sum and built a 10-person professional team.",
        },
        alisher: {
          name: "Majidov Alisher",
          position: "Marketing Specialist",
          bio: "Marketing specialist with 10+ years of experience. Implemented 16 successful projects. Deep knowledge in modern marketing strategies and brand development.",
        },
        gulbaxor: {
          name: "Gulbaxor Karaboyeva",
          position: "Financial Director",
          bio: "Experienced specialist in finance and management. Extensive experience in developing financial strategies and budget management.",
        },
        dilshod: {
          name: "Dilshod Jo'rayev",
          position: "Project Manager",
          bio: "Specialist in management and control of large-scale projects. Ensures timely implementation of successful projects.",
        },
      },
    },
    greenhouse: {
      title: "Greenhouse Types",
      subtitle: "Optimal solution for every crop",
      description:
        "Explore different greenhouse types and choose the right solution for you",
      glass: {
        title: "Glass Greenhouse",
        description:
          "Good light transmission, durable, but high construction cost.",
        features: ["Maximum light", "Long-lasting", "High efficiency"],
        complexity: "High",
        durability: "20+ years",
        cost: "High",
        maintenance: "Easy",
      },
      polycarbonate: {
        title: "Polycarbonate Greenhouse",
        description:
          "Lightweight, affordable, good insulation, but not as durable as glass.",
        features: ["Lightweight", "Affordable", "Good insulation"],
        complexity: "Medium",
        durability: "10-15 years",
        cost: "Medium",
        maintenance: "Easy",
      },
      tunnel: {
        title: "Tunnel Greenhouse",
        description:
          "Simple, affordable, quick installation, but not long-lasting.",
        features: ["Simple", "Affordable", "Quick installation"],
        complexity: "Low",
        durability: "5-8 years",
        cost: "Low",
        maintenance: "Easy",
      },
      film: {
        title: "Film Greenhouse",
        description: "Simple, affordable, quick setup, but not very durable.",
        features: ["Affordable", "Quick setup", "Portable"],
        complexity: "Low",
        durability: "5-8 years",
        cost: "Low",
        maintenance: "Easy",
      },
      mini: {
        title: "Mini Greenhouse",
        description:
          "Small size, affordable, ideal for home. Perfect for beginners.",
        features: ["Small size", "Ideal for home", "Easy assembly"],
        complexity: "Low",
        durability: "3-5 years",
        cost: "Low",
        maintenance: "Very easy",
      },
      oddiy: {
        title: "Standard Greenhouse",
        description:
          "Standard shape, affordable, easy maintenance. Perfect for small farms.",
        features: ["Standard shape", "Easy maintenance", "Many materials"],
        complexity: "Low",
        durability: "3-7 years",
        cost: "Low",
        maintenance: "Easy",
      },
      gektar: {
        title: "Hectare Greenhouse",
        description: "For large areas, reliable construction, high yield.",
        features: ["Large area", "Reliable construction", "High yield"],
        complexity: "High",
        durability: "15-20 years",
        cost: "High",
        maintenance: "Complex",
      },
      polikarbanat: {
        title: "Polycarbonate Greenhouse",
        description:
          "Advanced polycarbonate, excellent insulation, great features. Ideal for year-round cultivation.",
        features: [
          "Advanced polycarbonate",
          "Excellent insulation",
          "Great features",
        ],
        complexity: "High",
        durability: "15-20 years",
        cost: "High",
        maintenance: "Moderate",
      },
      industrial: {
        title: "Industrial Greenhouse",
        description: "For large areas, automated, high efficiency.",
        features: ["Large areas", "Automated", "High efficiency"],
        complexity: "High",
        durability: "25+ years",
        cost: "High",
        maintenance: "Complex",
      },
      hydroponic: {
        title: "Hydroponic Greenhouse",
        description: "Soilless cultivation, high yield, modern technology.",
        features: ["Soilless cultivation", "High yield", "Modern technology"],
        complexity: "High",
        durability: "15-20 years",
        cost: "High",
        maintenance: "Complex",
      },
      vertical: {
        title: "Vertical Greenhouse",
        description: "Saves space, ideal for urban conditions, new technology.",
        features: ["Space saving", "Ideal for urban", "New technology"],
        complexity: "High",
        durability: "10-15 years",
        cost: "High",
        maintenance: "Complex",
      },
      comparison: {
        title: "Comparison Table",
        subtitle: "Compare greenhouse types",
        material: "Material",
        light: "Light transmission",
        durability: "Durability",
        cost: "Cost",
        maintenance: "Maintenance",
        serviceLife: "Service life",
      },
      guide: {
        title: "How to Choose the Right Greenhouse?",
        beginners: "For Beginners",
        beginnersDesc:
          "Simple or Tunnel greenhouse - affordable and easy to manage",
        professionals: "For Professionals",
        professionalsDesc: "Polycarbonate or Glass - durable and efficient",
        business: "For Business",
        businessDesc: "Industrial, Hydroponic or Vertical - maximum efficiency",
        consult: "Consult with Specialist",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Get in touch with us",
      formTitle: "Send Message",
      name: "Name",
      namePlaceholder: "Enter your name",
      phone: "Phone",
      phonePlaceholder: "+998 XX XXX XX XX",
      email: "Email",
      emailPlaceholder: "email@example.com",
      service: "Service Type",
      servicePlaceholder: "Select a service",
      message: "Message",
      messagePlaceholder: "Write your message...",
      send: "Send",
      sending: "Sending...",
      success: "Message sent!",
      successMessage: "We'll contact you soon",
      newMessage: "New Message",
      infoTitle: "Contact Information",
      workingHours: "Working Hours",
      workingHoursDesc: "Get in touch with us",
      monday: "Monday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
      socialMedia: "Social Media",
      followUs: "Follow us on social media",
      location: "Location",
      getDirections: "Get Directions",
      copyAddress: "Copy Address",
      services: {
        turnkey: "Turnkey Greenhouse Construction",
        engineering: "Agro-engineering",
        equipment: "Equipment",
        consulting: "Agro-consulting",
        investment: "Investment",
      },
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>("uz");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (
      savedLang &&
      (savedLang === "uz" || savedLang === "ru" || savedLang === "en")
    ) {
      setCurrentLang(savedLang as Language);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[currentLang];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
  en: {
    hero: {
      title: "Modern Greenhouse Solutions",
      subtitle: "Leading agro-engineering company in Uzbekistan",
      description: "We implement the most modern greenhouse technologies and develop agriculture",
      cta: "Contact Us",
      downloadCatalog: "Download Catalog",
      slides: {
        slide1: {
          quote: "We implement each project with an individual approach and ensure customer satisfaction.",
          author: "UZ-GROW Team",
          role: "Agro-engineering Specialists",
          cta: "Turnkey Greenhouses",
        },
        slide2: {
          quote: "Achieve high yields with modern technologies and an experienced team of specialists.",
          author: "Technical Department",
          role: "Design and Construction",
          cta: "Plastic Greenhouses",
        },
        slide3: {
          quote: "Reduce costs and increase revenue with energy-efficient and automated systems.",
          author: "Innovation Center",
          role: "Modern Solutions",
          cta: "Glass Greenhouses",
        },
        slide4: {
          quote: "From design to full implementation - partner with us and achieve results.",
          author: "Services Department",
          role: "Integrated Solutions",
          cta: "Equipment and Systems",
        },
      },
    },
  },
