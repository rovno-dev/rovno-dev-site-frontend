"use client"

import { colorStyles } from "@/utils/styles/colors";
import CheckIcon from '@mui/icons-material/Check';
import { Button, DialogContent, TextField } from "@mui/material";
import { ReactNode, useState } from "react";
import z from "zod";
import { Dialog, DialogTitle, RDDialogProps } from "../core/data-display/Dialog";

export interface MakeOrderModalProps extends RDDialogProps {
  videoIframe: ReactNode;
}

export default function MakeOrderModal({ videoIframe, ...props }: MakeOrderModalProps) {
  // const [files, setFiles] = useState('');

  const formSchema = z.object({
    description: z
      .string()
      .nonempty("Введите краткое описание"),
    contacts: z
      .string()
      .nonempty("Укажите телефон или мессенджер"),
    email: z
      .email("Введите корректный email"),
    name: z
      .string()
      .nonempty("Введите ваше имя")
      .min(2, "Слишком короткое имя"),
  });

  type FormValues = z.infer<typeof formSchema>;

  const [values, setValues] = useState<FormValues>({
    description: "",
    contacts: "",
    email: "",
    name: "",
  });

  const filled =
    values.description &&
    values.contacts &&
    values.email &&
    values.name;

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>(
    {}
  );

  function validateField<K extends keyof FormValues>(key: K, value: string) {
    const result = formSchema.shape[key].safeParse(value);

    setErrors((prev) => ({
      ...prev,
      [key]: result.success ? undefined : result.error.issues[0].message,
    }));
  }

  function handleChange<K extends keyof FormValues>(key: K) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setValues((prev) => ({ ...prev, [key]: value }));
    };
  }

  function handleBlur<K extends keyof FormValues>(key: K) {
    return () => {
      validateField(key, values[key]);
    };
  }

  function handleSubmit() {
    const result = formSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormValues, string>> = {};

      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof FormValues;
        fieldErrors[fieldName] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    console.log("Form valid:", result.data);
    // submit to backend here
  }

  return (
    <Dialog
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
        <div className="grid grid-cols-[400px_1fr] gap-x-[1rem]">
          <div className="p-[1.5rem] pr-0">
            <DialogTitle title="Оформить заказ" />
            <div className="flex flex-col gap-[1.5rem]">
              <TextField
                fullWidth
                variant="standard"
                id="description"
                label="Расскажите кратко о проекте"
                value={values.description}
                onChange={handleChange("description")}
                onBlur={handleBlur("description")}
                error={!!errors.description}
                helperText={errors.description}
              />

              <TextField
                fullWidth
                variant="standard"
                id="contacts"
                label="Телефон или мессенджер"
                value={values.contacts}
                onChange={handleChange("contacts")}
                onBlur={handleBlur("contacts")}
                error={!!errors.contacts}
                helperText={errors.contacts}
              />

              <TextField
                fullWidth
                variant="standard"
                id="email"
                label="Email"
                value={values.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                error={!!errors.email}
                helperText={errors.email}
              />

              <TextField
                fullWidth
                variant="standard"
                id="name"
                label="Ваше имя"
                value={values.name}
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
                error={!!errors.name}
                helperText={errors.name}
              />
              {/* <TextField
                fullWidth
                variant="standard"
                id="description"
                label="Доп. файлы (до 15мб.)"
                value={files}
                onChange={(e) => setFiles(e.target.value)}
              /> */}
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
              onClick={handleSubmit}
              variant="contained"
            >
              Оформить заказ
            </Button>
          </div>
          {videoIframe}
        </div>
      </DialogContent>
    </Dialog >
  );
}