module.exports = {
    dummyD: [
        { 
        id: 1,
        name: 'Beans',
        characterImage: 'https://64.media.tumblr.com/215977e97dc083ab499481a2e79044f5/tumblr_owgqylC4PN1s5x930o1_1280.png',
        race:'Air Genasi',
        level: 6,
        hp: 50,
        charClass: 'Fighter',
        stats: {
            str: 13,
            dex: 18,
            con: 15,
            int: 16,
            wis: 12,
            cha: 11,
        },  
        proficiencies: {
            profBonus: 3,
            profStats: ['str', 'con'],
            profSkills: ['acrobatics', 'arcana', 'athletics', 'intimidation', 'perception']
        },
        speed: 30,
        armorClass: 16,
        initiative: 4,
        spells: {
            cantrips:[
                'Eldritch Blast',
                'Mage Hand',
                'Prestidigitation'
            ],
            lvl1:[
                'Expeditious Retreat',
                'Hex'
            ],
            lvl2:[
                'Levitate'
            ]
        },
        inventory: [
            '273g 10s',
            'Longbow',
            'Studded Leather',
            'Two Handaxes',
            'Potion of Healing',
            'Potion of Animal Friendship'
        ],
        otherSkills: [
            {
                name: 'Action Surge',
                use: 1,
            },
            {
                name: 'Arcane Shot',
                use: 2,
            },
            {
                name: 'Blood Maledict',
                use: 1
            }
        ]
        }
    ]
}
