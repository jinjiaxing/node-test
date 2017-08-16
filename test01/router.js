var router = {
    test:(res)=> {
        res.write('test');
    },

        other:(res)=> {
        res.write('other');
    }
}

module.exports = router;