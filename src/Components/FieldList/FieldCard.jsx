import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { delete_field, get_field } from "../../Redux/Actions/fieldActions";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Example from "../Profile/EditProfile";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black",
};

function FieldCard({ field }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("are you sure ?")) {
      dispatch(delete_field(field._id));
    }
  };

  const handleEdit = () => {
    dispatch(get_field(field._id));
    setOpen(true);
  };

  const oneField = useSelector((state) => state.fieldReducer.field);

  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={field.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {field.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <ul>
            <li>Max players: {field.capacity} Players </li>
            <li>Price: {field.price} TND</li>
            <li>Address: {field.location}</li>
            <li>Phone :{field.phoneNumber}</li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <div>
          <Example id={field._id} field={field}></Example>
        </div>
        <Button size="small" onClick={handleDelete}>
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
}

export default FieldCard;
