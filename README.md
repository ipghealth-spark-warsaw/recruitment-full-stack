# Todo App – Recruitment Task

## Stack

- **Frontend**: React 18, Redux Toolkit Query, MUI v5, TypeScript, Vite
- **Backend**: NestJS, TypeORM, SQLite (better-sqlite3)
- **Infrastructure**: Docker, Docker Compose

---

## Getting Started

```bash
docker-compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/tasks

---

## Project Structure

```
├── docker-compose.yml
├── backend/
│   └── src/
│       ├── app.module.ts
│       ├── main.ts
│       └── tasks/
│           ├── task.entity.ts       # Task entity (id, title, description, status, createdAt)
│           ├── tasks.service.ts     # findAll, findOne implemented
│           └── tasks.controller.ts  # GET /tasks, GET /tasks/:id implemented
└── frontend/
    └── src/
        ├── main.tsx
        ├── App.tsx
        ├── types/task.ts
        ├── store/store.ts           # Redux store configured
        ├── services/tasksApi.ts     # RTQ – getTasks implemented
        └── components/
            ├── TaskList.tsx         # Displays tasks, delete button disabled
            └── AddTaskForm.tsx      # Form UI ready, submit not connected
```

---

## Your Task

Implement the missing **POST** and **DELETE** functionality across the full stack.

### 1. Backend – `backend/src/tasks/tasks.service.ts`

Implement the two commented-out methods:

```typescript
async create(createTaskDto: { title: string; description?: string }): Promise<Task>
async remove(id: number): Promise<void>
```

### 2. Backend – `backend/src/tasks/tasks.controller.ts`

Uncomment and implement:
- `POST /tasks` – create a new task
- `DELETE /tasks/:id` – delete a task by id

### 3. Frontend – `frontend/src/services/tasksApi.ts`

Uncomment and implement the two RTQ mutations:
- `addTask` – POST to `/api/tasks`
- `deleteTask` – DELETE to `/api/tasks/:id`

Export the generated hooks: `useAddTaskMutation`, `useDeleteTaskMutation`

### 4. Frontend – `frontend/src/components/AddTaskForm.tsx`

Wire up the `useAddTaskMutation` hook:
- Call `addTask` on form submit
- Clear the form on success

### 5. Frontend – `frontend/src/components/TaskList.tsx`

Wire up the `useDeleteTaskMutation` hook:
- Enable the delete `IconButton`
- Call `deleteTask(task.id)` on click

---

## Acceptance Criteria

- [ ] `POST /tasks` creates a task and returns it with status 201
- [ ] `DELETE /tasks/:id` removes a task and returns status 204
- [ ] Adding a task via the form updates the list automatically (RTQ cache invalidation)
- [ ] Deleting a task via the button removes it from the list automatically
- [ ] No page refresh required for either action

---

## Notes

- `synchronize: true` is set in TypeORM config – tables are auto-created, no migrations needed
- The `Task` entity has a `status` field (`todo | in_progress | done`), defaulting to `todo`
- CORS is already configured on the backend
- The Vite dev server proxies `/api/*` → `http://localhost:3001/*`

Good luck! 🚀
