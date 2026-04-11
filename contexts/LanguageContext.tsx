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
      title: "Zamonavoy Issiqxona Yechimlari",
      subtitle: "O'zbekistonning yetakchi agro-injiniring kompaniyasi",
      description:
        "Biz eng zamonavoy issiqxona texnologiyalarini joriy etamiz va qishloq xo'jaligini rivojlantiramiz",
      cta: "Bog'lanish",
      downloadCatalog: "Katalog yuklab olish",
      tagline: "4+ yil tajriba - 100+ muvaffaqiyatli loyiha",
      stats: {
        experience: "Yil tajriba",
        projects: "Muvaffaqiyatli loyiha",
        specialists: "Mutaxassislar",
        regions: "Viloyatda xizmat",
      },
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
            "Zamonavoy texnologiyalar va tajribali mutaxassislar jamoasi bilan yuqori hosildorlikka erishishingizni kafolatlaymiz.",
          author: "Texnik bo'lim",
          role: "Loyihalash va qurish",
          cta: "Plastik issiqxonalar",
        },
        slide3: {
          quote:
            "Energiya tejamkor va avtomatlashtirilgan tizimlar orqali xarajatlarni kamaytirib, daromadni oshiring.",
          author: "Innovatsiya markazi",
          role: "Zamonavoy yechimlar",
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
      tagline: "Biz haqimizda",
      headline: "4 yildan ortiq kompaniya 3 ta mamlakatda sizning yoningizda",
      descriptionText:
        "UZ-GROW - zamonavoy issiqxona qurilishi va agro-injiniring sohasida faoliyat yurituvchi kompaniya. Bizning maqsadimiz - O'zbekistonda yuqori samaradorlikka ega, innovatsion va eksportbop issiqxona infratuzilmasini rivojlantirish.",
      aboutUsButton: "Biz haqimizda batafsil",
      videoNotSupported: "Sizning brauzeringiz video qo'llab-quvvatlamaydi.",
      mission: "Missiya",
      missionDesc:
        "Mahalliy va xalqaro standartlarga mos, barqaror va rentabelli issiqxona loyihalarini amalga oshirish orqali mijozlar daromadini oshirish.",
      vision: "Vizyon",
      visionDesc:
        "Markaziy Osiyoda yetakchi agro-injiniring kompaniyaga aylanish va zamonavoy issiqxonalarni eksport qilish.",
      valuesTitle: "Qadriyatlar",
    },
    services: {
      title: "Xizmatlar",
      subtitle: "To'liq aylanma xizmatlar",
      description:
        "Loyihalashdan tortib to'liq ishga tushirishgacha - biz bilan hamkorlik qiling va natijaga erishing",
      engineering: "Injiniring",
      engineeringDesc: "Loyihalashdan boshlab to'liq ishga tushirishgacha",
      engineeringFullDesc:
        "Biz to'liq sikl asosida issiqxona quramiz. Natija: energiya tejamkor, yuqori hosildorlikka ega zamonavoy issiqxona",
      engineeringFeatures: [
        "Metall konstruksiya",
        "Polikarbonat yoki shisha qoplama",
        "Tomchilatib sug'orish",
        "Avtomatlashtirilgan boshqaruv",
      ],
      equipment: "Jihozlar",
      equipmentDesc: "Zamonavoy avtomatlashtirish va texnologiyalar",
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
          "Vodiy hududida qurilgan 7 ta zamonavoy issiqxona majmuasi. Turli o'lchamlarda va texnologiyalar bilan jihozlangan.",
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
          "Xalqaro mijozlar uchun qurilgan 5 ta issiqxona. Yevropa standartlariga mos zamonavoy yechimlar.",
        year: "2023-2024",
      },
      agriculture: {
        title: "Qishloq xo'jaligi loyihalari",
        location: "Qishloq xo'jaligi",
        size: "3 ta issiqxona",
        description:
          "Qishloq xo'jaligini rivojlantirish maqsadida qurilgan 3 ta issiqxona. Zamonavoy sug'orish va iqlimlashtirish tizimlari.",
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
          position: "Asoschi va Bosh Direktor",
          bio: "O'zbekistonlik innovator agrofaol va tadbirkor. 2017-yildan beri Markaziy Osiyo agrosektorida minglab fermerlar va agrobiznes vakillariga ma'lumot, ishonch va natija olib kelmoqda.",
          experience: "4+ yillik",
          achievements: [
            "200,000+ obunachi",
            "100+ muvaffaqiyatli loyiha",
            "Xalqaro hamkorliklar",
          ],
          education: [
            "Qishloq xo'jaligi instituti",
            "Xalqaro biznes menejmenti",
          ],
          skills: ["Agrobiznes", "Innovatsiya", "Loyihalash", "Menejment"],
          email: "uzgrrow@gmail.com",
          phone: "+998 88 507 00 70",
          location: "Toshkent, O'zbekiston",
          linkedin: "#",
          twitter: "#",
          resume: "/RESUME 2025 (3).docx",
        },
        alisher: {
          name: "Alisher Majidov",
          position: "Marketing Direktori",
          bio: "Marketing va brend strategiyalari bo'yicha mutaxassis. Kompaniya imidjini rivojlantirish va mijozlar bazasini kengaytirish uchun mas'ul.",
          experience: "6+ yillik",
          achievements: [
            "20+ marketing kampaniyasi",
            "Brendni rivojlantirish",
            "Mijozlar bazasi 3x o'sishi",
          ],
          education: ["Marketing", "Xalqaro biznes"],
          skills: [
            "Marketing strategiyasi",
            "SMM",
            "Kontent marketing",
            "Analitika",
          ],
          email: "uzgrrow@gmail.com",
          phone: "+998 88 507 00 70",
          location: "Toshkent, O'zbekiston",
          linkedin: "#",
          twitter: "#",
        },
        abdulloh: {
          name: "Abdulloh Sheraliyevich",
          position: "Texnik Direktor",
          bio: "Issiqxona qurilish va texnologiyalar bo'yicha mutaxassis. 10+ yillik tajriba bilan zamonavoy agrotexnologiyalarni joriy etmoqda.",
          experience: "10+ yillik",
          achievements: [
            "50+ issiqxona loyihasi",
            "Texnik innovatsiyalar",
            "Xalqaro sertifikatlar",
          ],
          education: ["Qurilish muhandisligi", "Avtomatlashtirish sistemlari"],
          skills: [
            "Issiqxona qurilish",
            "Avtomatlashtirish",
            "3D modellashtirish",
            "Texnik nazorat",
          ],
          email: "uzgrrow@gmail.com",
          phone: "+998 88 507 00 70",
          location: "Toshkent, O'zbekiston",
          linkedin: "#",
          twitter: "#",
        },
        bobgulbaxor: {
          name: "Gulbaxor Karaboyeva",
          position: "Financial Director",
          bio: "Experienced specialist in finance and management. Extensive experience in developing financial strategies and budget management.",
          experience: "10+ yillik",
          achievements: [
            "Moliyaviy rejalashtirish",
            "Byudjet optimizatsiyasi",
            "Xisobot tayyorlash",
          ],
          education: ["Iqtisodiyot", "Moliya"],
          skills: [
            "Moliyaviy tahlil",
            "Excel",
            "1C:Buхгалтерия",
            "Byudjet rejalashtirish",
          ],
          email: "uzgrrow@gmail.com",
          phone: "+998 88 507 00 70",
          location: "Toshkent, O'zbekiston",
          linkedin: "#",
          twitter: "#",
          resume: "/Rezyume_Karaboyeva_Gulbaxor_YAKUNIY_FINAL-1.docx",
        },
      },
      achievementsLabel: "yutuq",
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
        title: "To'g'ri Issiqxonani Qanday Tanlash?",
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
      subtitle: "Zamonavoy jihozlar va tizimlar",
      description: "Eng ilg'or agro-texnologiyalar bilan ta'minlaymiz",
      heating: {
        title: "Isitish tizimi",
        description:
          "Zamonavoy isitish tizimlari orqali optimal haroratni ta'minlash va energiya tejash.",
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
      address:
        "Toshkent sh., Yangihayot tumani, Fayzli MFY, Rayhon ko'chasi, 107-uy",
      companyPhone: "+998555152223",
      companyPhone2: "+998994352313",
      companyEmail: "uzgrrow@gmail.com",
      website: "https://www.uzgrow.uz/",
      locationUrl:
        "https://yandex.ru/navi?rtext=41.202864,69.235732~41.202625,69.235384&rtt=auto",
      socialLinks: {
        facebook: "https://www.facebook.com/share/1DePjLwX79/",
        instagram:
          "https://www.instagram.com/uz.grow?igsh=MXMwN3lzaW95NTN1YQ==",
        telegram: "http://@Uz_Grow",
        youtube: "https://youtube.com/@rustamjonrakhmonov?si=9-OxlFiY0B875tD9",
        tiktok: "https://www.tiktok.com/@uz.grow",
      },
      services: {
        turnkey: "Turnkey issiqxona qurish",
        engineering: "Agro-injiniring",
        equipment: "Jihozlar",
        consulting: "Agro-konsalting",
        investment: "Investitsiya",
      },
    },
    footer: {
      brandName: "UZ-GROW",
      brandTagline: "",
      brandDescription:
        "O'zbekistonda zamonavoy issiqxona qurish va qurilish xizmatlari. Biz bilan kelajak bugun boshlanadi.",
      contact: "Aloqa",
      services: "Xizmatlar",
      company: "Kompaniya",
      help: "Yordam",
      team: "Jamoa",
      allRightsReserved: "Barcha huquqlar himoyalangan",
      links: {
        services: [
          { label: "Issiqxona turlari", href: "/issiqxona-turlari" },
          { label: "Loyihalar", href: "/loyihalar" },
          { label: "Jihozlar", href: "/jixozlar" },
          { label: "Qurilish", href: "/qurilish" },
        ],
        company: [
          { label: "Biz haqimizda", href: "/haqimizda" },
          { label: "Jamoa", href: "/rahbariyat" },
          { label: "Xalqaro hamkorlik", href: "/xalqaro-hamkorlik" },
          { label: "Media hamkorlik", href: "/media-hamkorlik" },
        ],
        help: [
          { label: "Bog'lanish", href: "/aloqa" },
          { label: "Galereya", href: "/gallery" },
          { label: "Maxfiylik siyosati", href: "/maxfiylik-siyosati" },
          { label: "Foydalanish shartlari", href: "/foydanalish-shartlari" },
        ],
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
      address: "g. Tashkent, Yunusobodskiy rayon, ul. Amir Temur, 123",
      companyPhone: "+998555152223",
      companyPhone2: "+998994352313",
      companyEmail: "uzgrrow@gmail.com",
      website: "https://www.uzgrow.uz/",
      locationUrl:
        "https://yandex.ru/navi?rtext=41.202864,69.235732~41.202625,69.235384&rtt=auto",
      socialLinks: {
        facebook: "https://www.facebook.com/share/1DePjLwX79/",
        instagram:
          "https://www.instagram.com/uz.grow?igsh=MXMwN3lzaW95NTN1YQ==",
        telegram: "http://@Uz_Grow",
        youtube: "https://youtube.com/@rustamjonrakhmonov?si=9-OxlFiY0B875tD9",
        tiktok: "https://www.tiktok.com/@uz.grow",
      },
      services: {
        turnkey: "Строительство теплиц под ключ",
        engineering: "Агроинжиниринг",
        equipment: "Оборудование",
        consulting: "Агроконсалтинг",
        investment: "Инвестиции",
      },
    },
    technology: {
      title: "Технология",
      subtitle: "Современное оборудование и системы",
      description: "Мы предоставляем самые передовые агротехнологии",
      heating: {
        title: "Система отопления",
        description:
          "Современные системы отопления для обеспечения оптимальной температуры и экономии энергии.",
      },
      ventilation: {
        title: "Вентиляция и охлаждение",
        description:
          "Автоматизированные системы вентиляции и охлаждения для контроля климата.",
      },
      shelving: {
        title: "Система стеллажей",
        description:
          "Вертикальные стеллажи для эффективного использования пространства и повышения урожайности.",
      },
      led: {
        title: "LED grow lights",
        description:
          "Энергосберегающие светодиодные системы освещения для круглогодичного сбора урожая.",
      },
      irrigation: {
        title: "Система орошения",
        description:
          "Системы капельного орошения и гидропоники для экономии до 90% воды.",
      },
      automation: {
        title: "Автоматизация",
        description:
          "IoT датчики и алгоритмы AI для автоматического управления климатом.",
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
      tagline: "4+ years experience - 100+ successful projects",
      stats: {
        experience: "Years experience",
        projects: "Successful projects",
        specialists: "Specialists",
        regions: "Service regions",
      },
      slides: {
        slide1: {
          quote:
            "We implement each project with an individual approach and ensure customer satisfaction.",
          author: "UZ-GROW Team",
          role: "Agro-engineering Specialists",
          cta: "Turnkey Greenhouses",
        },
        slide2: {
          quote:
            "Achieve high yields with modern technologies and an experienced team of specialists.",
          author: "Technical Department",
          role: "Design and Construction",
          cta: "Plastic Greenhouses",
        },
        slide3: {
          quote:
            "Reduce costs and increase revenue with energy-efficient and automated systems.",
          author: "Innovation Center",
          role: "Modern Solutions",
          cta: "Glass Greenhouses",
        },
        slide4: {
          quote:
            "From design to full implementation - partner with us and achieve results.",
          author: "Services Department",
          role: "Integrated Solutions",
          cta: "Equipment and Systems",
        },
      },
    },
    about: {
      title: "About Us",
      subtitle: "15+ years experience",
      description: "UZ-GROW - leading company in agriculture in Uzbekistan",
      experience: "Experience",
      projects: "Projects",
      clients: "Clients",
      countries: "Countries",
      values: ["Quality", "Innovation", "Trust", "Long-term partnership"],
      tagline: "About Us",
      headline: "More than 4 years company by your side in 3 countries",
      descriptionText:
        "UZ-GROW - a company engaged in the construction of modern greenhouses and agro-engineering. Our goal is to develop greenhouse infrastructure in Uzbekistan with high efficiency, innovation and export potential.",
      aboutUsButton: "Learn more about us",
      videoNotSupported: "Your browser does not support video.",
      mission: "Mission",
      missionDesc:
        "Increase customer income through the implementation of sustainable and profitable greenhouse projects that meet local and international standards.",
      vision: "Vision",
      visionDesc:
        "Become the leading agro-engineering company in Central Asia and export modern greenhouses.",
      valuesTitle: "Values",
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
          experience: "4+ years",
          achievements: [
            "200,000+ subscribers",
            "100+ successful projects",
            "International partnerships",
          ],
          education: [
            "Agricultural Institute",
            "International business management",
          ],
          skills: ["Agribusiness", "Innovation", "Design", "Management"],
          email: "uzgrrow@gmail.com",
          phone: "+998 88 507 00 70",
          location: "Tashkent, Uzbekistan",
          linkedin: "#",
          twitter: "#",
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
      },
      achievementsLabel: "achievement",
    },
    greenhouse: {
      title: "Greenhouse Types",
      subtitle: "Optimal solution for each crop",
      description:
        "Familiarize yourself with different types of greenhouses and choose the right solution for you",
      glass: {
        title: "Glass Greenhouse",
        description: "Passes light well, durable but high construction cost.",
        features: ["Maximum light", "Long-lasting", "High efficiency"],
        complexity: "High",
        durability: "20+ years",
        cost: "High",
        maintenance: "Easy",
      },
      polycarbonate: {
        title: "Polycarbonate Greenhouse",
        description:
          "Light, affordable, good insulation, but not as durable as glass.",
        features: ["Lightweight", "Affordable", "Good insulation"],
        complexity: "Medium",
        durability: "10-15 years",
        cost: "Medium",
        maintenance: "Easy",
      },
      tunnel: {
        title: "Tunnel Greenhouse",
        description: "Simple, affordable, quick installation, but not durable.",
        features: ["Simple", "Affordable", "Quick installation"],
        complexity: "Low",
        durability: "5-8 years",
        cost: "Low",
        maintenance: "Easy",
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
        features: ["Space saving", "Ideal for city", "New technology"],
        complexity: "High",
        durability: "10-15 years",
        cost: "High",
        maintenance: "Complex",
      },
      film: {
        title: "Film Greenhouse",
        description: "Simple, affordable, quick installation, but not durable.",
        features: ["Cheap", "Quick installation", "Portable"],
        complexity: "Low",
        durability: "5-8 years",
        cost: "Low",
        maintenance: "Easy",
      },
      mini: {
        title: "Mini Greenhouse",
        description: "Small, affordable, ideal for home. Great for beginners.",
        features: ["Small size", "Ideal for home", "Simple assembly"],
        complexity: "Low",
        durability: "3-5 years",
        cost: "Low",
        maintenance: "Very easy",
      },
      oddiy: {
        title: "Simple Greenhouse",
        description:
          "Simple shape, affordable, easy to maintain. Great for small plots.",
        features: ["Simple shape", "Easy maintenance", "Lots of materials"],
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
          "Advanced polycarbonate, excellent insulation, excellent characteristics. Perfect for year-round cultivation.",
        features: [
          "Advanced polycarbonate",
          "Excellent insulation",
          "Excellent characteristics",
        ],
        complexity: "High",
        durability: "15-20 years",
        cost: "High",
        maintenance: "Moderate",
      },
      comparison: {
        title: "Comparison Table",
        subtitle: "Compare greenhouse types",
        material: "Material",
        light: "Light transmittance",
        durability: "Durability",
        cost: "Cost",
        maintenance: "Maintenance",
        serviceLife: "Service life",
      },
      guide: {
        title: "How to Choose the Right Greenhouse?",
        beginners: "For beginners",
        beginnersDesc:
          "Simple or tunnel greenhouse - affordable and easy to manage",
        professionals: "For professionals",
        professionalsDesc: "Polycarbonate or glass - durable and efficient",
        business: "For business",
        businessDesc: "Industrial, hydroponic or vertical - maximum efficiency",
        consult: "Consultation with specialist",
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
      address: "Tashkent city, Yunusobod district, Amir Temur street, 123",
      companyPhone: "+998555152223",
      companyPhone2: "+998994352313",
      companyEmail: "uzgrrow@gmail.com",
      website: "https://www.uzgrow.uz/",
      locationUrl:
        "https://yandex.ru/navi?rtext=41.202864,69.235732~41.202625,69.235384&rtt=auto",
      socialLinks: {
        facebook: "https://www.facebook.com/share/1DePjLwX79/",
        instagram:
          "https://www.instagram.com/uz.grow?igsh=MXMwN3lzaW95NTN1YQ==",
        telegram: "http://@Uz_Grow",
        youtube: "https://youtube.com/@rustamjonrakhmonov?si=9-OxlFiY0B875tD9",
        tiktok: "https://www.tiktok.com/@uz.grow",
      },
      services: {
        turnkey: "Turnkey Greenhouse Construction",
        engineering: "Agro-engineering",
        equipment: "Equipment",
        consulting: "Agro-consulting",
        investment: "Investment",
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
    footer: {
      brandName: "UZ-GROW",
      brandTagline: "CONSTRUCTION COMPANY",
      brandDescription:
        "Modern greenhouse construction and building services in Uzbekistan. The future starts today with us.",
      contact: "Contact",
      services: "Services",
      company: "Company",
      help: "Help",
      team: "Team",
      allRightsReserved: "All rights reserved",
      links: {
        services: [
          { label: "Greenhouse types", href: "/greenhouse-types" },
          { label: "Projects", href: "/projects" },
          { label: "Equipment", href: "/equipment" },
          { label: "Construction", href: "/construction" },
        ],
        company: [
          { label: "About us", href: "/about" },
          { label: "Team", href: "/team" },
          {
            label: "International partnership",
            href: "/international-partnership",
          },
          { label: "Media partnership", href: "/media-partnership" },
        ],
        help: [
          { label: "Contact", href: "/contact" },
          { label: "Gallery", href: "/gallery" },
          { label: "Privacy policy", href: "/privacy-policy" },
          { label: "Terms of use", href: "/terms-of-use" },
        ],
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
