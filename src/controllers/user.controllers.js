import { User } from '../models/user.model.js';

export const getAllUsers = async (req, res) => {
	const users = await User.findAll();
	console.log(req.body);
	res.send(users.map(user => (`${user.first_name} ${user.last_name}`)));
};

export const createUser = async (req, res) => {
	const { first_name, last_name, email, password, birthday } = req.body;
	const user = await User.create({ first_name, last_name, email, password, birthday });
	res.send({ message: 'Usuario creado', user: user });
};

export const getUserById = async (req, res) => {
	const { id } = req.params;

    try {
        const user = await User.findByPk(id)
        if (user) { 
            res.send(`usuario encontrado: ${user.first_name} ${user.last_name}`);
        }
        else{
            res.status(404).send('ERROR 404 Usuario no encontrado ');
        }
    } catch (error) {
        console.log(error);
    }
};

export const getUserInfo = async (req, res) => {
    const { id } = req.params
    const user = await User.findByPk(id)
	res.send({ message: 'informacion del usuario', user: user });
};
export const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        await User.destroy({ where: { id } })
        res.send({ message: 'usuario eliminado' });
    } catch (error) {
        console.log(error);
    }
}



