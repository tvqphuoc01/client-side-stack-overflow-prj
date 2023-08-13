import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Grid, IconButton } from "@mui/material";
import moment from "moment";
import CloseIcon from '@mui/icons-material/Close';
import client from "../../../configs/axios.config";
import { getCookie } from "cookies-next";


function MyDialogAnswer({
    open,
    handleOpenDialog,
    handleCloseDialog,
    values
}) {
    const [value, setValues] = useState([]);
    const userUUID = getCookie("user_uuid");

    useEffect(() => {
        setValues(values);
    }, [values]);

    const update_answer_status = async(questionID, status) => {
        try{
            const res = await client.main.put(
                `http://localhost:8009/api/update-answer-status`, {
                    answer_id: questionID,
                    answer_status: status,
                    requester_id: userUUID
                }
            )
            const result = await res;
            if (result.status == 200){
                alert('Update successfully');
            }
            else{
                alert('Update unsuccessfully');
            }
            handleCloseDialog();
        } catch (err) {
            console.log(err);
        }
    
    };

    const handleClose = () => {
        handleCloseDialog();
    }
    console.log(values)
    return (
        <div>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                fullWidth
            >
                <DialogTitle id="alert-dialog-slide-title" style={{ padding: "0" }}>
                    <Grid container justify={"space-between"}>
                        <Grid item xs={10}>
                            <div >
                                <Typography variant={"h5"} align={"left"} className="m-5">
                                    Answer detail
                                </Typography>
                            </div>
                        </Grid>
                        <Grid
                            item
                            container
                            justify={"center"}
                            alignItems={"center"}
                            direction={"column"}
                            xs={2}
                            className="my-5"
                        >
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                onClick={handleClose}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogTitle>

                <DialogContent dividers>
                    <form noValidate autoComplete="off">
                        {" "}
                        <Grid
                            container
                            justify={"left"}
                            alignItems={"left"}
                            direction={"column"}
                        >
                            <span><strong>ID:</strong></span>
                            <span>{values[0]?.id}</span>
                            <span className="mt-2"><strong>User id:</strong></span>
                            <span>{values[0]?.user_id}</span>
                            <span className="mt-2"><strong>Created at:</strong></span>
                            <span>{moment(values[0]?.create_date).format('ddd DD.MM.yyyy HH:mm')}</span>
                            <span className="mt-2"><strong>Status:</strong></span>
                            <span>{values[0]?.answer_status == -1 ? 'Pending' : values[0]?.answer_status == 1 ? 'Approve' : 'Decline'}</span>
                            <span className="mt-2"><strong>From question:</strong></span>
                            <span>{values[0]?.question_id}</span>
                            <span className="mt-2"><strong>Content:</strong></span>
                            <span>{values[0]?.content}</span>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        type={"submit"}
                        size={"large"}
                        variant="outlined"
                        color="error"
                        disabled={values[0]?.answer_status !== 1}
                        onClick={() => update_answer_status(values[0]?.id, 0)}
                    >
                        Decline
                    </Button>
                    <Button
                        type={"submit"}
                        size={"large"}
                        variant="outlined"
                        color="success"
                        disabled={values[0]?.answer_status == 1}
                        onClick={() => update_answer_status(values[0]?.id, 1)}
                    >
                        Approve
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default MyDialogAnswer;
