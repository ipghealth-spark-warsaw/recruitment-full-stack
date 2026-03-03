import { Router, Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Task } from "./task.entity";

export const tasksRouter = Router();

const getTaskRepository = () => AppDataSource.getRepository(Task);

// GET /tasks — returns all tasks
tasksRouter.get("/", async (req: Request, res: Response) => {
  try {
    const tasks = await getTaskRepository().find({
      order: { createdAt: "DESC" },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
});

// GET /tasks/:id — returns a single task
tasksRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const task = await getTaskRepository().findOne({ where: { id } });

    if (!task) {
      res.status(404).json({ message: `Task with id ${id} not found` });
      return;
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch task" });
  }
});

// TODO: Implement POST — create a new task

// TODO: Implement DELETE — delete a task by id
