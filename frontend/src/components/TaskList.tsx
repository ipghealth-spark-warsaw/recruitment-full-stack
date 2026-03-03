import {
  Box,
  Chip,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
  Alert,
  IconButton,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGetTasksQuery } from '../services/tasksApi';
import { TaskStatus } from '../types/task';

const statusColorMap: Record<TaskStatus, 'default' | 'warning' | 'success'> = {
  todo: 'default',
  in_progress: 'warning',
  done: 'success',
};

const statusLabelMap: Record<TaskStatus, string> = {
  todo: 'To Do',
  in_progress: 'In Progress',
  done: 'Done',
};

export const TaskList = () => {
  const { data: tasks, isLoading, isError } = useGetTasksQuery();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        Failed to fetch tasks. Make sure the backend is running.
      </Alert>
    );
  }

  if (!tasks || tasks.length === 0) {
    return (
      <Typography color="text.secondary" textAlign="center" mt={4}>
        No tasks yet. Add one to get started!
      </Typography>
    );
  }

  return (
    <List>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          divider
          secondaryAction={
            <Tooltip title="Delete task (not yet implemented)">
              {/* TODO: Wire up deleteTask mutation here */}
              <span>
                <IconButton edge="end" disabled aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </span>
            </Tooltip>
          }
        >
          <ListItemText
            primary={task.title}
            secondary={task.description || undefined}
          />
          <Chip
            label={statusLabelMap[task.status]}
            color={statusColorMap[task.status]}
            size="small"
            sx={{ mr: 2 }}
          />
        </ListItem>
      ))}
    </List>
  );
};
