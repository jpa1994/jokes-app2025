const getGif =()=> {

    const gifArr = [
        'https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyd2NvOXEwaTltNmg2NGJuMGMybmZ1aXF2Zm96ZGl1MjhucTlpbnpreSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GDp7LycxkT3LG/200w.gif', 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamV3c3duejg0c2Y0eHUxMW5xNGNuemZ5ZmZvbDhqZjFsNDJzZGt4ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mf2aCKTor3BgQ/200.webp', 'https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUycTh1OHEwNHk0ZTdhbTMwczJ5YmRvbnI0dHl3cnAycTRieWdrNjU4MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/huuk0XPg7APDO/200w.gif'
    ]

    const randomGif = gifArr[Math.floor(Math.random() * gifArr.length)]

    return randomGif
}

module.exports = getGif