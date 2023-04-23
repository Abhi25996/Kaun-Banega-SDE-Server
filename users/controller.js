import * as userDao from './dao.js';



const findAllUsers = async (req, res) => {
    const users = await userDao.findUser()
    res.json(users);
}

const findUserById = async (req, res) => {
    const userIdToFind = req.params.uid;
    const user = await userDao.findUserById(userIdToFind)
    res.json(user);
}


const updateUser = async (req, res) => {
    const userIdToUpdate = req.params.uid;
    const updates = req.body;
    const status = await userDao.updateUser(userIdToUpdate, updates);
    res.json(status);
}


const deleteUser = async  (req, res) => {
    const userIdToDelete = req.params.uid;
    const status = await userDao.deleteUser(userIdToDelete);
    res.json(status);
}

const registerUser = async (req, res) => {
    const username = req.body.userName;
    console.log("Requested Body : ", req.body)
    const user = await userDao.findUserByUsername(username);
    if (user) {
        res.sendStatus(409);
        return;
    }
    const newUser = await userDao.createUser(req.body)
    console.log("new User received : ", newUser)
    req.session["currentUser"] = newUser;
    res.json(newUser);
};

const loginUser = async (req, res) => {
    const username = req.body.userName;
    const password = req.body.password;
    const user = await userDao.findUserByCredentials(username, password);
    if (user) {
        req.session["currentUser"] = user;
        res.json(user);
    } else {
        res.sendStatus(404);
        // res.sendStatus(404);
    }
};

const logoutUser = async (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
};



const aboutMe = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
        res.sendStatus(404);
        return;
    }
    res.json(currentUser);
};





const UserController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.put('/api/users/:uid', updateUser);
    app.delete('/api/users/:uid', deleteUser);
    app.post('/api/users/register', registerUser);
    app.post('/api/users/login', loginUser);
    app.post('/api/users/logout',   logoutUser);
    app.post("/api/users/aboutMe",  aboutMe);
}

export default UserController
