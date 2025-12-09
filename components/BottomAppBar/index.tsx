"use client"

import { Button } from "@mui/material";
import { colorStyles } from "@/utils/styles/colors";
import RovnoLogotypeIcon from "../core/data-display/RovnoLogotype/LogotypeIcon";
import { ROUTES } from "@/utils/constants/routes";
import { Container } from "../core/layout/Container";
import { TextLink } from "../core/data-display/typography/TextLink";
import { Dialog } from "../core/data-display/Dialog";
import MakeOrderDialog from "./MakeOrderDialog";
import { ReactNode, useEffect, useState } from "react";

export default function BottomAppBar() {
  const [open, setOpen] = useState(false);
  const [videoIframe] = useState<ReactNode>(
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
  );

  const links = [
    ROUTES.cases,
    ROUTES.about,
    ROUTES.career,
    ROUTES.vershiny,
    ROUTES.journal,
  ]
  return (
    <nav
      style={{
        background: `linear-gradient(0deg, ${colorStyles.dark.background.globe.default}, ${colorStyles.dark.background.globe.default}00)`,
        position: 'fixed',
        bottom: 0,
        left: 0,
        paddingBottom: '30px',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Container
        className="flex justify-center"
      >
        <div
          className="h-[60px] flex"
          aria-label="Bottom app bar"
          style={{
            border: `1px solid ${colorStyles.dark.background.border.default}`,
            borderRadius: 1000,
            background: colorStyles.dark.background.globe.default,
          }}
        >
          <div
            className="flex gap-[16px] items-center"
            style={{
              paddingLeft: '32px',
              paddingRight: '40px',
            }}
          >
            {links.map((link, key) => (
              <TextLink href={link.href} key={key}>
                {link.defaultTitle}
              </TextLink>
            ))}
          </div>
          <Button
            onClick={() => setOpen(true)}
            startIcon={<RovnoLogotypeIcon width={24} />}
            variant="contained"
            sx={{
              borderRadius: "0 1000px 1000px 0",
              paddingInline: '30px',
              height: "100%",
            }}
          >
            Оформить заказ
          </Button>
          <MakeOrderDialog
            setOpen={setOpen}
            open={open}
            keepMounted
            videoIframe={videoIframe}
          />
        </div>
      </Container>
    </nav>
  );
}
