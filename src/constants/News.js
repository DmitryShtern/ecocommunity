import { Logo, PrevImages } from "./images"

const News = [
  {
    id: 0,
    title: "Заголовок новости с длиной больше 50ти символов (но это не точно)",
    description:
      "В пятницу, 2 марта, администрация района организовала и провела на реке Белой экологическую акцию «Чистая река – чистые берега», участие в которой приняли юные добровольцы «Экологического содружества», учащиеся 7 «Д» школы №5. Под руководством взрослых ребята прошли по берегу реки от улицы Чапаева до улицы Папанина, очистив от мусора охранную зону главной водной артерии города. Результат акции – 15 мешков мусора, каждый объёмом по 120 литров. Ежегодно в ходе санитарных рейдов, которые проводятся не только на набережной, но и по всему городу, молодёжь собирает тонны отходов. А хотелось бы всё-таки, чтобы необходимости в добровольных санитарных рейдах не возникало. Для этого достаточно, чтобы взрослое население Белореченска цивилизованно утилизировало бытовые отходы.",
    date: "YYYY-MM-DD",
    preview: PrevImages[0] || Logo,
    album_id: 0,
    tags: ["tag1", "tag2"],
  },
  {
    id: 1,
    title: "The title of news with a length of more than 50 characters (but this is not accurate)",
    description: "description1",
    date: "2018-01-01",
    preview: PrevImages[1] || Logo,
    album_id: 1,
    tags: ["tag3", "tag4"],
  },
  {
    id: 2,
    title: "В Белореченске прошла экологическая акция «Чистая река – чистые берега»",
    description: "description2",
    date: "2018-01-02",
    preview: PrevImages[2] || Logo,
    album_id: 2,
    tags: ["tag5", "tag6"],
  },
  {
    id: 3,
    title:
      "Заголовок новости с длиной больше 100 символов (но это не точно) Заголовок новости с длиной больше 100",
    description: "description3",
    date: "2018-01-03",
    preview: PrevImages[3] || Logo,
    album_id: 3,
    tags: ["tag2", "tag5"],
  },
  {
    id: 4,
    title: "ЗАВОД ПО ПЕРЕРАБОТКЕ МУСОРА В СОЧИ: СТАРТ ДАН",
    description: "description4",
    date: "2018-01-04",
    preview: PrevImages[4] || Logo,
    album_id: 4,
    tags: ["tag1", "tag4"],
  },
  {
    id: 5,
    title: "title5",
    description: "description5",
    date: "2018-01-05",
    preview: PrevImages[5] || Logo,
    album_id: 5,
    tags: ["tag4", "tag2"],
  },
]

export default News
