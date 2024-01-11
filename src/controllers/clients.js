import ClientRepository from '../models/clientsModel.js';

function findAll(req, res) {
    ClientRepository.findAll()
        .then((result) => res.json(result));
}

function findClient(req, res) {
    ClientRepository.findByPk(req.params.id)
        .then((result) => res.json(result))
}

async function addClient(req, res) {
    try {
        const result = await ClientRepository.create({
            name: req.body.name,
            email: req.body.email,
        });
        res.json(result);
    } catch (error) {
        console.error('Error in addClient:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateClient(req, res) {
    await ClientRepository.update(
        {
            name: req.body.name,
            email: req.body.email
        },
        {
            where: {
                id: req.params.id,
            }
        }
    );
    ClientRepository.findByPk(req.params.id)
        .then((result) => res.json(result));
}

async function deleteClient(req, res) {
    await ClientRepository.destroy({
        where: {
            id: req.params.id
        }
    })
    ClientRepository.findAll().then((result) => res.json(result))
}

export default { findAll, addClient, findClient, updateClient, deleteClient }
