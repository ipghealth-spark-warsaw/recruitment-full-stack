import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task } from "./task.entity";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  // TODO: Add POST

  // TODO: Add DELETE
}
