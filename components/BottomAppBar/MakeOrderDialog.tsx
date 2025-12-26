"use client"

import { colorStyles } from "@/utils/styles/colors";
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, Checkbox, DialogContent, FormHelperText, TextField } from "@mui/material";
import { ReactNode, useState } from "react";
import z from "zod";
import { Dialog, DialogTitle, RDDialogProps } from "../core/data-display/Dialog";
import { Text } from "@/components/core/data-display/typography/Text"
import Link from "next/link";
import { TextLink } from "../core/data-display/typography/TextLink";
import { ROUTES } from "@/utils/constants/routes";

export interface MakeOrderModalProps extends RDDialogProps {
  videoIframe?: ReactNode;
}

export default function MakeOrderModal({ ...props }: MakeOrderModalProps) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
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
    agreement: z
      .string()
      .nonempty("Дайте согласие на обработку ПД чтобы продолжить"),
  });

  type FormValues = z.infer<typeof formSchema>;

  const [values, setValues] = useState<FormValues>({
    description: "",
    contacts: "",
    email: "",
    name: "",
    agreement: '',
  });

  const filled =
    values.description &&
    values.contacts &&
    values.email &&
    values.name &&
    values.agreement &&
    formSchema.safeParse(values).success;

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

    makeOrder();
  }

  async function makeOrder() {
    const response = await fetch(`${API_URL}/api/orders/v0/create`, {
      method: "POST",
      body: JSON.stringify({
        company_name: "test",
        needs_naming: "true",
        short_description: values.description,
        contacts: values.contacts,
        email: values.email,
        name: values.name,
        agreed_to_share_personal_data: "true",
      }),
    });
    const result = await response.json();
    console.log(result);
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
              <div className="flex flex-col gap-[0.25rem]">
                <div className="flex items-center gap-[1rem]">
                  <Checkbox
                    // checked={values.agreement.length > 0}
                    onChange={handleChange("agreement")}
                    onBlur={handleBlur("agreement")}
                    sx={{ padding: 0 }}
                  />
                  <Text component={'span'}>
                    Даю согласие на обработку моих{" "}
                    <TextLink
                      color={colorStyles.dark.text.link.default}
                      href={ROUTES.personalDataAgreement.href}
                    >
                      персональных данных
                    </TextLink>
                  </Text>
                </div>

                {errors.agreement && (
                  <FormHelperText error sx={{ marginLeft: "2rem" }}>
                    {errors.agreement}
                  </FormHelperText>
                )}
              </div>
            </div>
            <Button
              sx={{
                marginTop: '2.5rem',
                position: "sticky",
                bottom: "20px",
                left: 0,
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
          <div
            style={{
              position: 'relative',
              width: "100%",
              height: "100%",
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: "25%",
                height: "100%",
                background: `linear-gradient(90deg, ${colorStyles.dark.background.globe.default}, ${colorStyles.dark.background.globe.default}00)`,
                zIndex: 30,
              }}
            >
            </div>
            <iframe
              src="https://kinescope.io/embed/nDvtqWiHHm8SvrpVTXX268"
              // allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
              // allowfullscreen
              style={{
                zIndex: 20,
                position: "absolute",
                aspectRatio: '4/3',
                width: "225%",
                height: "100%",
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '0 12px 12px 0',
              }}
            >
            </iframe>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}