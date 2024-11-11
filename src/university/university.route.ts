import { Router } from 'express';

const uniRouter = Router();

let universities = [
  { id: 1, name: 'Technical Univeristy' },
  { id: 2, name: 'Sofia University' },
  { id: 3, name: 'UNWE' }
];

uniRouter.get('/', (req, res) => {
  res.json(universities);
});

uniRouter.get('/:id', (req, res) => {
  const uniId = parseInt(req.params.id);
  const uni = universities.find((u) => u.id === uniId);
  if (uni) {
    res.json(uni);
  } else {
    res.status(404).json({ message: 'University not found' });
  }
});

uniRouter.post('/', (req, res) => {
  const newUni = {
    id: universities.length + 1,
    name: req.body.name,
  };
  universities.push(newUni);
  res.status(201).json(newUni);
});

// // PUT to update an existing user
// userRouter.put('/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   const userIndex = users.findIndex((u) => u.id === userId);
//   if (userIndex !== -1) {
//     users[userIndex] = {
//       id: userId,
//       name: req.body.name,
//       email: req.body.email,
//     };
//     res.json(users[userIndex]);
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });

uniRouter.patch('/:id/update-university', (req, res) => {
    const uniId = parseInt(req.params.id);
    const uniIndex = universities.findIndex((u) => u.id === uniId);
    if(uniIndex !== -1){
        universities[uniIndex] = {
            id: uniId,
            name: req.body.name
        };
        res.json(universities[uniIndex]);
    } else {
        res.status(404).json({ message: 'University not found' });
    }
});

// DELETE a user by ID
uniRouter.delete('/:id', (req, res) => {
  const uniId = parseInt(req.params.id);
  const uniIndex = universities.findIndex((u) => u.id === uniId);
  if (uniIndex !== -1) {
    const deletedUni = universities.splice(uniIndex, 1);
    res.json(deletedUni[0]);
  } else {
    res.status(404).json({ message: 'University not found' });
  }
});

export default uniRouter;
