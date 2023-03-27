let dummy = [{ id: 1, characterImage: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/10-best-dnd-character-designers-anna-sonnenberg-4.png' }, { id: 2, characterImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2f8182db-7133-4c86-b39a-fe4a466f3c3e/dervwik-a5fa5c0d-e5a3-42fb-9673-885b2de15085.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmODE4MmRiLTcxMzMtNGM4Ni1iMzlhLWZlNGE0NjZmM2MzZVwvZGVydndpay1hNWZhNWMwZC1lNWEzLTQyZmItOTY3My04ODViMmRlMTUwODUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sHzEni1P986Pp9SVFtGIJtEKtFSxZV7P0XN22Pvuwt0' }]

module.exports = {
    characters: (req, res) => {
        console.log('ping')
        res.status(200).send(dummy)
    }
}