"use client"

import { colorStyles } from "@/utils/styles/colors";
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, Checkbox, DialogContent, FormHelperText, IconButton, Portal, Snackbar, SnackbarCloseReason, TextField } from "@mui/material";
import { ReactNode, useState } from "react";
import z from "zod";
import { Dialog, DialogTitle, RDDialogProps } from "../core/data-display/Dialog";
import { Text } from "@/components/core/data-display/typography/Text"
import Link from "next/link";
import { TextLink } from "../core/data-display/typography/TextLink";
import { ROUTES } from "@/utils/constants/routes";
import { SegmentStateProvider } from "next/dist/next-devtools/userspace/app/segment-explorer-node";
import CloseIcon from '@mui/icons-material/Close';
import { error } from "console";

export interface MakeOrderModalProps extends RDDialogProps {
  videoIframe?: ReactNode;
}

export default function MakeOrderModal({ ...props }: MakeOrderModalProps) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    companyName: z
      .string(),
    needsNaming: z
      .boolean(),
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
      .boolean()
      .refine(val => val === true, {
        message: "Дайте согласие на обработку ПД чтобы продолжить",
      })
  });

  type FormValues = z.infer<typeof formSchema>;

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<FormValues>({
    companyName: "",
    needsNaming: false,
    description: "",
    contacts: "",
    email: "",
    name: "",
    agreement: false,
  });

  const filled =
    (values.companyName || values.needsNaming) &&
    values.description &&
    values.contacts &&
    values.email &&
    values.name &&
    values.agreement &&
    formSchema.safeParse(values).success;

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>(
    {}
  );

  function validateField<K extends keyof FormValues>(key: K, value: string | boolean) {
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
    const response = await fetch(`${BASE_URL}/api/orders/v0/create`, {
      method: "POST",
      headers: {
        "Accept-Language": "ru"
      },
      body: JSON.stringify({
        company_name: values.companyName,
        needs_naming: values.needsNaming,
        short_description: values.description,
        contacts: values.contacts,
        email: values.email,
        name: values.name,
        agreed_to_share_personal_data: values.agreement ? values.agreement : true,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      // TODO: add confetti effect
      setMessage("🎉 Заказ оформлен!");
      setOpen(true);
      setTimeout(() => window.location.reload(), 6000)
    } else {
      if (response.status === 422) {
        setErrors(data.errors)
      } else {
        setMessage("😢 Ошибка при создании заказа");
        setOpen(true);
      }
    }
  }

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
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
                <div className="flex flex-col gap-[0.75rem]">
                  <TextField
                    fullWidth
                    variant="standard"
                    id="companyName"
                    label="Название компании/проекта"
                    value={values.companyName}
                    onChange={handleChange("companyName")}
                    onBlur={handleBlur("companyName")}
                    error={!!errors.companyName}
                    helperText={errors.companyName}
                    {...(values.needsNaming ? { disabled: true } : {})}
                  />
                  <div className={`flex items-center gap-[0.75rem] ${values.companyName ? `cursor-not-allowed` : ''}`}>
                    <Checkbox
                      name="needsNaming"
                      onChange={(event) => setValues({ ...values, [event.target.name]: event.target.checked })}
                      onBlur={handleBlur("needsNaming")}
                      sx={{ padding: 0 }}
                      {...(values.companyName.length > 0 ? { disabled: true } : {})}
                    />
                    <Text
                      component={'span'}
                      variant="secondary"
                      {...(values.companyName ? { color: colorStyles['dark'].text.muted.default } : {})}
                    >
                      Нужно придумать название
                    </Text>
                  </div>
                </div>

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
                      name="agreement"
                      onChange={(event) => setValues({ ...values, [event.target.name]: event.target.checked })}
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
                loading={loading}
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
      {message && (
        <Portal>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={message}
            action={<>
              <IconButton
                size="large"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>}
          />
        </Portal>
      )}
    </>
  );
}