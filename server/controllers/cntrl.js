const {dummyD} = require('./dummy')
let id = 2
let dummy = [
    {
         id: 1, 
         name: 'Beans',
         race:'Air Genasi',
        level: 6,
        hp: 50,
        charClass: 'Fighter',
        characterImage: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/10-best-dnd-character-designers-anna-sonnenberg-4.png',
            stats: {
            str: 13,
            dex: 18,
            con: 15,
            int: 16,
            wis: 12,
            cha: 11
        } 
        }, 
    { 
            id: 2, 
            name: 'Donny',
            race:'Air Genasi',
            level: 6,
            hp: 50,
            charClass: 'Fighter', 
            characterImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2f8182db-7133-4c86-b39a-fe4a466f3c3e/dervwik-a5fa5c0d-e5a3-42fb-9673-885b2de15085.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmODE4MmRiLTcxMzMtNGM4Ni1iMzlhLWZlNGE0NjZmM2MzZVwvZGVydndpay1hNWZhNWMwZC1lNWEzLTQyZmItOTY3My04ODViMmRlMTUwODUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sHzEni1P986Pp9SVFtGIJtEKtFSxZV7P0XN22Pvuwt0',
            stats: {
                str: 11,
                dex: 13,
                con: 15,
                int: 18,
                wis: 16,
                cha: 12
            }
        }
    ]

module.exports = {
    characters: (req, res) => {
        res.status(200).send(dummy)
    },

    newCharacter: (req, res) => {
        const {name, race, level, hp, charClass, stats} = req.body
        id++
        let newCharacter = {
            name,
            race,
            level,
            hp,
            charClass,
            stats
        }
        dummy.push()
        res.status(200).send(dummuy)
    }
}