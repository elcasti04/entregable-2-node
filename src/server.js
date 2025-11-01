import app from './app.js';
import sequelize from './db/conect.js';


const startServer = async () => {
	try {
		console.log('conectando a la base de datos....');
		await sequelize.authenticate();
		await sequelize.sync({ force: false });
		await sequelize.sync({ alter: true });


		console.log('base de datos conectada');
		app.listen(PORT, () => {
			console.log(
				`servidor corriendo en el puerto http://localhost:${app.get('port')}`,
			);
		});
	} catch (error) {
		console.log(`algo salio mal: ${error}`);
		process.exit(1);
	}
};
startServer();

const PORT = process.env.PORT || 3000;
