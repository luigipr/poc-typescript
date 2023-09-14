import { Request, Response } from "express";
import { userRepository } from "repositories/user.repository";
import { CreateUserData, User } from "protocols";

async function getUsers(req: Request, res: Response) {
  const result = await userRepository.Read();
  const users = result.rows
  res.send(users);
}

async function createUser(req: Request, res: Response) {
  const {name, email, password} = req.body as CreateUserData

  await userRepository.Create(name, email, password);

  res.sendStatus(201);
}

async function updateUser(req: Request, res: Response) {
  const {name, email, password} = req.body as User
  const {id} = req.params
  const userId = Number(id)
  await userRepository.Update(name, email, password, userId);

  res.sendStatus(201);
}

async function deleteUser(req: Request, res: Response) {
  const {id} = req.params
  const userId = Number(id)
  await userRepository.Delete(userId);

  res.sendStatus(201);
}

const userController = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
}

export default userController;