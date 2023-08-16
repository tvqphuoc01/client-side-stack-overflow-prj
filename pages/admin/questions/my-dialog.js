import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Grid, IconButton } from "@mui/material";
import moment from "moment";
import CloseIcon from '@mui/icons-material/Close';
import client from "../../../configs/axios.config";
import { getCookie } from "cookies-next";


function MyDialog({
    open,
    handleOpenDialog,
    handleCloseDialog,
    // values
    id
}) {
    // const [value, setValues] = useState([]);
    const [detail, setDetail] = useState(null);
    const userUUID = getCookie("user_uuid");
    console.log(id);

    // useEffect(() => {
    //     setValues(values);
    // }, [values]);

    useEffect(() => {
        getQuestionById();
    }, [id]);

    async function getQuestionById() {
        try {
            const res = await client.main.get(`http://localhost:8009/api/get-question-by-id?question_id=${id}&requester_id=${getCookie("user_uuid")}`);
            setDetail(res.data.data);
        } catch (e) {
            console.log(e);
        }
    }


    const update_question_status = async (questionID, status) => {
        try {
            const result = await client.main.put(
                `http://localhost:8009/api/update-question-status`, {
                question_id: questionID,
                question_status: status,
                requester_id: userUUID
            }
            )
            if (result.status == 200) {
                alert('Update successfully');
                getQuestionById();
            }
            else {
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
                                    Question detail
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
                            <span>{detail?.id}</span>
                            <span className="mt-2"><strong>User created:</strong></span>
                            <span>{detail?.user_data?.data?.full_name}</span>
                            <span className="mt-2"><strong>Created at:</strong></span>
                            <span>{moment(detail?.create_date).format('ddd DD.MM.yyyy HH:mm')}</span>
                            <span className="mt-2"><strong>Title:</strong></span>
                            <span>{detail?.title}</span>
                            <span className="mt-2"><strong>Status:</strong></span>
                            <span>{detail?.status == 0 ? 'Pending' : detail?.status == 1 ? 'Approve' : 'Decline'}</span>
                            <span className="mt-2"><strong>Content:</strong></span>
                            <span>{detail?.content}</span>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        type={"submit"}
                        size={"large"}
                        variant="outlined"
                        color="error"
                        disabled={detail?.status == 2}
                        onClick={() => update_question_status(detail?.id, 2)}
                    >
                        Decline
                    </Button>
                    <Button
                        type={"submit"}
                        size={"large"}
                        variant="outlined"
                        color="success"
                        disabled={detail?.status == 1}
                        onClick={() => update_question_status(detail?.id, 1)}
                    >
                        Approve
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default MyDialog;
