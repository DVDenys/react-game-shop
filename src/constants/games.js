import forzaImg from '@static/game-covers/forza_5.jpeg';
import battlefieldImg from '@static/game-covers/battlefield_2042.jpg';
import lifeImg from '@static/game-covers/life_is_strange_true_colors.jpeg';
import gtaImg from '@static/game-covers/gta_v.jpeg';
import rainbowImg from '@static/game-covers/rainbow_siege.jpeg';
import assassinsImg from '@static/game-covers/assassins_creed_valhalla.png';


export const GAMES = [
    {
        image: forzaImg,
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 1199,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: battlefieldImg,
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 1499,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: lifeImg,
        title: 'Life is Strange True Colors',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 1399,
        id: 3,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: gtaImg,
        title: 'Grand Theft Auto V',
        genres: ['Открытый мир', 'Экшен'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 672,
        id: 4,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: rainbowImg,
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 399,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: assassinsImg,
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 915,
        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
]