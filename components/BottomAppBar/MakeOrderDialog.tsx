import { Button, DialogActions, DialogContent, DialogProps, TextField } from "@mui/material";
import { Dialog, RDDialogProps, DialogTitle } from "../core/data-display/Dialog";
import { MouseEventHandler, useEffect, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';

export default function MakeOrderModal({ ...props }: RDDialogProps) {
  // const [filled, setFilled] = useState(false);
  const [description, setDescription] = useState('');
  const [contacts, setContacts] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [files, setFiles] = useState('');

  const filled =
    description.length > 0 &&
    contacts.length > 0 &&
    email.length > 0 &&
    name.length > 0;

  // useEffect(() => {
  //   // add validation
  //   if (description.length > 0, contacts.length > 0, email.length > 0, name.length > 0) {
  //     setFilled(true);
  //   } else {
  //     setFilled(false);
  //   }
  // }, [description, contacts, email, name, files]);

  return (
    <Dialog
      // title="Оформить заказ"
      sx={{
        "& .MuiDialogContent-root": {
          padding: 0,
        }
      }}
      fullWidth
      maxWidth="md"
      {...props}
    >
      <DialogContent>
        <div className="grid grid-cols-[400px_1fr] gap-x-[3rem]">
          <div className="p-[1.5rem] pr-0">
            <DialogTitle title="Оформить заказ" />
            <div className="flex flex-col gap-[1.5rem]">
              <TextField
                fullWidth
                variant="standard"
                id="description"
                label="Расскажите кратко о проекте"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                fullWidth
                variant="standard"
                id="description"
                label="Телефон или мессенджер"
                value={contacts}
                onChange={(e) => setContacts(e.target.value)}
              />
              <TextField
                fullWidth
                variant="standard"
                id="description"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                variant="standard"
                id="description"
                label="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                variant="standard"
                id="description"
                label="Доп. файлы (до 15мб.)"
                value={files}
                onChange={(e) => setFiles(e.target.value)}
              />
            </div>
            <Button
              sx={{
                marginTop: '2.5rem'
              }}
              size="large"
              fullWidth
              startIcon={filled && <CheckIcon />}
              autoFocus
              {...(filled ? {} : { disabled: true })}
              onClick={props.onClose as MouseEventHandler<HTMLButtonElement>}
              variant="contained"
            >
              Оформить заказ
            </Button>
          </div>
          <div style={{
            position: 'relative',
            width: "100%",
            height: "100%",
            overflow: 'hidden',
          }}>
            <iframe
              src="https://kinescope.io/embed/wJ6WmWZCkVYZr6yEDvYmLo"
              // allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
              // allowfullscreen
              style={{
                position: "absolute",
                aspectRatio: '4/3',
                width: "250%",
                height: "100%",
                background: 'red',
                top: "0",

                borderRadius: '0 12px 12px 0',
                // aspectRatio: '9/16',
              }}
            >
            </iframe>
          </div>
        </div>
      </DialogContent>
    </Dialog >
  );
}