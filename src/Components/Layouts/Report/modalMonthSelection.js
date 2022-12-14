import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import {blue} from '@mui/material/colors';
import ReceiptLongTwoToneIcon from '@mui/icons-material/ReceiptLongTwoTone';


const emails = ['All Transaction', 'Last Month', "Last 3 Months"];

function ModalMonthSelection(props) {
    const {onClose, selectedValue, open} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Select Period</DialogTitle>
            <List sx={{pt: 0}}>
                {emails.map((email) => (
                    <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                        <ListItemAvatar>
                            <Avatar sx={{bgcolor: blue[100], color: blue[600]}}>
                                <ReceiptLongTwoToneIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email}/>
                    </ListItem>
                ))}


            </List>
        </Dialog>
    );
}

export default ModalMonthSelection
