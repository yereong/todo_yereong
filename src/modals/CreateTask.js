import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const CreateTask = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(0);
    const [deadline, setDeadline] = useState('');

    const handleSave = () => {
        let taskObj = {};
        taskObj["Name"] = taskName;
        taskObj["Description"] = description;
        taskObj["category"] = category;
        taskObj["deadline"] = deadline;
        save(taskObj);
    }

    return (
        <Modal isOpen={modal} onRequestClose={toggle} ariaHideApp={false}>
            <h3>Create Task</h3>
            <TextField
                label="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                margin="normal"
            />
            <FormControl fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <MenuItem value={0}>학교</MenuItem>
                    <MenuItem value={1}>운동</MenuItem>
                    <MenuItem value={2}>공부</MenuItem>
                    <MenuItem value={3}>기타</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Deadline"
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
            />
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={toggle}>Cancel</Button>
        </Modal>
    );
};

export default CreateTask;
