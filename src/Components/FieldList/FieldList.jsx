import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_field, get_fields } from "../../Redux/Actions/fieldActions";
import FieldCard from "./FieldCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import TextField from "@mui/material/TextField";

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

const FieldList = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_fields());
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(
      add_field({ name, price, image, capacity, location, phoneNumber })
    );
  };

  const fields = useSelector((state) => state.fieldReducer.fields);
  return (
    <div>
      <div>
        <Button onClick={handleOpen}>add field</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                onChange={(e) => setName(e.target.value)}
                value={name}
                id="outlined-search"
                label="Name"
                type="search"
              />
              <TextField
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                id="standard-number"
                label="Price in DT"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
              <TextField
                onChange={(e) => setImage(e.target.value)}
                value={image}
                id="outlined-search"
                label="image url"
                type="search"
              />
              <TextField
                onChange={(e) => setCapacity(e.target.value)}
                value={capacity}
                id="standard-number"
                label="Number of players"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
              <TextField
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                id="outlined-search"
                label="Address"
                type="search"
              />
              <TextField
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                id="standard-number"
                label="Phone number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
            </Box>
            <Button onClick={handleAdd} variant="contained" color="success">
              ADD
            </Button>
          </Box>
        </Modal>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        {fields.map((field) => (
          <FieldCard field={field} key={field._id} />
        ))}
      </div>
    </div>
  );
};

export default FieldList;
