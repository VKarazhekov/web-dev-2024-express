import { Router } from 'express';

const userRouter = Router();

const subjects = ['maths', 'IT', 'Bio'];
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', uni: 'TU-Sofia', subjects },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', uni: 'Sofia University', subjects },
];

console.log(users);

userRouter.get('/', (req, res) => {
  res.json(users);
});

userRouter.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

userRouter.post('/', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    uni: req.body.uni,
    subjects: req.body.subjects
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT to update an existing user
userRouter.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = {
      id: userId,
      name: req.body.name,
      email: req.body.email,
      uni: req.body.uni,
      subjects: req.body.subjects
    };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

userRouter.patch('/:id/update-subjects', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    const newSubjects = req.body.subjects as string[]
    if (newSubjects.length > 0) {
      users[userIndex].subjects = newSubjects
      res.json(users[userIndex])
    } else {
      res.status(404).json({ message: 'Empty subjects could not be passed' });
    }

  } else {
    res.status(404).json({ message: 'User not found' });
  }
})

userRouter.patch('/:id/update-university', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    const newUni = req.body.uni
    if (newUni.length > 0) {
      users[userIndex].uni = newUni
      res.json(users[userIndex])
    } else {
      res.status(404).json({ message: 'Empty university could not be passed' });
    }

  } else {
    res.status(404).json({ message: 'User not found' });
  }
  
})

// DELETE a user by ID
userRouter.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

export default userRouter;
