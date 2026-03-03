import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  Divider,
} from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { Box } from '@mui/system';
import { AddTaskForm } from './components/AddTaskForm';
import { TaskList } from './components/TaskList';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box display="flex" alignItems="center" gap={1} mb={4}>
          <ChecklistIcon color="primary" sx={{ fontSize: 36 }} />
          <Typography variant="h4" component="h1" fontWeight={700}>
            Todo App
          </Typography>
        </Box>

        <AddTaskForm />

        <Divider sx={{ mb: 2 }} />

        <Typography variant="h6" gutterBottom>
          Tasks
        </Typography>
        <TaskList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
