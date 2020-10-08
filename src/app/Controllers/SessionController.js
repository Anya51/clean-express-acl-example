const { UserRepository, SessionRepository } = require('../Repositories');

const SessionController =  {
  handle: async (req, res) => {
    try {

      const requiredFields = ['name', 'role'];

      for(const field of requiredFields){
        if(!req.body[field]){
          return res.status(400).json({'error': field + ' ' + 'is missing'});
        };
      };

    const {name, role} = req.body;

    const user = UserRepository.create(name, role);
    const token = SessionRepository.sign(user);

    return res.status(200).json({user, token});

  } catch (err) {
      return res.status(500).json({'error': err});
    }
  }
};



module.exports = SessionController;