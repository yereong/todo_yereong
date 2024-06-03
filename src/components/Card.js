import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
import Checkbox from '@mui/material/Checkbox';
import { Card as MuiCard, CardContent, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);
    const theme = useTheme();

    const colors = [
        { primaryColor: '#f48fb1', secondaryColor: '#fce4ec'},
        { primaryColor: '#ce93d8', secondaryColor:'#e1bee7' },
        { primaryColor: '#42a5f5', secondaryColor: '#bbdefb' },
        { primaryColor: '#e57373', secondaryColor: '#ffcdd2' },
        { primaryColor: theme.palette.warning.main, secondaryColor: theme.palette.warning.light }
    ];

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index);
    }

    const handleDelete = () => {
        deleteTask(index);
    }

    const handleCheckboxChange = (event) => {
        taskObj.completed = event.target.checked;
        updateTask(taskObj);
    }

    const categoryIndex = taskObj.category !== undefined ? taskObj.category % colors.length : 0;
    const primaryColor = colors[categoryIndex]?.primaryColor || theme.palette.grey[500];
    const secondaryColor = colors[categoryIndex]?.secondaryColor || theme.palette.grey[200];

    return (
        <MuiCard style={{ marginBottom: 20, position: 'relative' }}>
            <div style={{ backgroundColor: primaryColor, height: 5 }}></div>
            <CardContent style={{ backgroundColor: secondaryColor }}>
                <Typography variant="h5" component="div">
                    <Checkbox checked={taskObj.completed} onChange={handleCheckboxChange} />
                    {taskObj.Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {taskObj.Description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Deadline: {taskObj.deadline}
                </Typography>
                <Button size="small" onClick={toggle}>Edit</Button>
                <Button size="small" color="error" onClick={handleDelete}>Delete</Button>
            </CardContent>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </MuiCard>
    );
};

export default Card;
