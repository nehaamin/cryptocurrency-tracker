const userHandler = require('express')();
const coinList = ['BTC', 'ETH'];

userHandler.get('/:user?', async (req, res, next) => {
    const { user } = req.params;
    if (user) {
        const snapshot = await req.firebaseRef.child('users').child(user).once('value');
        const userInfo = snapshot.val();
        if (userInfo != null) {
            return res.send(userInfo);
        }
    }
    return res.send({ symbols: coinList });
});

userHandler.put('/:user', async (req, res, next) => {
    const { user } = req.params;
    const newInfo = req.body;
    usersRef = req.firebaseRef.child('users');
    usersRef.set({
        [user]: newInfo
    });

    const snapshot = await req.firebaseRef.child('users').child(user).once('value');
    const userInfo = snapshot.val();

    res.send({ user: userInfo });
});

module.exports = userHandler;