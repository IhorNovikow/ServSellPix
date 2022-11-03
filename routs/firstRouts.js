const {Router} = require('express');
const router = Router();

    //получение данных
router.get('/', (req, res) => {
    res.json({a:1})
})

router.post('/', (req, res) => {
    res.json({a:2})
})


router.put('/:id', (req, res) => {
    res.json({a:3})
})

router.delete('/:id', (req, res) => {
    res.json({a:4})
})

module.exports = router;