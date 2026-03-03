import { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // TODO: Use useAddTaskMutation hook from tasksApi

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    // TODO: Call addTask mutation with { title, description }

    alert("Not implemented yet! Wire up the addTask mutation.");
  };

  return (
    <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add New Task
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
          size="small"
          sx={{ mb: 1.5 }}
        />
        <TextField
          label="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          size="small"
          multiline
          rows={2}
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
          disabled={!title.trim()}
        >
          Add Task
        </Button>
      </Box>
    </Paper>
  );
};
