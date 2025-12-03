import { Box, Container } from "@mui/material";
import RovnoLogotype from "./RovnoLogotype";
import { colorStyles } from "@/utils/styles/colors";
import { RefObject } from "react";

export default function Header(ref?: RefObject<unknown>) {
  return (
    <Box
      ref={ref}
      position={'fixed'}
      top={0}
      left={0}
      paddingInline={'32px'}
      paddingBlock={'24px'}
      justifyContent={'center'}
      width={'100%'}
      border={`1px solid ${colorStyles.dark.background.border.default}`}
      sx={{
        backgroundColor: colorStyles.dark.background.card.default,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <RovnoLogotype height={50} />
      </Container>
    </Box>
  );
}
