import { Text } from "@/components/core/data-display/typography/Text";
import { colorStyles } from '@/utils/styles/colors';
import CloseIcon from '@mui/icons-material/Close';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { Heading } from "./typography/Heading";

export interface RDDialogProps extends DialogProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  size?: "sm" | "md" | "lg";
}

function RDDialog({ size = 'md', sx, setOpen, onClose, open, title, children, ...other }: RDDialogProps) {
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "1rem",
        },
        '& .MuiPaper-root': {
          background: colorStyles.dark.background.globe.default,
          border: `1px solid ${colorStyles.dark.background.border.default}`,
        },
        ...sx,
      }}
      onClose={onClose}
      aria-labelledby={title}
      open={open}
      {...other}
    >
      {title ?
        (
          <RDDialogTitle title={title} />
        ) : null
      }
      <IconButton
        aria-label="close"
        onClick={() => setOpen(false)}
        sx={{
          position: 'absolute',
          zIndex: 1000,
          right: "1rem",
          top: "1rem",
          color: colorStyles.dark.text.primary.default,
        }}
      >
        <CloseIcon />
      </IconButton>
      {children}
    </Dialog>
  );
}

export interface RDDialogTitleProps {
  title: string;
}

function RDDialogTitle({ title }: RDDialogTitleProps) {
  return (
    <DialogTitle component={'div'} sx={{ m: 0, p: 0, mb: '1.25rem' }} id={title}>
      <Heading variant="h2" order="h2">
        {title}
      </Heading>
    </DialogTitle>
  )
}

export { RDDialog as Dialog, RDDialogTitle as DialogTitle };
